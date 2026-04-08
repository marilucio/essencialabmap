import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    q: "Eu j\u00e1 fa\u00e7o acompanhamento m\u00e9dico.",
    a: "\u00d3timo \u2014 a aula \u00e9 justamente para os outros 89 dias entre consultas. Para ter clareza quando o m\u00e9dico n\u00e3o est\u00e1 do lado.",
  },
  {
    q: "N\u00e3o sou bom(a) com tecnologia.",
    a: "Voc\u00ea n\u00e3o precisa ser. A aula \u00e9 simples, direta e feita para qualquer pessoa que queira entender melhor suas escolhas.",
  },
  {
    q: "Ser\u00e1 que serve para mim?",
    a: "Se voc\u00ea convive com d\u00favidas sobre alimenta\u00e7\u00e3o, l\u00edquidos ou r\u00f3tulos no dia a dia \u2014 paciente ou cuidador \u2014 foi pensada para voc\u00ea.",
  },
  {
    q: "Isso substitui meu m\u00e9dico?",
    a: "N\u00e3o, nunca. \u00c9 conte\u00fado educativo para apoiar suas decis\u00f5es entre consultas. O acompanhamento m\u00e9dico continua essencial.",
  },
];

export function RenalObjections() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mas ser&#225; que...</h2>
          <p className="mt-3 text-gray-600">Respostas diretas para as d&#250;vidas mais comuns.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <Card key={it.q} className="border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="font-semibold text-gray-900">{it.q}</div>
                <div className="mt-2 text-sm text-gray-600">{it.a}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
