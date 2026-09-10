import { Check, X } from "lucide-react";
import { fit } from "../content";
import { Section } from "./Section";

export function FitSection() {
  return (
    <Section id="para-quem" className="bg-white">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">{fit.forTitle}</h2>
          <ul className="mt-6 space-y-3">
            {fit.forItems.map((i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <Check className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">{fit.notTitle}</h2>
          <ul className="mt-6 space-y-3">
            {fit.notItems.map((i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <X className="mt-1 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
