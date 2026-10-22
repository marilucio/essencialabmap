import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import "../map-brand.css";
import "./funil.css";
import { captureAttribution, setTrackingLanguage } from "@/lib/attribution";
import { getStoredPublico } from "@/lib/audience";
import { Bands } from "./components/Bands";
import { Topo } from "./components/Partes";
import { DUR } from "./constants";
import { getContent } from "./content";
import { contexto } from "./logic";
import { prefereMenosMovimento } from "./motion";
import { caminhoDe, indiceDe, TELAS } from "./screens";
import { ESTADO_INICIAL, gravarEstado, lerEstado, reducer, telaPendente, type Estado } from "./state";
import { RodapePreco, TelaAtual } from "./Telas";
import { clarityEvento } from "./tracking";

// Funil /map/comecar: uma pergunta por tela, 24 telas (ver screens.ts).
// A tela 1 é pré-renderizada no build (scripts/prerender-map.mjs); o resto só
// existe no navegador. `inicial` vem de funil-main.tsx quando a página abre
// direto numa tela interna (estado lido da sessão antes do primeiro render).

type Props = { inicial?: Estado };

const BLOCOS = [0, 1, 2] as const;

export default function FunilApp({ inicial }: Props) {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const lang = params.get("lang") || "pt";
  const c = getContent(lang);

  const [estado, dispatch] = useReducer(reducer, inicial ?? ESTADO_INICIAL);
  const estadoAtual = useRef(estado);
  estadoAtual.current = estado;
  const obterEstado = useCallback(() => estadoAtual.current, []);
  const [carregado, setCarregado] = useState(Boolean(inicial));
  const [montado, setMontado] = useState(false);

  const indice = indiceDe(slug);
  const tela = TELAS[indice];
  const ctx = useMemo(() => contexto(c, estado.respostas, estado.nome), [c, estado.respostas, estado.nome]);

  const palco = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const primeiraTela = useRef(true);

  // Sessão, atribuição e idioma (só no navegador).
  useEffect(() => {
    setMontado(true);
    setTrackingLanguage(lang);
    captureAttribution(getStoredPublico());
    if (!inicial) {
      dispatch({ tipo: "carregar", estado: lerEstado() });
      setCarregado(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (carregado) gravarEstado(estado);
  }, [estado, carregado]);

  // Entrou numa tela sem as respostas anteriores: volta para a primeira que falta.
  useEffect(() => {
    if (!carregado) return;
    const pendente = telaPendente(estado, indice);
    if (pendente !== null) navigate(caminhoDe(TELAS[pendente].slug) + window.location.search, { replace: true });
  }, [carregado, estado, indice, navigate]);

  // Clarity, tema da página, rolagem e foco a cada troca de tela.
  useLayoutEffect(() => {
    document.documentElement.lang = c.htmlLang;
    document.documentElement.dataset.mapfTema = tela.escura ? "escuro" : "claro";
    if (!primeiraTela.current) {
      window.scrollTo(0, 0);
      card.current?.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
    }
    primeiraTela.current = false;
  }, [indice, tela.escura, c.htmlLang]);

  useEffect(() => {
    clarityEvento(`mapf_${tela.slug}`);
  }, [tela.slug]);

  /** Troca de tela: a anterior sai num clone enquanto a nova entra (320 ms, curva única). */
  const ir = useCallback(
    (destino: number, replace: boolean) => {
      const el = card.current;
      const pai = palco.current;
      if (el && pai && !prefereMenosMovimento()) {
        const r = el.getBoundingClientRect();
        const rp = pai.getBoundingClientRect();
        const fantasma = el.cloneNode(true) as HTMLElement;
        fantasma.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
        fantasma.classList.add("mapf-ghost");
        fantasma.setAttribute("aria-hidden", "true");
        Object.assign(fantasma.style, {
          top: `${r.top - rp.top}px`,
          left: `${r.left - rp.left}px`,
          width: `${r.width}px`,
          height: `${r.height}px`,
        });
        pai.appendChild(fantasma);
        window.setTimeout(() => fantasma.remove(), DUR.tela);
      }
      navigate(caminhoDe(TELAS[destino].slug) + window.location.search, { replace });
    },
    [navigate],
  );

  const avancar = useCallback(() => {
    if (indice < TELAS.length - 1) ir(indice + 1, Boolean(TELAS[indice].automatica));
  }, [indice, ir]);

  let anterior = indice - 1;
  while (anterior > 0 && TELAS[anterior].automatica) anterior -= 1;
  const voltar =
    anterior >= 1
      ? () => {
          const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
          if (idx > 0) navigate(-1);
          else ir(anterior, true);
        }
      : undefined;

  const preenchido = BLOCOS.map((b) => {
    if (tela.bloco === null) return 0;
    if (b < tela.bloco) return 1;
    if (b > tela.bloco) return 0;
    const doBloco = TELAS.filter((t) => t.bloco === b);
    return (doBloco.findIndex((t) => t.slug === tela.slug) + 1) / doBloco.length;
  }) as unknown as readonly [number, number, number];

  const classes = ["map-brand", "mapf", tela.escura ? "is-dark" : "", tela.rola ? "is-scroll" : "is-fixed"].join(" ");

  return (
    <div className={classes}>
      {montado && <Bands progress={indice / (TELAS.length - 1)} dark={Boolean(tela.escura)} />}
      <div className="mapf-stage" ref={palco}>
        <Topo
          marca={c.marca}
          blocos={c.blocos}
          bloco={tela.bloco}
          preenchido={preenchido}
          voltar={voltar}
          rotuloVoltar={c.ui.voltar}
          rotuloProgresso={c.ui.progresso}
        />
        <main className="mapf-main">
          <div className="mapf-card mapf-enter" ref={card} key={tela.slug}>
            <TelaAtual
              slug={tela.slug}
              c={c}
              ctx={ctx}
              estado={estado}
              dispatch={dispatch}
              obterEstado={obterEstado}
              avancar={avancar}
            />
          </div>
        </main>
      </div>
      {tela.slug === "precos" && <RodapePreco c={c} />}
    </div>
  );
}
