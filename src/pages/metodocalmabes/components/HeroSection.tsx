const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Escassez por quantidade com contador dinâmico */}
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 mb-4">
              <span className="text-red-300 text-sm font-semibold">⚡ OFERTA ESPECIAL DE LANZAMIENTO</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
              <div className="text-orange-300 font-bold text-lg mb-2">
                🔥 Últimas <span data-scarcity-counter className="text-yellow-300 font-black">47</span> unidades disponibles
              </div>
              <div className="text-sm text-gray-300 mb-3">
                con el Kit de Audios Neuroacústicos GRATIS
              </div>
              
              {/* Barra de progresso dinâmica */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <div 
                  className="scarcity-progress-bar bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: "47%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-400">
                <span data-scarcity-counter>47</span>/100 vendidos
              </div>
            </div>
          </div>

          {/* Headline principal suavizada */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            ¿Te Despiertas en la Madrugada con{" "}
            <span className="text-yellow-300">Ansiedad</span> y No Puedes{" "}
            <span className="text-blue-300">Volver a Dormir?</span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            Un protocolo natural desarrollado por naturópata para ayudar a calmar 
            crisis de ansiedad nocturnas y mejorar la calidad del sueño
          </p>

          {/* Imagem hero */}
          <div className="mb-8 lg:mb-12">
            <img
              src="/images/hero-3am-anxiety.jpg"
              alt="Persona despierta a las 3 AM con ansiedad"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* CTA Principal */}
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-md mx-auto block">
              🚀 QUIERO MI KIT COMPLETO AHORA
            </button>
            
            <p className="text-sm text-blue-200">
              <span data-price-localize data-base-brl="39.90">USD $5.99</span> • Pago único • Acceso inmediato • Sin mensualidades
            </p>
          </div>

          {/* Benefícios rápidos */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="font-semibold text-lg mb-2">Protocolo CALMA#</h3>
              <p className="text-blue-200 text-sm">Técnica científica para calmar crisis en 30 segundos</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎧</div>
              <h3 className="font-semibold text-lg mb-2">Audios Neuroacústicos</h3>
              <p className="text-blue-200 text-sm">5 audios con frecuencias específicas para el sueño</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Garantía 14 Días</h3>
              <p className="text-blue-200 text-sm">100% de tu dinero de vuelta si no funciona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;