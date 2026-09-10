import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router";
import MapWrapper from "./pages/MapWrapper.jsx";

// Usado por scripts/prerender-map.mjs no build: gera o HTML estático da landing /map
// que é injetado em dist/map.html e hidratado por src/map-main.jsx.
export function render(url = "/map") {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <Routes>
          <Route path="*" element={<MapWrapper />} />
        </Routes>
      </StaticRouter>
    </StrictMode>,
  );
}
