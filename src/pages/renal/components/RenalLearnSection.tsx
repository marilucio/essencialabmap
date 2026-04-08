import { Card, CardContent } from "@/components/ui/card";
import { ListChecks, Lightbulb, Compass, Shield, Eye } from "lucide-react";

const learn = [
  {
    icon: ListChecks,
    title: "Por que listas e tabelas falham na prática",
    text: "Porções mudam, combinações mudam, rotina muda. Você vai entender por que o jeito antigo não funciona.",
  },
  {
    icon: Lightbulb,
    title: "A verdadeira razão da insegurança alimentar",
    text: "Não é falta de esforço. É ter que decidir no escuro. Você vai ver o que muda quando tem clareza.",
  },
  {
    icon: Eye,
    title: "O que está escondido nos rótulos",
    text: "12 tipos de fosfato que a indústria esconde com nomes técnicos. Ao vivo, você vai ver como identificar.",
  },
  {
    icon: Compass,
    title: "Como ter direção real no dia a dia",
    text: "Um jeito prático de saber o que ainda cabe no dia — sem calcular de cabeça, sem adivinhar.",
  },
  {
    icon: Shield,
    title: "O próximo passo concreto",
    text: "Na aula, você vai conhecer uma tecnologia que pode mudar a forma como você lida com tudo isso na prática.",
  },
];

export function RenalLearnSection() {
  return (
    <section id="conteudo" className="w-full bg-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">O que você vai descobrir na aula</h2>
          <p className="mt-3 text-gray-600">
            60 minutos que podem mudar sua relação com a comida, o tratamento e a rotina.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {learn.map((l, i) => {
            const Icon = l.icon;
            return (
              <Card key={l.title} className={`border-emerald-100 shadow-sm ${i === learn.length - 1 ? "sm:col-span-2 sm:max-w-lg sm:mx-auto" : ""}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{l.title}</div>
                      <div className="mt-1 text-sm text-gray-600">{l.text}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
