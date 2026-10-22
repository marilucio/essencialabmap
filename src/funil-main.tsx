import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { FunilRoutes } from "./pages/map/funil/routes";
import { indiceDe, TELAS } from "./pages/map/funil/screens";
import { lerEstado } from "./pages/map/funil/state";

// Entrada de map-comecar.html (funil /map/comecar).
// O build pré-renderiza só a tela 1 em #root. Abrindo nela, hidratamos; abrindo
// direto numa tela interna (recarregar, voltar), o HTML pronto é de outra tela:
// limpamos #root e renderizamos já com o estado da sessão.
const root = document.getElementById("root")!;
const naAbertura = /^\/map\/comecar\/?$/.test(window.location.pathname);

// Fundo certo já no primeiro quadro (o HTML sai escuro, como a tela 1). A transição
// de cor do fundo só liga depois, para não piscar ao abrir direto numa tela clara.
const slugInicial = window.location.pathname.split("/")[3];
document.documentElement.dataset.mapfTema = TELAS[indiceDe(slugInicial)].escura ? "escuro" : "claro";
requestAnimationFrame(() => requestAnimationFrame(() => (document.documentElement.dataset.mapfPronto = "")));

if (naAbertura && root.hasChildNodes()) {
  hydrateRoot(
    root,
    <StrictMode>
      <BrowserRouter>
        <FunilRoutes />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  root.textContent = "";
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <FunilRoutes inicial={lerEstado()} />
      </BrowserRouter>
    </StrictMode>,
  );
}
