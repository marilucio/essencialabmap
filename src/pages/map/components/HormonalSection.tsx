import { hormonal } from "../content";
import { Section, SectionTitle } from "./Section";

export function HormonalSection() {
  return (
    <Section id="perfil-hormonal" className="bg-slate-50">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle>{hormonal.title}</SectionTitle>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">{hormonal.text}</p>
          <p
            role="note"
            className="mt-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
          >
            {hormonal.notice}
          </p>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-200">
          <img
            src={hormonal.image.src}
            alt={hormonal.image.alt}
            width={hormonal.image.width}
            height={hormonal.image.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full"
          />
        </figure>
      </div>
    </Section>
  );
}
