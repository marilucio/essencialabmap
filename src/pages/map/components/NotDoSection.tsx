import { notDo } from "../content";
import { Section, SectionTitle } from "./Section";

export function NotDoSection() {
  return (
    <Section id="o-que-nao-faz" className="bg-white" width="narrow">
      <SectionTitle>{notDo.title}</SectionTitle>
      <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {notDo.items.map((item) => (
          <li key={item.lead} className="py-6">
            <p className="text-lg leading-relaxed text-slate-700">
              <strong className="font-bold text-slate-900">{item.lead}</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-lg font-semibold leading-relaxed text-slate-900">{notDo.closing}</p>
    </Section>
  );
}
