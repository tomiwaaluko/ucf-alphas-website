import { describe, it, expect } from "vitest";
import { isSafeImageUrl } from "./urlSafety";

describe("isSafeImageUrl", () => {
  it("accepts https and http URLs", () => {
    expect(isSafeImageUrl("https://example.com/photo.jpg")).toBe(true);
    expect(isSafeImageUrl("http://example.com/photo.jpg")).toBe(true);
  });

  it("rejects javascript: URLs", () => {
    expect(isSafeImageUrl("javascript:alert(1)")).toBe(false);
    // Case and whitespace tricks -- the URL parser normalizes the scheme, so
    // these must be rejected too.
    expect(isSafeImageUrl("JaVaScRiPt:alert(1)")).toBe(false);
    expect(isSafeImageUrl("  javascript:alert(1)")).toBe(false);
  });

  it("rejects data: and blob: URLs", () => {
    expect(
      isSafeImageUrl("data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==")
    ).toBe(false);
    expect(isSafeImageUrl("blob:https://example.com/abc")).toBe(false);
  });

  it("rejects other schemes", () => {
    expect(isSafeImageUrl("file:///etc/passwd")).toBe(false);
    expect(isSafeImageUrl("ftp://example.com/x.jpg")).toBe(false);
    expect(isSafeImageUrl("vbscript:msgbox(1)")).toBe(false);
  });

  it("rejects malformed input and relative paths", () => {
    expect(isSafeImageUrl("")).toBe(false);
    expect(isSafeImageUrl("not a url")).toBe(false);
    expect(isSafeImageUrl("/images/local.jpg")).toBe(false);
  });
});
