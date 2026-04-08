/**
 * Before/After section — based on Criativo 8 "Antes e Depois do Dia".
 * Shows the contrast between managing renal diet alone vs. with guidance.
 */

import { track } from "../lib";

const before = [
  { time: "7h", meal: "Café com leite + pão com queijo", result: "Já usou 22% do fósforo sem saber" },
  { time: "12h", meal: "Arroz, feijão, banana de sobremesa", result: "Potássio em 68% — sem ideia" },
  { time: "16h", meal: "Suco de laranja natural", result: "340ml de líquido + potássio. Total: 1800ml de 1000ml" },
  { time: "19h", meal: "Sopa de legumes", result: "Potássio 112%, líquido 210%" },
];

const after = [
  { time: "7h", meal: "Café com leite + pão com ovo", result: "Fósforo 19% — dentro do limite" },
  { time: "12h", meal: "Arroz + frango + salada blanqueada", result: "Potássio 38%, proteína 52% — tudo verde" },
  { time: "16h", meal: "Chá gelado em dose menor", result: "Líquido 62% — restam 380ml" },
  { time: "19h", meal: "Torrada + ovo mexido", result: "Dia encerrado: tudo dentro do limite" },
];

export function RenalBeforeAfter() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Mesmo diagnóstico. Mesma dieta prescrita.<br />
            <span className="text-emerald-700">Resultado oposto.</span>
          </h2>
          <p className="mt-3 text-gray-600">
            A diferença? Ter clareza para guiar cada decisão.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5">
            <div className="text-sm font-bold text-red-700 uppercase tracking-wider">Sem clareza</div>
            <div className="mt-4 space-y-3">
              {before.map((b) => (
                <div key={b.time} className="flex gap-3 text-sm">
                  <span className="font-mono text-xs text-red-500 mt-0.5 min-w-[2rem]">{b.time}</span>
                  <div>
                    <div className="text-gray-800">{b.meal}</div>
                    <div className="text-xs text-red-600">{b.result}</div>
                  </div>
                </div>
              ))}
              <div className="mt-2 rounded-lg bg-red-100 p-3 text-xs font-medium text-red-800">
                Exame do mês: Potássio 6.2 — médico preocupado.
              </div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
            <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Com clareza</div>
            <div className="mt-4 space-y-3">
              {after.map((a) => (
                <div key={a.time} className="flex gap-3 text-sm">
                  <span className="font-mono text-xs text-emerald-500 mt-0.5 min-w-[2rem]">{a.time}</span>
                  <div>
                    <div className="text-gray-800">{a.meal}</div>
                    <div className="text-xs text-emerald-600">{a.result}</div>
                  </div>
                </div>
              ))}
              <div className="mt-2 rounded-lg bg-emerald-100 p-3 text-xs font-medium text-emerald-800">
                Exame do mês: Potássio 4.8 — médico satisfeito.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              track("click_register_renal_webinar", { placement: "before_after" });
              document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-500 hover:shadow-lg"
          >
            Quero ter essa clareza — reservar minha vaga
          </button>
        </div>
      </div>
    </section>
  );
}
