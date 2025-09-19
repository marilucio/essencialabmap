import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CountdownTimer } from "./CountdownTimer";
import peacefulImageSrc from "/images/peaceful-sleep-VdZartzL.jpg";

export const OfferSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  return (
    <section id="offer-section" className="py-20 px-4 bg-gradient-calm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎁 <span className="text-primary">Oferta Especial</span> - Apenas Este Mês
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para ter sua primeira noite tranquila
          </p>
        </div>

        <Card className="p-8 shadow-glow border-primary/20 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={peacefulImageSrc} 
                alt="Pessoa dormindo tranquilamente"
                className="rounded-xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Protocolo SOS Ansiedade Completo</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-success text-xl">✅</span>
                  <div>
                    <h4 className="font-semibold">Método CALMA# Completo</h4>
                    <p className="text-sm text-muted-foreground">5 técnicas que param pensamentos em 3 minutos</p>
                    <p className="text-sm text-success font-semibold">Valor: R$ 97,00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success text-xl">🎁</span>
                  <div>
                    <h4 className="font-semibold">BÔNUS: Acesso EssenciaLab Premium</h4>
                    <p className="text-sm text-muted-foreground">App que analisa sua saúde do sistema nervoso por meio da face e taxa de variabilidade cardíaca + Card de Saúde Preditiva (antecipa doenças até 10 anos). 30 dias gratuitos</p>
                    <p className="text-sm text-success font-semibold">Valor: R$ 283,00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success text-xl">🎁</span>
                  <div>
                    <h4 className="font-semibold">BÔNUS: Curso Resolva seu TDAH</h4>
                    <p className="text-sm text-muted-foreground">Curso completo com ebook para tratar TDAH naturalmente</p>
                    <p className="text-sm text-success font-semibold">Valor: R$ 39,90</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success text-xl">🎁</span>
                  <div>
                    <h4 className="font-semibold">BÔNUS: O Código da Saúde Plena</h4>
                    <p className="text-sm text-muted-foreground">Curso e ebook para unificar mente, corpo e espírito</p>
                    <p className="text-sm text-success font-semibold">Valor: R$ 57,00</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Valor Total: <span className="line-through">R$ 476,90</span></p>
                  <div className="text-4xl font-bold text-success">
                    Apenas R$ 19,90
                  </div>
                  <p className="text-sm text-muted-foreground">
                    96% de desconto - <span className="text-destructive font-semibold">Apenas neste mês com todos os bônus!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-6">
          <Button 
            onClick={handlePurchaseClick}
            variant="cta" 
            size="xl" 
            className="w-full md:w-auto text-xl py-6 px-12 animate-pulse"
          >
            🛌 QUERO MINHA PRIMEIRA NOITE TRANQUILA - R$ 19,90
          </Button>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              ✅ Acesso Imediato
            </span>
            <span className="flex items-center gap-2">
              ✅ Garantia Total de 14 Dias
            </span>
            <span className="flex items-center gap-2">
              ✅ Suporte Especializado
            </span>
          </div>

          <Card className="p-4 bg-warning/10 border-warning/20 inline-block">
            <p className="text-sm font-semibold">
              ⏰ <span className="text-warning">ÚLTIMAS 247 CÓPIAS</span> com todos os bônus disponíveis - <CountdownTimer />!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};