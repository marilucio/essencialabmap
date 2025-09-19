import { Card } from "./ui/card";
import methodImageSrc from "/images/method-calma-2ZZx3BJ1.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-calm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            A Solução: <span className="text-primary">Método CALMA#</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Criado especificamente para o cérebro brasileiro acelerado. 
            <span className="font-bold text-foreground"> 5 passos simples</span> que param seus pensamentos em 3 minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={methodImageSrc} 
              alt="Pessoa praticando o Método CALMA em estado de tranquilidade"
              className="rounded-2xl shadow-card w-full h-auto max-h-[400px] md:max-h-none object-cover"
            />
          </div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <Card className="p-4 md:p-6 space-y-3 md:space-y-4 shadow-card">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                  C
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Controle Respiratório Brasileiro</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Técnica adaptada ao nosso ritmo acelerado</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 space-y-3 md:space-y-4 shadow-card">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Ancoragem Sensorial Imediata</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Traz sua mente de volta ao presente</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 space-y-3 md:space-y-4 shadow-card">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-success text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                  L
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Liberação Muscular de 2 Minutos</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Descarrega a tensão acumulada</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 space-y-3 md:space-y-4 shadow-card">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-warning text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Mente Neutra (Despejo Cerebral)</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Esvazia os pensamentos repetitivos</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 space-y-3 md:space-y-4 shadow-card">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Afirmação de Segurança Personalizada</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Reconecta com sua paz interior</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 md:p-8 bg-success/10 border-success/20 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-success">
            ✅ Resultado Comprovado em 3 Minutos
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Não importa se são 3h da madrugada ou meio dia. O Método CALMA# funciona 
            <span className="font-bold text-foreground"> mesmo quando você está no auge da ansiedade.</span>
          </p>
        </Card>
      </div>
    </section>
  );
};