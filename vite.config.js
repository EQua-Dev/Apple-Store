import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "devstrike-digital-limited",
    project: "apple_mock_site"
  }), sentryVitePlugin({
    org: "devstrike-digital-limited",
    project: "apple_mock_site"
  })],

  build: {
    sourcemap: true
  }
})