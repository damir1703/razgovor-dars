import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Сборка кладётся в docs/ — GitHub Pages отдаёт её из ветки main.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'docs', rollupOptions: { output: { hashCharacters: 'base36' } } },
})
