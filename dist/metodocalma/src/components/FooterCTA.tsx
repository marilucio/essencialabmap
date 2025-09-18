import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CountdownTimer } from "./CountdownTimer";

export const FooterCTA = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-hero text-white text-center shadow-glow">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              🌙 Sua Primeira Noite Tranquila Te Espera
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Não deixe mais uma noite passar acordado às 3h da madrugada. 
              <span className="font-bold"> O Método CALMA# pode mudar sua vida hoje mesmo.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="font-bold text-lg mb-2">Acesso Imediato</h3>
                <p className="text-sm opacity-80">
                  Receba o material agora e use ainda hoje
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="font-bold text-lg mb-2">Garantia Total</h3>
                <p className="text-sm opacity-80">
                  14 dias para testar sem risco
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold">
                Apenas R$ 19,90
              </div>
              
              <Button 
                onClick={handlePurchaseClick}
                variant="secondary" 
                size="xl" 
                className="w-full md:w-auto bg-white text-primary hover:bg-gray-100 font-bold text-xl py-6 px-12"
              >
                🛌 SIM! QUERO DORMIR TRANQUILO HOJE MESMO
              </Button>

              <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
                <span>✅ Download Imediato</span>
                <span>✅ Garantia 14 Dias</span>
                <span>✅ Suporte Incluído</span>
              </div>
            </div>

            <Card className="p-4 bg-warning/20 border-warning/30 inline-block">
              <p className="text-sm font-semibold text-warning">
                ⚠️ OFERTA LIMITADA: Apenas 247 cópias restantes neste mês com todos os bônus - <CountdownTimer />!
              </p>
            </Card>
          </div>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            © 2024 EssenciaLab - Naturopatia Ortomolecular | 
            <a href="#" className="hover:underline ml-1">Política de Privacidade</a> | 
            <a href="#" className="hover:underline ml-1">Termos de Uso</a>
          </p>
          <p className="text-xs mt-2">
            Este produto não substitui acompanhamento médico profissional.
          </p>
        </div>
      </div>
    </section>
  );
};