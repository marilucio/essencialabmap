import type { CSSProperties } from "react";

// Teia funcional de 12 sistemas se desenhando ponto a ponto. Valores
// ilustrativos; os três sistemas acesos combinam com os pontos de atenção da
// tela 5 (cansaço → Endócrino, sono → Neurológico, cabelo e unhas → Tegumentar).
// O verde Essencia só aparece em traço e ponto, nunca sob texto.

const VALORES = [0.55, 0.48, 0.82, 0.74, 0.35, 0.4, 0.3, 0.38, 0.7, 0.5, 0.45, 0.6];
const ACESOS = new Set([2, 3, 8]);

// Geometria em unidades do viewBox. A 375 px de tela o SVG ocupa ~281 px de
// largura (escala ~0,94), então os rótulos de 10,6 (funil.css) saem com ~9,9 px.
const W = 300;
const H = 176;
const CX = W / 2;
const CY = 86;
const R = 60;
const DISTANCIA_ROTULO = 9;
const ENTRELINHA = 11;

const ponto = (i: number, r: number): [number, number] => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 12;
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r];
};

/** Quebra rótulos longos em duas linhas para caber ao lado da teia. */
function linhas(nome: string): string[] {
  const parenteses = nome.indexOf(" (");
  if (parenteses > 0) return [nome.slice(0, parenteses), nome.slice(parenteses + 1)];
  const barra = nome.indexOf("/");
  if (barra > 0) return [nome.slice(0, barra + 1), nome.slice(barra + 1)];
  if (nome === "Musculoesquelético") return ["Musculo-", "esquelético"];
  return [nome];
}

/**
 * Posição do rótulo i. Topo e base (eixo vertical): centrados, acima ou abaixo da ponta.
 * Os demais: ao lado da ponta, centrados na altura do eixo, para os diagonais de cima
 * não encostarem no rótulo do topo.
 */
function posicaoRotulo(i: number, n: number) {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 12;
  const x = CX + Math.cos(a) * (R + DISTANCIA_ROTULO);
  const y = CY + Math.sin(a) * (R + DISTANCIA_ROTULO);
  const vertical = Math.abs(Math.cos(a)) < 0.3;
  const anchor = vertical ? "middle" : Math.cos(a) > 0 ? "start" : "end";
  const y0 = !vertical
    ? y + 3.5 - ((n - 1) * ENTRELINHA) / 2
    : Math.sin(a) < 0
      ? y - 7 - (n - 1) * ENTRELINHA
      : y + 9;
  return { x, y0, anchor } as const;
}

export function Teia({ sistemas, rotulo }: { sistemas: readonly string[]; rotulo: string }) {
  const poligono = VALORES.map((v, i) => ponto(i, R * v).join(",")).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mapf-teia" role="img" aria-label={rotulo}>
      {[0.33, 0.66, 1].map((k) => (
        <polygon key={k} points={sistemas.map((_, i) => ponto(i, R * k).join(",")).join(" ")} className="mapf-teia-ring" />
      ))}
      {sistemas.map((nome, i) => {
        const [x, y] = ponto(i, R);
        const ls = linhas(nome);
        const { x: lx, y0, anchor } = posicaoRotulo(i, ls.length);
        return (
          <g key={nome}>
            <line x1={CX} y1={CY} x2={x} y2={y} className="mapf-teia-axis" />
            <text x={lx} y={y0} textAnchor={anchor} className={ACESOS.has(i) ? "mapf-teia-label is-on" : "mapf-teia-label"}>
              {ls.map((l, j) => (
                <tspan key={l} x={lx} dy={j === 0 ? 0 : ENTRELINHA}>
                  {l}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
      <polygon points={poligono} pathLength={1} className="mapf-teia-shape" />
      {VALORES.map((v, i) => {
        const [x, y] = ponto(i, R * v);
        const aceso = ACESOS.has(i);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={aceso ? 4.4 : 3}
            className={aceso ? "mapf-teia-dot is-on" : "mapf-teia-dot"}
            style={{ animationDelay: `${150 + i * 90}ms` } as CSSProperties}
          />
        );
      })}
    </svg>
  );
}
