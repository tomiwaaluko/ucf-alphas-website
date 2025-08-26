/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string;
  readonly VITE_FROM_EMAIL: string;
  readonly VITE_TO_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
