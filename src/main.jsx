import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import LGPD from './pages/LGPD'
import Contato from './pages/Contato'
import Precos from './pages/Precos'
import CentralDeAjuda from './pages/CentralDeAjuda'
import StatusDoSistema from './pages/StatusDoSistema'
import MetodoCalma from './pages/metodocalma/MetodoCalma'
import MetodoCalmaES from './pages/metodocalmaes/MetodoCalma'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/metodocalma/*" element={<MetodoCalma />} />
        <Route path="/metodocalmaes/*" element={<MetodoCalmaES />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/central-de-ajuda" element={<CentralDeAjuda />} />
        <Route path="/status-do-sistema" element={<StatusDoSistema />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
