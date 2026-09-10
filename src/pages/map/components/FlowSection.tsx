import { flow } from "../content";
import { Section, SectionTitle } from "./Section";

export function FlowSection() {
  return (
    <Section id="como-funciona" className="bg-green-50">
      <SectionTitle className="text-center">{flow.title}</SectionTitle>

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

      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {flow.steps.map((s, i) => (
          <li key={s.moment} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-green-100">
            <p className="text-sm font-semibold text-green-800">
              {String(i + 1).padStart(2, "0")} · {s.moment}
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
