import { ShieldCheck } from "lucide-react";
import { dataSecurity } from "../content";
import { Section, SectionTitle } from "./Section";

export function DataSecuritySection() {
  return (
    <Section id="dados" className="bg-slate-50" width="narrow">
      <SectionTitle>{dataSecurity.title}</SectionTitle>
      <ul className="mt-8 space-y-4">
        {dataSecurity.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-slate-700">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
