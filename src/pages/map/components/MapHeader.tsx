import type { MouseEvent } from "react";
import { Leaf } from "lucide-react";
import { TRIAL_URL } from "../constants";
import { trackStartTrial } from "../tracking";

// Header próprio da landing /map: âncoras para seções da própria página e um CTA.
// Não usa o Header compartilhado porque os links dele levam para outras páginas do site.
const anchors = [
  { href: "#segunda-consulta", label: "A segunda consulta" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#o-que-nao-faz", label: "O que não faz" },
  { href: "#perfil-hormonal", label: "Perfil Hormonal" },
  { href: "#preco", label: "Preço" },
  { href: "#faq", label: "Perguntas" },
];

function scrollTo(e: MouseEvent<HTMLAnchorElement>, href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", href);
}

export function MapHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" onClick={(e) => scrollTo(e, "#topo")} className="flex items-center gap-2" aria-label="EssenciaLab MAP, voltar ao topo">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-emerald-600">
            <Leaf className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold text-slate-900">
            EssenciaLab <span className="text-green-700">MAP</span>
          </span>
        </a>

        <nav aria-label="Seções desta página" className="hidden items-center gap-5 lg:flex">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              onClick={(e) => scrollTo(e, a.href)}
              className="rounded-md text-sm font-medium text-slate-700 transition-colors hover:text-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener"
          onClick={() => trackStartTrial("header")}
          className="shrink-0 rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        >
          Testar 7 dias grátis
        </a>
      </div>
    </header>
  );
}
