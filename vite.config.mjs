import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// IDs do Meta Pixel por grupo de rotas (ver index.html e map.html). Sem valor
// fixo de reserva: se faltar algum, o build de produção para aqui.
const REQUIRED_PIXEL_ENV = [
  'VITE_META_PIXEL_ID',
  'VITE_META_PIXEL_ID_MAP',
]

function requireMetaPixelEnv() {
  return {
    name: 'require-meta-pixel-env',
    configResolved(config) {
      if (config.command !== 'build') return
      const invalid = REQUIRED_PIXEL_ENV.filter((key) => !/^\d+$/.test(config.env[key] || ''))
      if (invalid.length > 0) {
        throw new Error(
          `[meta-pixel] Variável ausente ou inválida: ${invalid.join(', ')}. ` +
            'Defina o ID numérico do pixel em .env.production ou nas variáveis de ambiente da Netlify.',
        )
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), requireMetaPixelEnv()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        map: path.resolve(__dirname, 'map.html'),
        comecar: path.resolve(__dirname, 'map-comecar.html'),
        autobot: path.resolve(__dirname, 'autobot/index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
