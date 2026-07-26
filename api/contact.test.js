import { describe, it, expect, vi, afterEach } from "vitest";
import { clientIp, isRateLimited } from "./contact.js";

const req = (headers, remoteAddress) => ({
  headers,
  socket: remoteAddress ? { remoteAddress } : undefined,
});

describe("clientIp", () => {
  // Regression guard for the rate-limit bypass: if the key an attacker can set
  // is the one we throttle on, the throttle does nothing.
  it("prefers x-vercel-forwarded-for, which the edge sets and callers cannot forge", () => {
    expect(
      clientIp(
        req({
          "x-vercel-forwarded-for": "203.0.113.7",
          "x-real-ip": "198.51.100.9",
          "x-forwarded-for": "1.2.3.4, 203.0.113.7",
        })
      )
    ).toBe("203.0.113.7");
  });

  it("falls back to x-real-ip", () => {
    expect(
      clientIp(
        req({
          "x-real-ip": "198.51.100.9",
          "x-forwarded-for": "1.2.3.4, 203.0.113.7",
        })
      )
    ).toBe("198.51.100.9");
  });

  it("uses the LAST x-forwarded-for entry, never the first", () => {
    // A proxy appends the address it observed, so only the last entry was
    // written by our trusted hop. Taking [0] would return "1.2.3.4" -- a value
    // the caller supplied -- letting them rotate it for a fresh bucket.
    expect(clientIp(req({ "x-forwarded-for": "1.2.3.4, 203.0.113.7" }))).toBe(
      "203.0.113.7"
    );
  });

  it("handles a single-entry x-forwarded-for", () => {
    expect(clientIp(req({ "x-forwarded-for": "203.0.113.7" }))).toBe(
      "203.0.113.7"
    );
  });

  it("ignores an empty header rather than returning an empty key", () => {
    expect(
      clientIp(req({ "x-vercel-forwarded-for": "", "x-real-ip": "" }, "10.0.0.1"))
    ).toBe("10.0.0.1");
  });

  it("falls back to the socket address, then to a constant", () => {
    expect(clientIp(req({}, "10.0.0.1"))).toBe("10.0.0.1");
    expect(clientIp(req({}))).toBe("unknown");
  });
});

describe("isRateLimited", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows up to the limit, then blocks", () => {
    const ip = `test-${Math.random()}`;
    expect(isRateLimited(ip)).toBe(false); // 1
    expect(isRateLimited(ip)).toBe(false); // 2
    expect(isRateLimited(ip)).toBe(false); // 3
    expect(isRateLimited(ip)).toBe(true); // 4 -- over RATE_LIMIT_MAX
    expect(isRateLimited(ip)).toBe(true);
  });

  it("tracks each key independently", () => {
    const a = `a-${Math.random()}`;
    const b = `b-${Math.random()}`;
    isRateLimited(a);
    isRateLimited(a);
    isRateLimited(a);
    expect(isRateLimited(a)).toBe(true);
    expect(isRateLimited(b)).toBe(false);
  });

  it("resets once the window elapses, and a blocked request does not extend it", () => {
    vi.useFakeTimers();
    const ip = `window-${Math.random()}`;

    isRateLimited(ip);
    isRateLimited(ip);
    isRateLimited(ip);
    expect(isRateLimited(ip)).toBe(true);

    // Still inside the 10 minute window.
    vi.advanceTimersByTime(9 * 60 * 1000);
    expect(isRateLimited(ip)).toBe(true);

    // Past it. A throttled request must not have pushed windowStart forward,
    // or the limiter would become a rolling lockout.
    vi.advanceTimersByTime(2 * 60 * 1000);
    expect(isRateLimited(ip)).toBe(false);
  });
});
