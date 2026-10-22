import { useEffect, useState } from "react";
import type { LinhaExame } from "../content/types";
import { prefereMenosMovimento } from "../motion";

type Props = { arquivo: string; colunas: readonly [string, string, string]; linhas: readonly LinhaExame[] };

/** Miniatura do laudo, linha de leitura e valores caindo na tabela (âmbar só para fora da faixa). */
export function Extracao({ arquivo, colunas, linhas }: Props) {
  const [visiveis, setVisiveis] = useState(0);
  useEffect(() => {
    if (prefereMenosMovimento()) {
      setVisiveis(linhas.length);
      return;
    }
    const timers = linhas.map((_, i) => window.setTimeout(() => setVisiveis(i + 1), 1300 + i * 380));
    return () => timers.forEach(window.clearTimeout);
  }, [linhas]);

  return (
    <div className="mapf-viz mapf-extracao">
      <div className="mapf-pdf">
        <b aria-hidden="true">PDF</b>
        <span>{arquivo}</span>
      </div>
      <div className="mapf-scan" aria-hidden="true" />
      <table className="mapf-ex">
        <thead>
          <tr>
            {colunas.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((l, i) => (
            <tr key={l.exame} className={i < visiveis ? "is-on" : undefined}>
              <td>{l.exame}</td>
              <td className={`mapf-num mapf-ex-v is-${l.estado}`}>
                {l.valor}
                {l.unidade && <span> {l.unidade}</span>}
              </td>
              <td className={`mapf-num mapf-ex-ref is-${l.estado}`}>{l.ref}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
