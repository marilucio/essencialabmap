import { Check } from "lucide-react";
import { pricing } from "../content";
import { PRICE_MONTHLY, PRICE_YEARLY } from "../constants";
import { Section, SectionTitle } from "./Section";
import { TrialButton } from "./TrialButton";

export function PricingSection() {
  return (
    <Section id="preco" className="bg-green-50" width="narrow">
      <SectionTitle className="text-center">{pricing.title}</SectionTitle>
      <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
          {pricing.plan}
        </p>
        <p className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          {PRICE_MONTHLY}
          <span className="text-lg font-semibold text-slate-600"> ou {PRICE_YEARLY}</span>
        </p>
        <p className="mt-2 text-slate-700">{pricing.trial}</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {pricing.included.map((i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700">
              <Check className="mt-1 h-4 w-4 shrink-0 text-green-700" aria-hidden="true" />
              <span>{i}</span>
            </li>
          ))}
        </ul>

        <TrialButton placement="pricing" label="Começar o teste de 7 dias" className="mt-10" />
      </div>
    </Section>
  );
}
