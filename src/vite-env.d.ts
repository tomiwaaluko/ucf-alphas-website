/// <reference types="vite/client" />

// Extend Window interface for test functions
declare global {
  interface Window {
    testContactAPI: () => Promise<{
      success: boolean;
      error?: string;
      message?: string;
      data?: unknown;
    }>;
  }
}
