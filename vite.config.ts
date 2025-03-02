// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@widgets": "/src/widgets",
      "@hooks": "/src/hooks",
      "@shared": "/src/shared",
      "@pages": "/src/pages",
      "@features": "/src/features",
      "@entities": "/src/entities",
    },
  },
})
