import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Renders the app to static HTML at build time (see `prerender` in src/main.tsx)
    vitePrerenderPlugin({ renderTarget: '#root' }),
  ],
  base: '/',
})
