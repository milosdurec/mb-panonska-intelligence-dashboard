import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '4000-irn7hsxsb4n8knjf3jvao-2b6382cf.manusvm.computer'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 4000,
    strictPort: true
  }
})

