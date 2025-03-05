// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@widgets": "/src/widgets",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@shared": "/src/shared",
      "@hooks": "/src/hooks",
    },
  },
})
