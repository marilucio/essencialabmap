import type { ReactNode } from "react";
import { DUR } from "../constants";
import type { FunilContent } from "../content/types";
import { useContagem, useDepois } from "../motion";

type Props = { c: FunilContent["resumo"] };

const atrasoBloco = (i: number) => 350 + i * DUR.resumoBloco;

function Bloco({ i, className = "", children }: { i: number; className?: string; children: ReactNode }) {
  const on = useDepois(atrasoBloco(i));
  return <div className={`mapf-rs-blk ${className}${on ? " is-on" : ""}`}>{children}</div>;
}

function Mudanca({ sistema, antes, depois, ativo }: { sistema: string; antes: number; depois: number; ativo: boolean }) {
  const v = useContagem(depois, { de: antes, ativo });
  return (
    <>
      <span>{sistema}</span>
      <b className="mapf-num">
        {antes} → {v}
      </b>
    </>
  );
}

/** Card da aba Resumo se montando bloco a bloco, de cima para baixo (tela escura). */
export function ResumoRetorno({ c }: Props) {
  const contar = useDepois(atrasoBloco(2));
  return (
    <div className="mapf-rs">
      <Bloco i={0}>
        <p className="mapf-rs-lb">{c.queixaRotulo}</p>
        <p className="mapf-rs-q">{c.queixa}</p>
        <p className="mapf-rs-qs">{c.desde}</p>
      </Bloco>
      <Bloco i={1}>
        <div className="mapf-rs-cols">
          {c.colunas.map((col, i) => (
            <div key={col.rotulo} className={i === 0 ? "is-up" : i === 1 ? "is-down" : undefined}>
              <span className="mapf-rs-lb">{col.rotulo}</span>
              {col.itens}
            </div>
          ))}
        </div>
      </Bloco>
      <Bloco i={2}>
        <p className="mapf-rs-lb">{c.mudancasRotulo}</p>
        <div className="mapf-rs-ch">
          {c.mudancas.map((m) => (
            <Mudanca key={m.sistema} {...m} ativo={contar} />
          ))}
        </div>
      </Bloco>
      <Bloco i={3} className="is-att">
        <p className="mapf-rs-lb">{c.atencaoRotulo}</p>
        <p className="mapf-rs-q">{c.atencao}</p>
      </Bloco>
      <Bloco i={4}>
        <p className="mapf-rs-lb">{c.esclarecerRotulo}</p>
        <p className="mapf-rs-q is-small">{c.esclarecer}</p>
        <p className="mapf-rs-key">
          <strong>{c.destravaRotulo}</strong> {c.destrava}
        </p>
      </Bloco>
    </div>
  );
}
