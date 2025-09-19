import { Card } from "./ui/card";

export const ProblemSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="text-destructive">3h da Madrugada:</span> Sua Mente Não Para?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Você vira para um lado, vira para outro, pega o celular, larga o celular... 
            Tenta "não pensar em nada" mas isso só faz os pensamentos ficarem mais altos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="p-4 md:p-6 text-center space-y-3 md:space-y-4 shadow-card">
            <div className="text-3xl md:text-4xl">🏃‍♀️</div>
            <h3 className="font-semibold text-base md:text-lg">Sobrecarga de Responsabilidades</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Casa, trabalho, família, estudos - o brasileiro precisa "dar conta de tudo sozinho"
            </p>
          </Card>

          <Card className="p-4 md:p-6 text-center space-y-3 md:space-y-4 shadow-card">
            <div className="text-3xl md:text-4xl">👥</div>
            <h3 className="font-semibold text-base md:text-lg">Hipervigilância Social</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              "O que ele quis dizer com aquilo?", "Será que ofendi alguém?"
            </p>
          </Card>

          <Card className="p-4 md:p-6 text-center space-y-3 md:space-y-4 shadow-card sm:col-span-2 lg:col-span-1">
            <div className="text-3xl md:text-4xl">💰</div>
            <h3 className="font-semibold text-base md:text-lg">Pressão Financeira Constante</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              A conta que vence, o orçamento apertado, o medo do desemprego
            </p>
          </Card>
        </div>

        <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-destructive">
            O Resultado? Seu Cérebro Não Desliga
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Em 2024, analisamos dados de <span className="font-bold text-foreground">1.847 brasileiros</span> que 
            relatavam o mesmo problema: a mente acelerada noturna. O que descobrimos foi surpreendente...
          </p>
        </Card>
      </div>
    </section>
  );
};