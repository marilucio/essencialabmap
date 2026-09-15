import { flow } from "../content";
import { Section, SectionTitle } from "./Section";

// Só a faixa dos seis momentos. A caminhada tela a tela está em CaseSection.
export function FlowSection() {
  return (
    <Section id="como-funciona" className="bg-green-50">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>{flow.title}</SectionTitle>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">{flow.intro}</p>
      </div>

      <ol
        className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm font-semibold text-green-900"
        aria-label="Etapas do atendimento"
      >
        {flow.strip.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-green-200">
              {s}
            </span>
            {i < flow.strip.length - 1 && (
              <span aria-hidden="true" className="text-green-600">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
