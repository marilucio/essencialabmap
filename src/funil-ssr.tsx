import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { FunilRoutes } from "./pages/map/funil/routes";

// Usado por scripts/prerender-map.mjs no build: gera o HTML da tela 1 do funil
// (/map/comecar), injetado em dist/map-comecar.html e hidratado por funil-main.tsx.
export function render(url = "/map/comecar") {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <FunilRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
