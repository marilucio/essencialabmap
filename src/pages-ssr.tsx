import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Features from "./pages/Features.jsx";
import Precos from "./pages/Precos";
import CentralDeAjuda from "./pages/CentralDeAjuda";
import Contato from "./pages/Contato";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import LGPD from "./pages/LGPD";

// Usado por scripts/prerender-map.mjs no build: gera o HTML estático das páginas
// públicas da raiz para que o Google e os scrapers de link vejam o conteúdo sem JS.
// No navegador, src/main.jsx continua montando a SPA normalmente (createRoot
// substitui este HTML), então nada muda no comportamento para o visitante.
export function render(url = "/") {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/funcionalidades" element={<Features />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/central-de-ajuda" element={<CentralDeAjuda />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/lgpd" element={<LGPD />} />
        </Routes>
      </StaticRouter>
    </StrictMode>,
  );
}
