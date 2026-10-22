import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { DUR } from "../constants";
import type { DeltaCaso } from "../content/types";
import { prefereMenosMovimento, useContagem, useDepois } from "../motion";

type Props = { casos: readonly DeltaCaso[]; pdf: string };

function Barra({ sistema, antes, depois, i }: { sistema: string; antes: number; depois: number; i: number }) {
  const on = useDepois(300 + i * 160);
  const v = useContagem(depois, { de: antes, atraso: 300 + i * 160 });
  return (
    <div className="mapf-drow">
      <span>{sistema}</span>
      <div className="mapf-dbar" aria-hidden="true">
        <span className="was" style={{ width: `${Math.min(antes, depois) * 10}%` }} />
        {/* Trecho que mudou: cresce a partir do valor anterior (verde se subiu, neutro se caiu). */}
        <span
          className={depois >= antes ? "now" : "now is-down"}
          style={{ left: `${Math.min(antes, depois) * 10}%`, width: `${on ? Math.abs(depois - antes) * 10 : 0}%` }}
        />
      </div>
      <span className="mapf-dv mapf-num" aria-label={`${sistema}: ${antes} para ${depois}`}>
        {antes} → <b>{v}</b>
      </span>
    </div>
  );
}

/** Três relatórios reais em abas que giram a cada 3,6 s até o primeiro toque. */
export function Delta({ casos, pdf }: Props) {
  const [aba, setAba] = useState(0);
  const [parou, setParou] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (parou || prefereMenosMovimento()) return;
    const t = window.setInterval(() => setAba((a) => (a + 1) % casos.length), DUR.deltaGiro);
    return () => window.clearInterval(t);
  }, [parou, casos.length]);

  const escolher = (i: number) => {
    setParou(true);
    setAba(i);
  };

  const teclado = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const prox = (aba + (e.key === "ArrowRight" ? 1 : casos.length - 1)) % casos.length;
    escolher(prox);
    tabs.current[prox]?.focus();
  };

  const caso = casos[aba];
  return (
    <div className="mapf-viz mapf-delta" onPointerDown={() => setParou(true)}>
      <div className="mapf-tabs" role="tablist" onKeyDown={teclado}>
        {casos.map((c, i) => (
          <button
            key={c.nome}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`mapf-tab-${i}`}
            aria-selected={i === aba}
            aria-controls="mapf-tabpanel"
            tabIndex={i === aba ? 0 : -1}
            className={i === aba ? "is-on" : undefined}
            onClick={() => escolher(i)}
          >
            {c.nome}
          </button>
        ))}
      </div>
      <div id="mapf-tabpanel" role="tabpanel" aria-labelledby={`mapf-tab-${aba}`} key={caso.nome} className="mapf-delta-panel">
        <p className="mapf-delta-meta mapf-num">
          <span>{caso.periodo}</span>
          <span>{caso.resumo}</span>
        </p>
        <div className="mapf-delta-bars">
          {caso.barras.map((b, i) => (
            <Barra key={b.sistema} {...b} i={i} />
          ))}
        </div>
      </div>
      <div className="mapf-rep">
        <i aria-hidden="true" />
        <span>{pdf}</span>
      </div>
    </div>
  );
}
