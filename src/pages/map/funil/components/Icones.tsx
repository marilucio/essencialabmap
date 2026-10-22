import type { ReactNode } from "react";
import type { Area } from "../content/types";

// Ícones de traço da tela 2 (do protótipo). Sem cérebro, faísca ou robô.
const PATHS: Record<Area, ReactNode> = {
  nutricionista: (
    <>
      <path d="M12 21c-4-2-7-6-7-10a5 5 0 0 1 7-4.6A5 5 0 0 1 19 11c0 4-3 8-7 10z" />
      <path d="M12 6V3" />
    </>
  ),
  naturopata: (
    <>
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19l8-8" />
    </>
  ),
  terapeuta: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c1.5-2 2.5-2 4 0s2.5 2 4 0" />
    </>
  ),
  estetica: (
    <>
      <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z" />
      <path d="M10 14a2 2 0 0 0 2 2" />
    </>
  ),
  outra: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M12 9v7M8.5 12.5h7" />
    </>
  ),
};

export function IconeArea({ area }: { area: Area }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mapf-area-ic">
      {PATHS[area]}
    </svg>
  );
}

export const IconeVoltar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const IconeSeta = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
