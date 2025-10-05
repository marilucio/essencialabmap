const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Urgência com contador dinâmico */}
          <div className="bg-red-500 rounded-2xl p-6 mb-8 animate-pulse">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ⚠️ OFERTA POR TIEMPO LIMITADO
            </h3>
            <p className="text-lg mb-4">
              Solo las primeras 100 personas de habla hispana tendrán acceso 
              a este precio especial.
            </p>
            <div className="bg-white/20 rounded-xl p-4 inline-block">
              <div className="flex items-center justify-center gap-2 text-xl font-bold">
                <span>🔥 Quedan solo</span>
                <span 
                  data-scarcity-counter 
                  className="bg-white text-red-600 px-3 py-1 rounded-lg text-2xl font-black"
                >
                  47
                </span>
                <span>plazas disponibles</span>
              </div>
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Transforma Tu Ansiedad{" "}
            <span className="text-yellow-300">Hoy Mismo</span>
          </h2>

          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            No esperes más para recuperar tu paz mental y calidad de vida
          </p>

          {/* Preço */}
          <div className="bg-white/10 rounded-3xl p-8 mb-8">
            <div className="mb-6">
              <div className="text-lg opacity-80 line-through">
                Valor normal: $93 USD
              </div>
              <div className="text-4xl lg:text-6xl font-bold text-yellow-300 mb-2">
                <span data-price-localize="39.90">$5.99 USD</span>
              </div>
              <div className="text-lg opacity-90">
                Precio especial para Latinoamérica y España
              </div>
            </div>

            {/* Garantia reforçada */}
            <div className="bg-yellow-400 text-gray-800 rounded-2xl p-6 mb-6">
              <h4 className="text-xl lg:text-2xl font-bold mb-4">
                🛡️ GARANTÍA BLINDADA DE 30 DÍAS
              </h4>
              <p className="text-lg leading-relaxed">
                Si en 30 días no sientes una mejora significativa en tu ansiedad, 
                te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. 
                <strong> El riesgo es completamente nuestro.</strong>
              </p>
            </div>

            {/* O que está incluído */}
            <div className="text-left mb-8">
              <h4 className="text-xl font-bold mb-4 text-center">
                ✅ Todo lo que recibes HOY:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  Kit SOS Ansiedad Completo
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  5 Audios Neuroacústicos ($47)
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  Hojas de Trabajo ($19)
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  Guía del Ciclo del Pánico ($15)
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  Técnicas Rápidas de Alivio ($12)
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  Acceso inmediato 24/7
                </div>
              </div>
            </div>

            {/* Botão principal */}
            <a href="https://pay.hotmart.com/B102258373B" target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl lg:text-2xl py-6 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
                🔥 QUIERO ACCESO COMPLETO AHORA - <span data-price-localize>R$ 39,90</span>
              </button>
            </a>

            {/* Segurança */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm opacity-80">
              <div className="flex items-center">
                <span className="mr-2">🔒</span>
                Compra 100% Segura
              </div>
              <div className="flex items-center">
                <span className="mr-2">⚡</span>
                Acceso Inmediato
              </div>
              <div className="flex items-center">
                <span className="mr-2">💳</span>
                Todos los Medios de Pago
              </div>
            </div>
          </div>

          {/* Escassez social com contadores dinâmicos */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold mb-4">
              👥 Personas que compraron en las últimas 24 horas:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center gap-1">
                🇪🇸 Madrid: <span data-scarcity-counter className="font-bold text-yellow-300">23</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                🇲🇽 CDMX: <span data-scarcity-counter className="font-bold text-yellow-300">31</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                🇦🇷 Buenos Aires: <span data-scarcity-counter className="font-bold text-yellow-300">18</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                🇨🇴 Bogotá: <span data-scarcity-counter className="font-bold text-yellow-300">15</span>
              </div>
            </div>
          </div>

          {/* Último empurrão */}
          <div className="text-center">
            <p className="text-lg mb-4">
              <strong>¿Cuánto vale tu paz mental?</strong>
            </p>
            <p className="text-lg opacity-90 mb-6">
              Una sola consulta con un psicólogo cuesta más que todo este método completo. 
              Y aquí tienes garantía de resultados.
            </p>
            
            <div className="bg-red-500 rounded-2xl p-4 mb-6">
              <p className="font-bold">
                ⏰ Esta oferta expira en: <span className="text-yellow-300">23:47:32</span>
              </p>
            </div>

            <a href="https://pay.hotmart.com/B102258373B" target="_blank" rel="noopener noreferrer" className="block">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 font-bold text-xl py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            ⚡ ÚLTIMO CHANCE - COMPRAR AHORA
          </button>
        </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;