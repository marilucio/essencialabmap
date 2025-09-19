import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        metodocalma: path.resolve(__dirname, 'src/pages/metodocalma/index.html'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'metodocalma') {
            return 'metodocalma/metodocalma-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        chunkFileNames: (chunkInfo) => {
          // Se o chunk pertence ao metodocalma, coloca na pasta metodocalma
          if (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.includes('metodocalma')) {
            return 'metodocalma/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.includes('metodocalma')) {
            return 'metodocalma/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
