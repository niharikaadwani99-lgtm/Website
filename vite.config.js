import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ARTIFACT=1 builds the self-contained single-file variant: every asset
// (including the photographs) is inlined so the page needs no server.
const artifact = process.env.ARTIFACT === '1'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: artifact
    ? {
        outDir: 'dist-artifact',
        assetsInlineLimit: 100_000_000,
        cssCodeSplit: false,
        chunkSizeWarningLimit: 5000,
      }
    : {},
})
