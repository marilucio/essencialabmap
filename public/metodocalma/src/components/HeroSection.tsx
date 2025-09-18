import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import heroImageSrc from "@/assets/hero-3am-anxiety-BFHPhjDW.jpg";

export const HeroSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-calm flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Descoberta Acidental:</span> Como Parar 
              <span className="block">Pensamentos Acelerados</span>
              <span className="block text-primary">em 3 Minutos</span>
              <span className="block text-2xl md:text-3xl text-muted-foreground">
                (Mesmo às 3h da Madrugada)
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Método testado com <span className="text-primary font-bold">1.847 brasileiros</span> - 
              <span className="text-success font-bold"> 94% dormiram na primeira noite</span>
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handlePurchaseClick}
              variant="cta" 
              size="xl" 
              className="w-full md:w-auto animate-pulse"
            >
              🛌 Quero Minha Primeira Noite Tranquila por R$ 19,90
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                ✅ Acesso Imediato
              </span>
              <span className="flex items-center gap-2">
                ✅ Garantia de 14 dias
              </span>
              <span className="flex items-center gap-2">
                ✅ Método Brasileiro
              </span>
            </div>
          </div>

          <Card className="p-4 bg-warning/10 border-warning/20">
            <p className="text-sm">
              <span className="font-bold text-warning">⚠️ ATENÇÃO:</span> Apenas 
              <span className="font-bold"> 247 cópias restantes</span> neste mês com todos os bônus disponíveis. 
              Depois apenas o método será entregue.
            </p>
          </Card>
        </div>

        <div className="relative">
          <img 
            src={heroImageSrc} 
            alt="Pessoa acordada às 3h da manhã com pensamentos acelerados"
            className="rounded-2xl shadow-card w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};