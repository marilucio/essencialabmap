import { secondConsult } from "../content";
import { Section, SectionTitle } from "./Section";

export function SecondConsultSection() {
  return (
    <Section id="segunda-consulta" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>{secondConsult.title}</SectionTitle>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{secondConsult.intro}</p>
      </div>

      <ol className="mt-16 space-y-16">
        {secondConsult.doubts.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <li
              key={d.screen}
              className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <p className="text-sm font-semibold text-green-800">Dúvida {i + 1}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{d.question}</h3>
                <p className="mt-4 text-base font-semibold text-slate-900">
                  No MAP: {d.screen}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">{d.answer}</p>
              </div>
              <figure className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-200">
                <img
                  src={d.image.src}
                  srcSet={d.image.srcSet}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  alt={d.image.alt}
                  width={d.image.width}
                  height={d.image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </figure>
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-16 max-w-3xl text-center text-xl font-semibold text-slate-900">
        {secondConsult.closing}
      </p>
    </Section>
  );
}
