import { Card } from "@/components/ui/card";
import methodImageSrc from "@/assets/method-calma-2ZZx3BJ1.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-calm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Solução: <span className="text-primary">Método CALMA#</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criado especificamente para o cérebro brasileiro acelerado. 
            <span className="font-bold text-foreground"> 5 passos simples</span> que param seus pensamentos em 3 minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={methodImageSrc} 
              alt="Pessoa praticando o Método CALMA em estado de tranquilidade"
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h3 className="font-bold text-lg">Controle Respiratório Brasileiro</h3>
                  <p className="text-sm text-muted-foreground">Técnica adaptada ao nosso ritmo acelerado</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ancoragem Sensorial Imediata</h3>
                  <p className="text-sm text-muted-foreground">Traz sua mente de volta ao presente</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success text-white rounded-full flex items-center justify-center font-bold text-lg">
                  L
                </div>
                <div>
                  <h3 className="font-bold text-lg">Liberação Muscular de 2 Minutos</h3>
                  <p className="text-sm text-muted-foreground">Descarrega a tensão acumulada</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warning text-white rounded-full flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mente Neutra (Despejo Cerebral)</h3>
                  <p className="text-sm text-muted-foreground">Esvazia os pensamentos repetitivos</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-destructive text-white rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-lg">Afirmação de Segurança Personalizada</h3>
                  <p className="text-sm text-muted-foreground">Reconecta com sua paz interior</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-success/10 border-success/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-success">
            ✅ Resultado Comprovado em 3 Minutos
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não importa se são 3h da madrugada ou meio dia. O Método CALMA# funciona 
            <span className="font-bold text-foreground"> mesmo quando você está no auge da ansiedade.</span>
          </p>
        </Card>
      </div>
    </section>
  );
};