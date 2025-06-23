import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import LGPD from './pages/LGPD'
import Contato from './pages/Contato'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
