import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'

// Plugin personalizado para mover o HTML do metodocalma para o local correto
const metodocalmaPlugin = () => {
  return {
    name: 'metodocalma-plugin',
    generateBundle(options, bundle) {
      // Encontrar o arquivo HTML do metodocalma
      const metodocalmaHtml = Object.keys(bundle).find(key => 
        key.includes('metodocalma') && key.endsWith('.html')
      );
      
      if (metodocalmaHtml && bundle[metodocalmaHtml]) {
        // Criar uma nova entrada com o caminho correto
        bundle['metodocalma/index.html'] = {
          ...bundle[metodocalmaHtml],
          fileName: 'metodocalma/index.html'
        };
        
        // Remover a entrada original
        delete bundle[metodocalmaHtml];
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), metodocalmaPlugin()],
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
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
