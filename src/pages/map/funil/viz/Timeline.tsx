import type { CSSProperties } from "react";
import { DIAS } from "../constants";
import { dataDoDia, formatarData, formatarIntervalo, type EtapaPlano } from "../logic";

type Props = {
  etapas: readonly EtapaPlano[];
  hoje: Date;
  locale: string;
  diaUm: string;
  diaVarios: string;
};

/** Linha do tempo vertical do plano, com a data real de cada etapa e a do eixo vencedor destacada. */
export function Timeline({ etapas, hoje, locale, diaUm, diaVarios }: Props) {
  return (
    <ol className="mapf-tl">
      {etapas.map((e, i) => {
        const dias = e.de === e.ate ? diaUm.replace("{a}", String(e.de)) : diaVarios.replace("{a}", String(e.de)).replace("{b}", String(e.ate));
        const datas =
          e.de === e.ate
            ? formatarData(dataDoDia(hoje, e.de), locale)
            : formatarIntervalo(dataDoDia(hoje, e.de), dataDoDia(hoje, e.ate), locale);
        return (
          <li key={e.de} className={e.destaque ? "is-hl" : undefined} style={{ animationDelay: `${i * 80}ms` } as CSSProperties}>
            <p className="mapf-tl-d mapf-num">
              {dias} · {datas}
            </p>
            {e.textos.map((t, j) => (
              <p key={t} className={j === 0 ? "mapf-tl-t" : "mapf-tl-s"}>
                {t}
              </p>
            ))}
          </li>
        );
      })}
    </ol>
  );
}

/** Mini linha do tempo da página de preço: Hoje → Dia {dias}. */
export function MiniTimeline({ hoje, diaN }: { hoje: string; diaN: string }) {
  return (
    <div className="mapf-mini-tl" aria-hidden="true">
      <span>{hoje}</span>
      <div className="mapf-mini-track">
        {Array.from({ length: DIAS }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <span>{diaN}</span>
    </div>
  );
}
