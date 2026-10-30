import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    pool: "threads",
    globals: true,
    setupFiles: ["./src/__tests__/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    // The first render in each file compiles whole pages under jsdom. On a
    // cold cache that alone can pass the 5s default, so the first test in a
    // file would fail on timing, not logic. Real hangs still fail at 20s.
    testTimeout: 20_000,
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
