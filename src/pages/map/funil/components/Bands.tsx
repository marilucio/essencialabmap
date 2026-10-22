import { useEffect, useRef } from "react";

// Faixas de cor ao fundo: 4 fitas largas em seno, cada uma num ciclo próprio
// (18, 24, 27 e 30 s), para o desenho nunca se repetir igual. Desenhadas num
// canvas a 35 % da resolução; o desfoque é do CSS (.mapf-bands), porque o
// ctx.filter não existe no Safari do iPhone antes do 18.
// progress (0 a 1) sobe e esverdeia as fitas; dark troca para o verde luminoso.
// Com prefers-reduced-motion, um quadro parado. Com a aba oculta, o loop para.

type Props = { progress: number; dark: boolean };

type Fita = {
  y: number;
  amp: number;
  k: number;
  largura: number;
  fase: number;
  ciclo: number;
  claro: readonly [number, number, number];
  alfaClaro: number;
  alfaEscuro: number;
};

const MENTA = [167, 243, 208] as const;
const VERDE = [8, 193, 106] as const;
const SUAVE = [233, 249, 239] as const;

const FITAS: readonly Fita[] = [
  { y: 0.3, amp: 0.1, k: 1.6, largura: 0.3, fase: 0, ciclo: 24, claro: MENTA, alfaClaro: 0.75, alfaEscuro: 0.22 },
  { y: 0.48, amp: 0.12, k: 1.2, largura: 0.24, fase: 2, ciclo: 30, claro: VERDE, alfaClaro: 0.26, alfaEscuro: 0.5 },
  { y: 0.62, amp: 0.09, k: 2, largura: 0.2, fase: 4, ciclo: 18, claro: SUAVE, alfaClaro: 0.95, alfaEscuro: 0.12 },
  { y: 0.2, amp: 0.08, k: 1, largura: 0.18, fase: 1.3, ciclo: 27, claro: SUAVE, alfaClaro: 0.9, alfaEscuro: 0.1 },
];

const ESCALA = 0.35;

export function Bands({ progress, dark }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const alvo = useRef({ progress, dark });
  alvo.current = { progress, dark };
  // Redesenho do quadro parado (menos movimento): chamado quando a tela muda.
  const parado = useRef<(() => void) | null>(null);

  useEffect(() => {
    parado.current?.();
  }, [progress, dark]);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let p = alvo.current.progress;
    let mix = alvo.current.dark ? 1 : 0;
    let L = 0;
    let A = 0;

    const desenhar = (s: number) => {
      ctx.clearRect(0, 0, L, A);
      FITAS.forEach((f, i) => {
        const base = (f.y - p * 0.14) * A;
        const amp = f.amp * A * (1 + p * 0.4);
        const om = (2 * Math.PI) / f.ciclo;
        ctx.beginPath();
        for (let x = -20; x <= L + 20; x += 6) {
          const u = x / L;
          const y =
            base +
            Math.sin(u * Math.PI * f.k + s * om + f.fase) * amp +
            Math.sin(u * 7 + s * om * 1.7 + f.fase) * amp * 0.15 -
            (u - 0.5) * A * 0.18;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = f.largura * A;
        ctx.lineCap = "round";
        // Com o progresso, a terceira fita passa do verde suave à menta.
        const c = i === 2 ? f.claro.map((v, j) => Math.round(v + (MENTA[j] - v) * p)) : f.claro;
        const cor = c.map((v, j) => Math.round(v + (VERDE[j] - v) * mix));
        const alfa = f.alfaClaro * (1 - mix) + f.alfaEscuro * mix;
        ctx.strokeStyle = `rgba(${cor[0]},${cor[1]},${cor[2]},${alfa.toFixed(3)})`;
        ctx.stroke();
      });
    };

    const t0 = performance.now();
    const quadro = (agora: number) => {
      p += (alvo.current.progress - p) * 0.03;
      mix += ((alvo.current.dark ? 1 : 0) - mix) * 0.06;
      desenhar((agora - t0) / 1000);
      raf = requestAnimationFrame(quadro);
    };

    const iniciar = () => {
      cancelAnimationFrame(raf);
      parado.current = null;
      if (reduz.matches || document.hidden) {
        parado.current = () => {
          p = alvo.current.progress;
          mix = alvo.current.dark ? 1 : 0;
          desenhar(0);
        };
        parado.current();
        return;
      }
      raf = requestAnimationFrame(quadro);
    };

    const redimensionar = () => {
      L = cv.width = Math.ceil(window.innerWidth * ESCALA);
      A = cv.height = Math.ceil(window.innerHeight * ESCALA);
      desenhar(0);
    };

    redimensionar();
    iniciar();
    cv.classList.add("is-on");
    window.addEventListener("resize", redimensionar);
    document.addEventListener("visibilitychange", iniciar);
    reduz.addEventListener("change", iniciar);
    return () => {
      cancelAnimationFrame(raf);
      parado.current = null;
      window.removeEventListener("resize", redimensionar);
      document.removeEventListener("visibilitychange", iniciar);
      reduz.removeEventListener("change", iniciar);
    };
  }, []);

  return <canvas ref={ref} className="mapf-bands" aria-hidden="true" />;
}
