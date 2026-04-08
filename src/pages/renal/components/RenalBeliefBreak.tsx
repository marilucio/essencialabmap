import { track } from "../lib";

export function RenalBeliefBreak() {
  return (
    <section className="w-full bg-slate-900 py-16">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          E se o problema não fosse você?
        </h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          E se o problema fosse o jeito antigo de tentar controlar tudo sozinho(a) — com listas estáticas,
          tabelas genéricas e orientações que não acompanham a sua rotina real?
        </p>

        <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-sm italic text-slate-400 leading-relaxed">
            "Querido rim, desculpa. Eu não sabia que a banana de todo dia estava te machucando.
            Não sabia que o queijo do café te sobrecarregava. Ninguém me explicou que são
            5 coisas ao mesmo tempo. Só me deram uma folha com 'pode' e 'não pode'
            e disseram 'boa sorte'."
          </p>
          <p className="mt-3 text-xs text-slate-500">
            — Todo paciente renal que já se sentiu sozinho(a)
          </p>
        </div>

        <p className="mt-8 text-base md:text-lg font-medium text-emerald-400">
          Nesta aula, você vai entender que existe um caminho diferente.
        </p>

        <button
          onClick={() => {
            track("click_register_renal_webinar", { placement: "belief_break" });
            document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-emerald-500 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30"
        >
          Quero participar da aula gratuita
        </button>
      </div>
    </section>
  );
}
