import { Card, CardContent } from "@/components/ui/card";
import { Refrigerator, ShoppingBasket, Droplets, Users, Brain } from "lucide-react";

const pains = [
  {
    icon: Refrigerator,
    title: "Abrir a geladeira e travar",
    text: "Banana? Potássio. Queijo? Fósforo. Presunto? Sódio. Sopa? Líquido. Você quer fazer o certo, mas trava diante de cada escolha.",
  },
  {
    icon: ShoppingBasket,
    title: "Ler rótulos sem entender nada",
    text: "Tripolifosfato, hexametafosfato… são 12 tipos de fosfato escondido nos rótulos. 'Light' não significa seguro pro seu rim.",
  },
  {
    icon: Droplets,
    title: "Cada ml de líquido conta",
    text: "Aquele suco 'natural' de 340ml já passou seu limite do dia. E ninguém te avisou que sopa também entra na conta.",
  },
  {
    icon: Brain,
    title: "Calcular tudo de cabeça, o tempo todo",
    text: "Proteína, potássio, fósforo, sódio, líquido. 5 variáveis ao mesmo tempo. Em cada refeição. Todo santo dia.",
  },
  {
    icon: Users,
    title: "Sozinho(a) entre uma consulta e outra",
    text: "89 dias. 267 refeições. Sozinho(a). Só com uma folha de 'pode' e 'não pode' que não acompanha a vida real.",
  },
];

export function RenalPainSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Se você sente isso, você <span className="underline decoration-red-400 decoration-2">não</span> está sozinho(a)
          </h2>
          <p className="mt-3 text-gray-600">
            A rotina renal exige decisões pequenas o dia inteiro. O peso não é falta de cuidado — é ter que decidir no escuro.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex size-10 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{p.title}</div>
                      <div className="mt-1 text-sm text-gray-600">{p.text}</div>
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
