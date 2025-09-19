import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const GuaranteeSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://pay.kiwify.com.br/KDSJr1d', '_blank');
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            🛡️ <span className="text-success">Garantia Blindada</span> de 14 Dias
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Sua tranquilidade é nossa prioridade
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-success/5 border-success/20 shadow-card mb-6 md:mb-8">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="text-4xl md:text-6xl">🛡️</div>
            
            <h3 className="text-xl md:text-2xl font-bold text-success">
              Garantia Total ou Seu Dinheiro de Volta
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Se você não conseguir parar seus pensamentos acelerados nos primeiros 
              <span className="font-bold text-foreground"> 14 dias</span>, 
              devolvemos <span className="font-bold text-success">100% do seu dinheiro</span>.
              Sem perguntas, sem burocracia.
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 py-4 md:py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">📧</div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Suporte Direto</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Resposta em até 24h por email
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">💰</div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Reembolso Rápido</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Dinheiro de volta em até 7 dias
                </p>
              </div>

              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Sem Burocracia</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Processo 100% transparente
                </p>
              </div>
            </div>

            <div className="bg-success/10 p-4 md:p-6 rounded-lg">
              <p className="text-xs md:text-sm font-semibold text-success">
                💡 Por que oferecemos essa garantia?
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">
                Porque temos certeza absoluta que o Método CALMA# vai funcionar para você. 
                Em 6 meses de testes, apenas 6% das pessoas pediram reembolso.
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button 
            onClick={handlePurchaseClick}
            variant="success" 
            size="xl" 
            className="w-full md:w-auto text-sm md:text-base px-4 md:px-6 py-3 md:py-4"
          >
            💚 QUERO TESTAR SEM RISCO POR 14 DIAS - R$ 19,90
          </Button>
        </div>
      </div>
    </section>
  );
};