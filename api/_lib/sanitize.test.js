import { describe, it, expect } from "vitest";
import {
  escapeHtml,
  escapeHtmlWithBreaks,
  sanitizeHeaderValue,
} from "./sanitize.js";

describe("escapeHtml", () => {
  it("neutralizes a script tag", () => {
    expect(escapeHtml("<script>alert(1)</script>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  it("escapes quotes so an attribute cannot be broken out of", () => {
    // The contact template renders values inside href="..." and inside text
    // nodes; an unescaped double quote would let a submitter add attributes.
    expect(escapeHtml('" onmouseover="alert(1)')).toBe(
      "&quot; onmouseover=&quot;alert(1)"
    );
    expect(escapeHtml("' onload='x")).toBe("&#039; onload=&#039;x");
  });

  it("escapes ampersands first so entities are not double-decoded", () => {
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
  });

  it("leaves ordinary text untouched", () => {
    expect(escapeHtml("Jane Doe - Xi Iota")).toBe("Jane Doe - Xi Iota");
  });

  it("coerces non-strings rather than throwing", () => {
    expect(escapeHtml(42)).toBe("42");
    expect(escapeHtml(null)).toBe("null");
  });
});

describe("escapeHtmlWithBreaks", () => {
  it("converts real newlines to <br>", () => {
    expect(escapeHtmlWithBreaks("line one\nline two")).toBe(
      "line one<br>line two"
    );
  });

  it("does NOT let a submitted literal <br> survive as markup", () => {
    // Regression guard: escaping must happen before newline conversion.
    // The reverse order would emit a live <br> here.
    expect(escapeHtmlWithBreaks("<br>")).toBe("&lt;br&gt;");
  });

  it("escapes markup that spans lines", () => {
    expect(escapeHtmlWithBreaks("<b>hi</b>\n<i>there</i>")).toBe(
      "&lt;b&gt;hi&lt;/b&gt;<br>&lt;i&gt;there&lt;/i&gt;"
    );
  });
});

describe("sanitizeHeaderValue", () => {
  it("strips a CRLF header-injection attempt", () => {
    expect(
      sanitizeHeaderValue("Hello\r\nBcc: victim@example.com")
    ).toBe("Hello Bcc: victim@example.com");
  });

  it("strips bare newlines and carriage returns", () => {
    expect(sanitizeHeaderValue("a\nb\rc")).toBe("a b c");
  });

  it("collapses a run of line breaks into a single space", () => {
    expect(sanitizeHeaderValue("a\r\n\r\n\r\nb")).toBe("a b");
  });

  it("trims surrounding whitespace", () => {
    expect(sanitizeHeaderValue("  subject  ")).toBe("subject");
  });
});
