import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import MapWrapper from './pages/MapWrapper.jsx'

// Entrada exclusiva de map.html: carrega só a landing /map, sem o bundle das outras rotas.
// No build, scripts/prerender-map.mjs injeta o HTML pronto em #root e aqui só hidratamos.
const app = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MapWrapper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
