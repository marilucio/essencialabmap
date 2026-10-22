import { useEffect, useRef, type ReactNode } from "react";
import { IconeVoltar } from "./Icones";

type TopoProps = {
  marca: string;
  blocos: readonly [string, string, string];
  bloco: 0 | 1 | 2 | null;
  /** Fração preenchida de cada segmento (0 a 1). */
  preenchido: readonly [number, number, number];
  voltar?: () => void;
  rotuloVoltar: string;
  rotuloProgresso: string;
};

/** Voltar, marca e a barra em 3 blocos (linha fina com brilho a cada avanço). */
export function Topo({ marca, blocos, bloco, preenchido, voltar, rotuloVoltar, rotuloProgresso }: TopoProps) {
  const total = Math.round(((preenchido[0] + preenchido[1] + preenchido[2]) / 3) * 100);
  return (
    <header className="mapf-top">
      <div className="mapf-top-row">
        <button
          type="button"
          className="mapf-back"
          onClick={voltar}
          aria-label={rotuloVoltar}
          style={{ visibility: voltar ? "visible" : "hidden" }}
        >
          <IconeVoltar />
        </button>
        <span className="mapf-brand">{marca}</span>
        <span className="mapf-back-spacer" aria-hidden="true" />
      </div>
      {bloco !== null && (
        <>
          <div
            className="mapf-prog"
            role="progressbar"
            aria-label={rotuloProgresso}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={total}
          >
            {preenchido.map((f, i) => (
              <Segmento key={blocos[i]} fracao={f} />
            ))}
          </div>
          <div className="mapf-seglabels" aria-hidden="true">
            {blocos.map((b, i) => (
              <span key={b} className={i === bloco ? "is-on" : undefined}>
                {b}
              </span>
            ))}
          </div>
        </>
      )}
    </header>
  );
}

function Segmento({ fracao }: { fracao: number }) {
  const ref = useRef<HTMLElement>(null);
  const anterior = useRef(fracao);
  useEffect(() => {
    const el = ref.current;
    if (!el || fracao === anterior.current) return;
    anterior.current = fracao;
    el.classList.remove("is-flash");
    void el.offsetWidth;
    el.classList.add("is-flash");
  }, [fracao]);
  return (
    <div className="mapf-seg">
      <i ref={ref} style={{ width: `${Math.round(fracao * 100)}%` }} />
    </div>
  );
}

type AutorProps = { texto: string; assinatura: string; fotoAlt: string };

export function Autor({ texto, assinatura, fotoAlt }: AutorProps) {
  return (
    <figure className="mapf-author">
      <img src="/images/map/marilucio-rocha.webp" alt={fotoAlt} width={48} height={48} loading="lazy" />
      <figcaption>
        <p>{texto}</p>
        <b>{assinatura}</b>
      </figcaption>
    </figure>
  );
}

/** Rótulo técnico em maiúsculas com espaçamento largo. */
export const Rotulo = ({ children }: { children: ReactNode }) => <p className="mapf-eyebrow">{children}</p>;

export const Nota = ({ children }: { children: ReactNode }) => <p className="mapf-note">{children}</p>;
