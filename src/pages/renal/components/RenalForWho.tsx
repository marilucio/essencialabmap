import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const forWho = [
  "Paciente renal em tratamento conservador",
  "Paciente em hemodiálise ou diálise peritoneal",
  "Cuidador(a) ou familiar que ajuda nas decisões do dia a dia",
  "Quem quer sair do improviso e ter mais direção na rotina alimentar",
  "Quem já tentou seguir tabelas e listas e sentiu que não funciona",
];

const notFor = [
  "Quem busca promessa de cura ou resultado garantido",
  "Quem precisa de atendimento emergencial (procure um serviço de saúde)",
  "Quem quer substituir acompanhamento médico ou nutricional",
];

export function RenalForWho() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Para quem é essa aula?</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="border-emerald-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-700">Faz total sentido se você...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {forWho.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-600">Talvez não seja para você se...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {notFor.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-500">
                    <XCircle className="mt-0.5 size-4 text-gray-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
