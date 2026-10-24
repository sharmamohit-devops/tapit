import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

function spaFallbackPlugin(): Plugin {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(projectRoot, 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')
      if (fs.existsSync(indexHtmlPath)) {
        const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8')

        // 1. Generate dist/privacy-policy/index.html for static hosting compatibility
        const privacyDir = path.join(distDir, 'privacy-policy')
        if (!fs.existsSync(privacyDir)) {
          fs.mkdirSync(privacyDir, { recursive: true })
        }
        fs.writeFileSync(path.join(privacyDir, 'index.html'), indexHtml)

        // 2. Generate dist/404.html for static hosts fallback
        fs.writeFileSync(path.join(distDir, '404.html'), indexHtml)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
})
