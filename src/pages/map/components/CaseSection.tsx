import { caseStudy, type Screenshot } from "../content";
import { Section, SectionTitle } from "./Section";
import { TrialButton } from "./TrialButton";

// Demonstração visual principal da página: um caso fictício percorrendo o MAP
// em seis etapas, como timeline vertical. Texto à esquerda e tela à direita no
// desktop; empilhado no mobile. Sem abas nem carrossel: tudo fica no HTML e
// entra no prerender de map.html.

// Proporção final dos prints (1400×875). O placeholder usa a mesma, para que a
// troca pelas imagens reais não mova o layout.
const SCREEN_ASPECT = "aspect-[16/10]";

function ScreenFrame({ screen, image }: { screen: string; image?: Screenshot }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 truncate text-xs font-medium text-slate-500">
          EssenciaLab MAP · {screen}
        </span>
      </div>

      {image ? (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1024px) 640px, 100vw"
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      ) : (
        <div
          role="img"
          aria-label={`Tela ${screen} do MAP, ${caseStudy.placeholderNote.toLowerCase()}`}
          className={`${SCREEN_ASPECT} flex w-full items-center justify-center bg-slate-50 p-6`}
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-center">
            <p className="text-base font-semibold text-slate-600">{screen}</p>
            <p className="mt-1 text-sm text-slate-400">{caseStudy.placeholderNote}</p>
          </div>
        </div>
      )}
    </figure>
  );
}

export function CaseSection() {
  return (
    <Section id="caso" className="bg-slate-50">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
          {caseStudy.eyebrow}
        </p>
        <SectionTitle className="mt-3">{caseStudy.title}</SectionTitle>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{caseStudy.subtitle}</p>

        <p className="mx-auto mt-8 inline-flex max-w-2xl flex-col items-center gap-1 rounded-2xl bg-white px-6 py-4 text-left shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-slate-500">
            {caseStudy.patient.label}
          </span>
          <span className="whitespace-nowrap font-semibold text-slate-900">
            {caseStudy.patient.name}
          </span>
          <span className="text-sm text-slate-600">{caseStudy.patient.complaints}</span>
        </p>
      </div>

      <ol className="relative mt-16 space-y-14 md:space-y-16 lg:space-y-20">
        {/* Linha vertical da timeline, alinhada aos nós numerados. */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-6 hidden w-px bg-slate-200 md:block"
        />

        {caseStudy.steps.map((step, i) => (
          <li
            key={step.slug}
            className="relative grid items-center gap-6 md:pl-16 lg:grid-cols-12 lg:gap-10"
          >
            <div className="md:relative lg:col-span-5">
              <span
                aria-hidden="true"
                className="absolute -left-16 top-0 hidden h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white ring-4 ring-slate-50 md:flex"
              >
                {i + 1}
              </span>
              <p className="text-sm font-semibold text-green-800">
                <span className="md:hidden">{String(i + 1).padStart(2, "0")} · </span>
                {step.moment}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-snug text-slate-900">{step.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{step.text}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">No MAP: {step.screen}</p>
            </div>

            <div className="lg:col-span-7">
              <ScreenFrame screen={step.screen} image={step.image} />
            </div>
          </li>
        ))}
      </ol>

      <ul className="mx-auto mt-20 grid max-w-5xl gap-4 md:grid-cols-3">
        {caseStudy.credibility.map((line) => (
          <li
            key={line}
            className="rounded-2xl border-l-4 border-green-700 bg-white px-5 py-4 text-base font-medium leading-relaxed text-slate-800 shadow-sm ring-1 ring-slate-200"
          >
            {line}
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center text-center">
        <p className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
          {caseStudy.closing}
        </p>
        <TrialButton placement="caso" label={caseStudy.cta} className="mt-8 items-center" />
      </div>
    </Section>
  );
}
