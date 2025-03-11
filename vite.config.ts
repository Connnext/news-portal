/// <reference types="vitest" />

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@widgets": "/src/widgets",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@shared": "/src/shared",
      "@__test__": "/src/__test__",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
})
