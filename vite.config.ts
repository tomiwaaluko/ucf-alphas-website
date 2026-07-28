import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
    proxy:
      mode === "development"
        ? {
            "/api": {
              target: "http://localhost:3001",
              changeOrigin: true,
            },
          }
        : undefined,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // vitest was installed with a setup file and jsdom, but was never wired up,
  // so `npm test` could not run at all. CI runs `vitest run` now.
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
}));
