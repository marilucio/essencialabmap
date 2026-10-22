import { useState, type CSSProperties, type ReactNode } from "react";
import { DUR } from "../constants";
import { vibrar } from "../motion";

const Check = () => (
  <span className="mapf-ck" aria-hidden="true">
    <svg viewBox="0 0 12 12">
      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
    </svg>
  </span>
);

const cascata = (i: number): CSSProperties => ({ animationDelay: `${i * DUR.cascata}ms` });

export type Opcao = { rotulo: string; icone?: ReactNode; larga?: boolean };

type OpcoesProps = {
  opcoes: readonly Opcao[];
  selecionada?: number;
  grade?: boolean;
  onEscolha: (i: number) => void;
};

/** Lista de opções: a escolhida ganha borda verde, check desenhado e vibração; as outras esmaecem. */
export function Opcoes({ opcoes, selecionada, grade = false, onEscolha }: OpcoesProps) {
  const [escolhida, setEscolhida] = useState<number | null>(null);
  const atual = escolhida ?? selecionada;
  return (
    <div className={`mapf-opts${grade ? " is-grid" : ""}${escolhida !== null ? " is-picked" : ""}`} role="list">
      {opcoes.map((o, i) => (
        <div role="listitem" key={o.rotulo} className={o.larga ? "is-wide" : undefined} style={cascata(i)}>
          <button
            type="button"
            className={`mapf-opt${grade ? " is-tile" : ""}${atual === i ? " is-sel" : ""}`}
            aria-pressed={atual === i}
            disabled={escolhida !== null && escolhida !== i}
            onClick={() => {
              if (escolhida !== null) return;
              setEscolhida(i);
              vibrar();
              onEscolha(i);
            }}
          >
            {o.icone && <span className="mapf-ic">{o.icone}</span>}
            <span className="mapf-opt-label">{o.rotulo}</span>
            <Check />
          </button>
        </div>
      ))}
    </div>
  );
}

type EscalaProps = {
  selecionada?: number;
  extremos: readonly [string, string];
  rotulo: string;
  onEscolha: (n: number) => void;
};

/** Escala de 5 pontos (1 = Nada, 5 = Totalmente). */
export function Escala({ selecionada, extremos, rotulo, onEscolha }: EscalaProps) {
  const [escolhida, setEscolhida] = useState<number | null>(null);
  const atual = escolhida ?? selecionada;
  return (
    <div>
      <div className={`mapf-scale${escolhida !== null ? " is-picked" : ""}`} role="group" aria-label={rotulo}>
        {[1, 2, 3, 4, 5].map((n, i) => (
          <button
            type="button"
            key={n}
            className={`mapf-opt mapf-num${atual === n ? " is-sel" : ""}`}
            style={cascata(i)}
            aria-pressed={atual === n}
            aria-label={n === 1 ? `${n} · ${extremos[0]}` : n === 5 ? `${n} · ${extremos[1]}` : String(n)}
            disabled={escolhida !== null && escolhida !== n}
            onClick={() => {
              if (escolhida !== null) return;
              setEscolhida(n);
              vibrar();
              onEscolha(n);
            }}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="mapf-scale-ends" aria-hidden="true">
        <span>{extremos[0]}</span>
        <span>{extremos[1]}</span>
      </div>
    </div>
  );
}

type FaixaProps = {
  faixas: readonly string[];
  valor: number;
  rotulo: string;
  onMuda: (i: number) => void;
};

/** Seletor deslizante da tela 3. */
export function SeletorFaixa({ faixas, valor, rotulo, onMuda }: FaixaProps) {
  return (
    <div className="mapf-range">
      <output className="mapf-range-out mapf-num" aria-live="polite">
        {faixas[valor]}
      </output>
      <input
        type="range"
        min={0}
        max={faixas.length - 1}
        step={1}
        value={valor}
        aria-label={rotulo}
        aria-valuetext={faixas[valor]}
        onChange={(e) => {
          vibrar();
          onMuda(Number(e.target.value));
        }}
      />
      <div className="mapf-ticks" aria-hidden="true">
        {faixas.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
    </div>
  );
}

type BotaoProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

export function Botao({ children, onClick, type = "button", disabled, className = "" }: BotaoProps) {
  return (
    <button type={type} className={`mapf-btn ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

/** Frase que aparece depois de responder (telas 4 e 13). */
export function Frase({ children }: { children: ReactNode }) {
  return (
    <p className="mapf-recog" role="status">
      {children}
    </p>
  );
}
