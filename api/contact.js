import { Resend } from "resend";

export default async function handler(req, res) {
  // Add detailed logging for production debugging
  console.log("=== Contact API Called ===");
  console.log("Timestamp:", new Date().toISOString());
  console.log("Method:", req.method);
  console.log("Vercel Environment:", process.env.VERCEL_ENV);
  console.log("Environment check:", {
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.FROM_EMAIL,
    hasToEmail: !!process.env.TO_EMAIL,
    apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 8) || "MISSING",
  });

  try {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // Handle OPTIONS preflight request
    if (req.method === "OPTIONS") {
      console.log("✓ Handling OPTIONS preflight");
      return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== "POST") {
      console.log("❌ Method not allowed:", req.method);
      return res.status(405).json({
        success: false,
        error: "Method not allowed. Use POST.",
        received: req.method,
      });
    }

    console.log("Body received:", JSON.stringify(req.body, null, 2));

    // Validate environment variables with detailed logging
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    console.log("Environment variables loaded:", {
      apiKey: apiKey ? `${apiKey.substring(0, 8)}...` : "❌ MISSING",
      fromEmail: fromEmail || "❌ MISSING",
      toEmail: toEmail || "❌ MISSING",
    });

    if (!apiKey) {
      console.error("❌ Missing RESEND_API_KEY");
      return res.status(500).json({
        success: false,
        error: "Server configuration error: Missing API key",
        details: "RESEND_API_KEY not found in environment variables",
        help: "Set RESEND_API_KEY in Vercel environment variables and redeploy",
      });
    }

    if (!fromEmail) {
      console.error("❌ Missing FROM_EMAIL");
      return res.status(500).json({
        success: false,
        error: "Server configuration error: Missing FROM_EMAIL",
        details: "FROM_EMAIL not found in environment variables",
        help: "Set FROM_EMAIL in Vercel environment variables and redeploy",
      });
    }

    if (!toEmail) {
      console.error("❌ Missing TO_EMAIL");
      return res.status(500).json({
        success: false,
        error: "Server configuration error: Missing TO_EMAIL",
        details: "TO_EMAIL not found in environment variables",
        help: "Set TO_EMAIL in Vercel environment variables and redeploy",
      });
    }

    // Validate request body
    const { name, email, subject, message } = req.body || {};

    console.log("Request data:", {
      name: name ? "✓ provided" : "❌ missing",
      email: email ? "✓ provided" : "❌ missing",
      subject: subject ? "✓ provided" : "❌ missing",
      message: message ? "✓ provided" : "❌ missing",
    });

    if (!name || !email || !subject || !message) {
      console.log("❌ Missing required fields");
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
        required: ["name", "email", "subject", "message"],
        received: {
          name: !!name,
          email: !!email,
          subject: !!subject,
          message: !!message,
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email format:", email);
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
        provided: email,
      });
    }

    console.log("✅ All validations passed, initializing Resend...");

    // Initialize Resend
    const resend = new Resend(apiKey);

    console.log("📧 Attempting to send email from:", fromEmail);
    console.log("📧 Sending to:", toEmail);

    // Send email
    console.log("Sending email via Resend API...");
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
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
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Email:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">
                <a href="mailto:${email}" style="color: #fbbf24; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Subject:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Message:</strong>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #fbbf24;">
                <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</p>
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
      console.error("❌ Resend API error:", JSON.stringify(error, null, 2));

      // Handle specific Resend errors with helpful messages
      if (error.message?.includes("API key")) {
        return res.status(401).json({
          success: false,
          error: "Invalid API key configuration",
          details: "The Resend API key is invalid or has been revoked",
          help: "Generate a new API key at resend.com/api-keys",
        });
      }

      if (
        error.message?.includes("domain") ||
        error.message?.includes("verified")
      ) {
        return res.status(403).json({
          success: false,
          error: "Email sending failed: Unverified sender",
          details: "The FROM_EMAIL address or domain needs to be verified",
          help: "Use onboarding@resend.dev or verify your domain at resend.com/domains",
        });
      }

      if (error.message?.includes("rate limit")) {
        return res.status(429).json({
          success: false,
          error: "Too many requests",
          details: "Rate limit exceeded. Please try again later.",
        });
      }

      return res.status(500).json({
        success: false,
        error: "Failed to send email",
        details: error.message || "Unknown error occurred",
        rawError:
          typeof error === "object" ? JSON.stringify(error) : String(error),
      });
    }

    console.log("✅ Email sent successfully!");
    console.log("Email ID:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully! We'll get back to you soon.",
      data: { id: data?.id },
    });
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    console.error("Error name:", error?.name);
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message || String(error),
      stack:
        process.env.NODE_ENV === "development"
          ? error?.stack?.substring(0, 500)
          : undefined,
    });
  }
}
