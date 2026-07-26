/// <reference types="vite/client" />

// SECURITY: every VITE_-prefixed variable is inlined into the public JS bundle
// at build time. Only values safe to publish belong here. The Resend API key
// declarations that used to live in this file were removed -- email is sent
// server-side from api/contact.js using the un-prefixed RESEND_API_KEY, which
// stays on the server.
//
// The Supabase anon key is public by design; its safety depends entirely on
// Row Level Security being correct (see supabase/service-events-schema.sql).
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
