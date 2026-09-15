import { secondConsult } from "../content";
import { Section, SectionTitle } from "./Section";

// As quatro dores em grade compacta, sem prints: a demonstração visual
// fica na seção seguinte, "Um caso conduzido no MAP".
export function SecondConsultSection() {
  return (
    <Section id="segunda-consulta" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>{secondConsult.title}</SectionTitle>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{secondConsult.intro}</p>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-2">
        {secondConsult.doubts.map((d, i) => (
          <li key={d.screen} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 md:p-8">
            <p className="text-sm font-semibold text-green-800">Dúvida {i + 1}</p>
            <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">{d.question}</h3>
            <p className="mt-4 text-sm font-semibold text-slate-900">No MAP: {d.screen}</p>
            <p className="mt-2 leading-relaxed text-slate-700">{d.answer}</p>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-14 max-w-3xl text-center text-xl font-semibold text-slate-900">
        {secondConsult.closing}
      </p>
    </Section>
  );
}
