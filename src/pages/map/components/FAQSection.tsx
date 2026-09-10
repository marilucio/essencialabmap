import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "../content";
import { Section, SectionTitle } from "./Section";

export function FAQSection() {
  return (
    <Section id="faq" className="bg-white" width="narrow">
      <SectionTitle className="text-center">{faq.title}</SectionTitle>
      <Accordion type="single" collapsible className="mt-10">
        {faq.items.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`}>
            <AccordionTrigger className="text-lg font-semibold text-slate-900">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-slate-700">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
