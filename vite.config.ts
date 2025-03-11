/// <reference types="vitest" />
import { defineConfig } from "vite"
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
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
})
