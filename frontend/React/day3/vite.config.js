import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ✅ yahan import hoga

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ✅ yahan use hoga
  ],
})