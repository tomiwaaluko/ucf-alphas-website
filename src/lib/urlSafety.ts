/**
 * Only allow http(s) URLs.
 *
 * Admin-supplied "external image URLs" are stored in `service_event_images`
 * and later rendered as `<img src>` on the public Service page. React will not
 * execute a `javascript:` URL in `src`, but rejecting non-http schemes keeps
 * `javascript:` / `data:` / `blob:` payloads out of the database entirely
 * rather than relying on every future renderer to be safe.
 */
export const isSafeImageUrl = (value: string): boolean => {
  try {
    const { protocol } = new URL(value);
    return protocol === "https:" || protocol === "http:";
  } catch {
    // Relative paths and malformed strings land here. Requiring an absolute
    // http(s) URL is deliberate: these are third-party images by definition.
    return false;
  }
};
