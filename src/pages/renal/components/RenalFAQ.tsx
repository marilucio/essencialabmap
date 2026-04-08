import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { setFaqSchema } from "../lib";
import { useEffect } from "react";

export type RenalFaqItem = { q: string; a: string };

export const renalFaq: RenalFaqItem[] = [
  {
    q: "A aula é realmente gratuita?",
    a: "Sim, 100% gratuita. Sem taxa de inscrição, sem cartão de crédito. Você só precisa do nome e WhatsApp.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Pelo WhatsApp. Depois de se inscrever, você confirma no WhatsApp e recebe o link + lembretes por lá.",
  },
  {
    q: "Serve para quem faz hemodiálise ou diálise peritoneal?",
    a: "Sim. A aula é útil para pacientes em diferentes fases do tratamento renal. O conteúdo é educativo e prático.",
  },
  {
    q: "Sou cuidador(a), posso participar?",
    a: "Sim! A aula foi pensada para pacientes, cuidadores e familiares — qualquer pessoa que ajude nas decisões do dia a dia.",
  },
  {
    q: "O conteúdo substitui meu médico ou nutricionista?",
    a: "Não. É conteúdo educativo que complementa seu acompanhamento. O médico/nutricionista continua essencial.",
  },
  {
    q: "E se eu perder a aula ao vivo?",
    a: "Acompanhe o WhatsApp após a inscrição. Por lá você recebe todas as informações sobre acesso e possível replay.",
  },
];

export function RenalFAQ() {
  useEffect(() => {
    setFaqSchema(
      "renal-faq-schema",
      renalFaq.map((i) => ({ question: i.q, answer: i.a })),
    );
  }, []);

  return (
    <section id="faq" className="w-full bg-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Perguntas frequentes</h2>
        </div>
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {renalFaq.map((item, idx) => (
              <AccordionItem value={`item-${idx}`} key={item.q}>
                <AccordionTrigger className="px-4 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
