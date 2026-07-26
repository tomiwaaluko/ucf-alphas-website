import { Resend } from "resend";
import {
  escapeHtml,
  escapeHtmlWithBreaks,
  sanitizeHeaderValue,
} from "./_lib/sanitize.js";

/**
 * Origins permitted to call this endpoint.
 *
 * Previously this sent `Access-Control-Allow-Origin: *` together with
 * `Access-Control-Allow-Credentials: true` -- a combination browsers reject
 * outright, and one that advertised an intent to accept credentialed
 * cross-origin calls. The allowlist is env-driven so preview deployments can
 * be added without a code change.
 */
const ALLOWED_ORIGINS = (
  process.env.ALLOWED_ORIGINS ||
  "https://ucfalphas.com,https://www.ucfalphas.com"
)
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

/** Per-field input caps. Nothing here was previously length-limited at all. */
const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 maximum
  subject: 200,
  message: 5000,
};

/** Rate limit: requests allowed per IP per window. */
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Best-effort in-memory rate limiter.
 *
 * NOTE: serverless instances are per-region and recycled, so this is a speed
 * bump rather than a guarantee -- a distributed attacker hitting cold instances
 * can still get through. It exists because the endpoint previously had NO
 * throttle at all: anyone could curl it in a loop, burn the Resend quota, and
 * flood the chapter inbox. For a hard guarantee, move this to Upstash/Redis or
 * Vercel's WAF rate limiting.
 */
const rateLimitBuckets = new Map();

function isRateLimited(ip) {
  const now = Date.now();

  // Opportunistic sweep so the map cannot grow without bound.
  for (const [key, entry] of rateLimitBuckets) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitBuckets.delete(key);
    }
  }

  const entry = rateLimitBuckets.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function clientIp(req) {
  // Header choice matters: if the rate-limit key is attacker-controlled, the
  // attacker just varies it and gets a fresh bucket on every request.
  //
  // `x-vercel-forwarded-for` is set by Vercel's edge and is not forgeable by
  // the caller, so it is the first choice.
  const vercelForwarded = req.headers["x-vercel-forwarded-for"];
  if (typeof vercelForwarded === "string" && vercelForwarded.length > 0) {
    return vercelForwarded.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp.trim();
  }

  // Fallback. Take the LAST entry, not the first: a proxy appends the address
  // it observed, so the last hop is the only entry our trusted proxy wrote.
  // Anything earlier in the list may have been supplied by the caller.
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    const parts = forwarded.split(",");
    return parts[parts.length - 1].trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(req, res) {
  try {
    const origin = req.headers.origin;
    if (origin && ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Vary", "Origin");
    }
    res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("X-Content-Type-Options", "nosniff");

    if (req.method === "OPTIONS") {
      return res.status(204).end();
    }

    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ success: false, error: "Method not allowed. Use POST." });
    }

    // Reject browser requests from origins we do not recognise.
    //
    // Scope of this control, stated honestly: a non-browser client (curl, a
    // script) can simply omit Origin or forge it, so this does NOT stop
    // automated abuse. It stops a third-party *web page* from driving this
    // endpoint with a user's browser. The rate limiter above is the control
    // that applies to scripted callers.
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return res.status(403).json({ success: false, error: "Forbidden" });
    }

    const contentType = req.headers["content-type"] || "";
    if (!contentType.includes("application/json")) {
      return res
        .status(415)
        .json({ success: false, error: "Content-Type must be application/json." });
    }

    if (isRateLimited(clientIp(req))) {
      return res.status(429).json({
        success: false,
        error: "Too many requests. Please try again later.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    // Config problems are logged server-side; the client gets a generic
    // message. The old version told callers exactly which env var was missing.
    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Contact API misconfigured:", {
        hasResendKey: !!apiKey,
        hasFromEmail: !!fromEmail,
        hasToEmail: !!toEmail,
      });
      return res.status(500).json({
        success: false,
        error: "The contact form is temporarily unavailable.",
      });
    }

    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
        required: ["name", "email", "subject", "message"],
      });
    }

    if (
      [name, email, subject, message].some((v) => typeof v !== "string")
    ) {
      return res
        .status(400)
        .json({ success: false, error: "All fields must be strings." });
    }

    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    for (const [field, max] of Object.entries(MAX_LENGTHS)) {
      if (trimmed[field].length > max) {
        return res.status(400).json({
          success: false,
          error: `Field "${field}" exceeds the maximum length of ${max} characters.`,
        });
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed.email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email format" });
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(trimmed.name);
    const safeEmail = escapeHtml(trimmed.email);
    const safeSubject = escapeHtml(trimmed.subject);
    const safeMessage = escapeHtmlWithBreaks(trimmed.message);
    const mailtoHref = `mailto:${encodeURIComponent(trimmed.email)}`;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: trimmed.email,
      subject: sanitizeHeaderValue(`New Contact Form: ${trimmed.subject}`),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #000; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #fbbf24; text-align: center; margin: 0; font-size: 28px;">
              New Contact Form Submission
            </h1>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
              Contact Details
            </h2>

            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Name:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${safeName}</p>
            </div>

            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Email:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">
                <a href="${mailtoHref}" style="color: #fbbf24; text-decoration: none;">${safeEmail}</a>
              </p>
            </div>

            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Subject:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${safeSubject}</p>
            </div>

            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Message:</strong>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #fbbf24;">
                <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">${safeMessage}</p>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #666;">
            <p>This email was sent from the UCF Alphas website contact form.</p>
            <p style="font-size: 14px;">
              <strong>Alpha Phi Alpha Fraternity, Inc. - Xi Iota Chapter</strong>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      // Full detail to the server log; a generic message to the caller. The
      // old version returned error.message and a JSON dump of the raw error,
      // which leaked provider and configuration internals.
      console.error("Resend API error:", error);

      if (error.message?.includes("rate limit")) {
        return res.status(429).json({
          success: false,
          error: "Too many requests. Please try again later.",
        });
      }

      return res
        .status(500)
        .json({ success: false, error: "Failed to send message." });
    }

    console.log("Contact email sent:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Unexpected error in contact handler:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
}
