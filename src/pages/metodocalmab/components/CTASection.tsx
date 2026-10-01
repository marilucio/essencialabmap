const CTASection = () => {
  const handleCTAClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
    (window as any).fbq('track', 'InitiateCheckout', {
      content_name: 'Kit SOS',
      value: 44.00,  // Confirme que está 44, não 97
      currency: 'BRL'
    });
  }
  
  setTimeout(() => {
    window.location.href = 'https://pay.kiwify.com.br/KDSJr1d';
  }, 500);
};
  return (
    <section
      className="py-16 px-5 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white"
      id="comprar"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgência */}
        <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block mb-6 animate-pulse">
          ⚡ OFERTA ESPECIAL - ÚLTIMAS HORAS!
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transforme Suas Noites de Terror em Paz Absoluta
        </h2>

        {/* Preço */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <div className="mb-4">
            <span className="text-lg text-white/80">
              💡 Investimento de Lançamento
            </span>
          </div>
          <div className="text-5xl md:text-6xl font-bold text-yellow-300 mb-2">
            R$ 44,00
          </div>
          <p className="text-lg opacity-90">
            Pagamento único • Acesso imediato • Sem mensalidades
          </p>
          <p className="text-sm opacity-70 mt-2">
            (Valor promocional até 15/10/2025)
          </p>
        </div>

        {/* Botão Principal */}
        <button
          onClick={handleCTAClick}
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-2xl px-12 py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 mb-8"
        >
          🚀 QUERO MEU KIT AGORA
        </button>

        {/* Garantia */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <div className="text-3xl mr-3">🛡️</div>
            <h3 className="text-xl font-bold">
              Garantia de Satisfação - 14 Dias
            </h3>
          </div>
          <p className="text-sm opacity-90">
            Se você não ficar satisfeito com o conteúdo do protocolo, devolvemos
            100% do seu investimento em até 14 dias.
          </p>
        </div>

        {/* O que você vai receber */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">🎁 Você vai receber hoje:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">
                Protocolo CALMA# (Técnica de 5 passos)
              </span>
            </div>
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">
                Checklist 21 Dias (Rotina anti-ansiedade)
              </span>
            </div>
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">Guia Nutricional Anti-Ansiedade</span>
            </div>
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">4 Bônus Exclusivos (Valor R$ 197)</span>
            </div>
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">Acesso imediato por email</span>
            </div>
            <div className="flex items-start">
              <div className="text-green-400 mr-3 mt-1">✓</div>
              <span className="text-sm">Suporte via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Escassez */}
        <div className="mt-8">
          <p className="text-lg opacity-90">
            ⏰ Esta oferta especial termina em breve. Não perca a chance de
            transformar sua vida!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
