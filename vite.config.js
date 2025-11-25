// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ... (outros imports)

// https://vitejs.dev/config/
export default defineConfig({
  // 🎯 ADICIONE ESTA LINHA AQUI!
  base: '/lService/', 
  // ------------------------------------
  plugins: [
    vue(),
    VueDevTools(),
    tailwindcss(),
    // ... (restante dos seus plugins)
  ],
  resolve: {
    alias: {
      // ... (seu alias '@')
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // ... (outras configurações)
})
