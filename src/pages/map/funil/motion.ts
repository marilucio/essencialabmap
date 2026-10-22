// Movimento do funil: a curva única (EASE) avaliada em JS, contagem de números,
// preferência por menos movimento e a vibração curta da escolha.
import { useEffect, useState } from "react";
import { DUR, EASE } from "./constants";

/** cubic-bezier(x1, y1, x2, y2) → função de progresso, como no CSS. */
function bezier(x1: number, y1: number, x2: number, y2: number) {
  const coord = (t: number, a: number, b: number) => 3 * a * t * (1 - t) ** 2 + 3 * b * t ** 2 * (1 - t) + t ** 3;
  const derivada = (t: number, a: number, b: number) =>
    3 * a * (1 - t) ** 2 + 6 * (b - a) * t * (1 - t) + 3 * (1 - b) * t ** 2;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i += 1) {
      const erro = coord(t, x1, x2) - x;
      const d = derivada(t, x1, x2);
      if (Math.abs(erro) < 1e-5 || d === 0) break;
      t -= erro / d;
    }
    return coord(Math.min(1, Math.max(0, t)), y1, y2);
  };
}

export const ease = bezier(...EASE);

const QUERY = "(prefers-reduced-motion: reduce)";

export function prefereMenosMovimento(): boolean {
  return typeof window !== "undefined" && window.matchMedia?.(QUERY).matches === true;
}

export function useMenosMovimento(): boolean {
  const [reduz, setReduz] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    setReduz(mq.matches);
    const muda = () => setReduz(mq.matches);
    mq.addEventListener("change", muda);
    return () => mq.removeEventListener("change", muda);
  }, []);
  return reduz;
}

/** 10 ms de vibração ao escolher, só onde navigator.vibrate existe. */
export function vibrar() {
  try {
    navigator.vibrate?.(10);
  } catch {
    /* sem vibração */
  }
}

/**
 * Conta de `de` até `para` em 600 ms com a curva única, depois de `atraso` ms.
 * Com menos movimento, entrega o valor final direto.
 */
export function useContagem(para: number, { de = 0, atraso = 0, ativo = true } = {}): number {
  const [valor, setValor] = useState(de);
  useEffect(() => {
    if (!ativo) return;
    if (prefereMenosMovimento()) {
      setValor(para);
      return;
    }
    let raf = 0;
    const timer = window.setTimeout(() => {
      const t0 = performance.now();
      const passo = (agora: number) => {
        const p = Math.min(1, (agora - t0) / DUR.contagem);
        setValor(Math.round(de + (para - de) * ease(p)));
        if (p < 1) raf = requestAnimationFrame(passo);
      };
      raf = requestAnimationFrame(passo);
    }, atraso);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [para, de, atraso, ativo]);
  return valor;
}

/** Liga `true` depois de `ms` (para revelar partes em sequência). */
export function useDepois(ms: number, ativo = true): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (!ativo) return;
    if (prefereMenosMovimento()) {
      setOk(true);
      return;
    }
    const t = window.setTimeout(() => setOk(true), ms);
    return () => window.clearTimeout(t);
  }, [ms, ativo]);
  return ok;
}
