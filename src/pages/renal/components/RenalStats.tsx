import { track } from "../lib";

const stats = [
  { number: "15M+", label: "de brasileiros convivem com doença renal crônica" },
  { number: "89", label: "dias entre uma consulta e outra, em média" },
  { number: "267", label: "refeições decididas sozinho(a) entre consultas" },
  { number: "5", label: "nutrientes para controlar ao mesmo tempo, toda refeição" },
];

export function RenalStats() {
  return (
    <section className="w-full bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.number} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-emerald-700">{s.number}</div>
              <div className="mt-2 text-xs md:text-sm text-gray-600 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              track("click_register_renal_webinar", { placement: "stats" });
              document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800 transition-colors"
          >
            Entenda na aula como ter mais clareza nessas 267 refeições →
          </button>
        </div>
      </div>
    </section>
  );
}
