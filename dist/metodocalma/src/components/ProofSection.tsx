import { Card } from "@/components/ui/card";

export const ProofSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo - SP",
      text: "Depois de 3 anos tomando remédio para dormir, consegui minha primeira noite completa de sono na primeira tentativa. Inacreditável!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro - RJ", 
      text: "Trabalho em 3 turnos e minha mente sempre ficava acelerada. Com o protocolo das 3h da madrugada, durmo em minutos.",
      rating: 5
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte - MG",
      text: "Sofria com pensamentos repetitivos há anos. O método CALMA# mudou minha vida. Recomendo para todos!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja os Resultados de Quem Já Testou
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">1.847</div>
              <div className="text-sm text-muted-foreground">Brasileiros Testaram</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-success">94%</div>
              <div className="text-sm text-muted-foreground">Dormiram na 1ª Noite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Minutos Apenas</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-warning text-lg">⭐</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            📊 Pesquisa Realizada em 2024
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Durante 6 meses, acompanhamos <span className="font-bold text-foreground">1.847 brasileiros</span> que 
            sofriam com ansiedade noturna. Os resultados superaram todas as expectativas:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-2xl font-bold text-success">94%</div>
              <div className="text-sm">Dormiram na primeira noite</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">87%</div>
              <div className="text-sm">Reduziram ansiedade em 7 dias</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">92%</div>
              <div className="text-sm">Recomendariam para amigos</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};