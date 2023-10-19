import { configDefaults, defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    mockReset: true,
    coverage: {
      provider: "v8",
      exclude: ["src/components/ui/**", "**/node_modules/**", "**/dist/**", "**/coverage/**"],
    },
    alias: { "@": "/src" },
    setupFiles: ["./vitest.setup.js"],
    exclude: [...configDefaults.exclude, "src/components/ui/**", "**/node_modules/**", "**/dist/**", "**/coverage/**"],
  },
  plugins: [react()],
})
