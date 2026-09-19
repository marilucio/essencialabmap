import { Headphones, Play, ShieldCheck } from "lucide-react";
import { guided } from "../content";
import { TrialButton } from "./TrialButton";

// Bloco das Jornadas Guiadas Personalizadas. Fundo escuro para destacar como o
// diferencial de acompanhamento entre consultas. A tela da paciente é ilustração em CSS.
export function GuidedSessionsSection() {
  const c = guided.patientCard;
  return (
    <section id="jornadas-guiadas" className="scroll-mt-20 bg-green-900 px-4 py-16 text-white md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide text-green-200">
            {guided.eyebrow}
            <span className="rounded-full bg-green-800 px-3 py-1 text-xs font-medium normal-case tracking-normal text-green-100 ring-1 ring-green-600">
              {guided.status}
            </span>
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{guided.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-green-50">{guided.lead}</p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold">{guided.contrastTitle}</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <p className="rounded-2xl border border-green-700 bg-green-800/60 p-5 text-green-100">
                  {guided.contrastGeneric}
                </p>
                <p className="rounded-2xl border border-green-400 bg-white p-5 font-medium text-slate-900">
                  {guided.contrastPersonal}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold">{guided.stepsTitle}</h3>
              <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                {guided.steps.map((s, i) => (
                  <li key={s.title} className="rounded-2xl bg-green-800/60 p-5 ring-1 ring-green-700">
                    <p className="text-sm font-semibold text-green-200">{String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-bold">{s.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-green-50">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <figure className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
              <figcaption className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {c.caption}
              </figcaption>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-green-800">{c.label}</p>
                <p className="mt-1 text-xl font-bold">{c.name}</p>
                <p className="text-sm text-slate-600">
                  {c.by} · {c.duration}
                </p>
                <div className="mt-4 flex items-center gap-3 rounded-full bg-green-700 px-4 py-3 text-white">
                  <Play className="h-5 w-5" aria-hidden="true" />
                  <span className="font-semibold">{c.button}</span>
                </div>
                <div className="mt-4">
                  <div className="h-1.5 w-full rounded-full bg-slate-200">
                    <div className="h-1.5 w-[37%] rounded-full bg-green-600" />
                  </div>
                  <p className="mt-2 text-right text-xs tabular-nums text-slate-500">{c.time}</p>
                </div>
                <div className="mt-4 flex items-start gap-2 text-slate-600">
                  <Headphones className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <div>
                    <ul className="flex flex-wrap gap-1.5">
                      {c.ambiences.map((a, i) => (
                        <li
                          key={a}
                          className={`rounded-full px-2.5 py-1 text-xs ${i === 1 ? "bg-green-100 font-semibold text-green-900" : "bg-white ring-1 ring-slate-200"}`}
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs leading-relaxed">{c.ambienceNote}</p>
                  </div>
                </div>
              </div>
            </figure>

            <div className="rounded-2xl bg-green-800/60 p-5 ring-1 ring-green-700">
              <p className="font-bold">{guided.relief.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-green-50">{guided.relief.text}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <ShieldCheck className="h-6 w-6 text-green-300" aria-hidden="true" />
              {guided.controlTitle}
            </h3>
            <p className="mt-4 leading-relaxed text-green-50">{guided.controlText}</p>
          </div>
          <ul className="space-y-3 md:pt-12">
            {guided.privacyItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-green-50">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-green-700 pt-10">
          <p className="max-w-3xl text-xl font-semibold">{guided.closing}</p>
          <TrialButton placement="guided" label={guided.cta} tone="light" />
          <p className="max-w-3xl text-sm text-green-200">{guided.note}</p>
        </div>
      </div>
    </section>
  );
}
