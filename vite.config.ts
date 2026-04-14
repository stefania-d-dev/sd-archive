import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: base path per GitHub Pages
  // Deve corrispondere al nome del repository
  base: '/SD_Portfolio_Final/',
})
