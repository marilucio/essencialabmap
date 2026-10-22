import { Navigate, Route, Routes } from "react-router";
import FunilApp from "./FunilApp";
import type { Estado } from "./state";

/** /map/comecar e /map/comecar/<slug>; qualquer outro caminho volta para o início. */
export function FunilRoutes({ inicial }: { inicial?: Estado }) {
  return (
    <Routes>
      <Route path="/map/comecar" element={<FunilApp inicial={inicial} />} />
      <Route path="/map/comecar/:slug" element={<FunilApp inicial={inicial} />} />
      <Route path="*" element={<Navigate to="/map/comecar" replace />} />
    </Routes>
  );
}
