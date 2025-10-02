import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  // Usa una carpeta de caché local al proyecto (evita AppData\Local\Temp)
  cacheDir: path.resolve(process.cwd(), 'node_modules/.vite-cache'),
  optimizeDeps: {
    force: true, // fuerza un prebundle limpio
  },
})
