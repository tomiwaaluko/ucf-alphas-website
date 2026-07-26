/**
 * Input sanitizers shared by the serverless functions.
 *
 * Lives under `api/_lib/` because Vercel excludes underscore-prefixed paths
 * from function routing -- this module is imported, never served.
 */

/**
 * Escape a string for interpolation into an HTML email body.
 *
 * Contact-form fields land in the chapter's inbox as HTML. Without escaping, a
 * submitter can author arbitrary markup: phishing links, tracking pixels, or an
 * attribute break-out on the `mailto:` href.
 */
export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strip CR/LF before a value goes into a mail header.
 * A newline inside a header value is the classic header-injection primitive --
 * it lets a submitter append their own headers (Bcc, Content-Type, ...).
 */
export function sanitizeHeaderValue(value) {
  return String(value).replace(/[\r\n]+/g, " ").trim();
}

/**
 * Escape for HTML, then turn newlines into <br>.
 *
 * Order matters: escaping second would let a submitted literal "<br>" survive
 * as live markup.
 */
export function escapeHtmlWithBreaks(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}
