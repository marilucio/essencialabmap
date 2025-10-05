const UnderstandingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Entiendo Perfectamente{" "}
              <span className="text-blue-600">Lo Que Estás Viviendo</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Porque yo también pasé por esto. Y sé exactamente cómo se siente esa desesperación 
              de las 3 de la madrugada.
            </p>
          </div>

          {/* História pessoal */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl lg:text-5xl">
                  🌙
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  "Yo También Viví Esas Noches Interminables"
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Durante años, experimenté exactamente lo mismo que tú: despertarme a las 3 AM 
                  con el corazón acelerado, la mente llena de preocupaciones y la imposibilidad 
                  de volver a dormir. Como naturópata, sabía que tenía que existir una solución 
                  natural y efectiva.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Después de estudiar técnicas de CBT-I, mindfulness y neuroacústica, desarrollé 
                  el Protocolo CALMA# que no solo cambió mi vida, sino la de cientos de pacientes 
                  en Brasil. Ahora quiero compartirlo contigo.
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas e validação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-800 font-semibold mb-2">Años de Experiencia</div>
              <div className="text-gray-600 text-sm">Como naturópata especializado en ansiedad y sueño</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-800 font-semibold mb-2">Pacientes Ayudados</div>
              <div className="text-gray-600 text-sm">Con el protocolo CALMA# en Brasil</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-800 font-semibold mb-2">Tasa de Éxito</div>
              <div className="text-gray-600 text-sm">Mejoras significativas en las primeras 2 semanas</div>
            </div>
          </div>

          {/* Diferencial científico */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              No Es Solo Otro "Método de Relajación"
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
              El Protocolo CALMA# combina técnicas científicamente validadas de Terapia 
              Cognitivo-Conductual para el Insomnio (CBT-I), mindfulness clínico y 
              neuroacústica terapéutica. Es un sistema completo, no solo consejos generales.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🧠</div>
                <div className="font-semibold">Base Científica</div>
                <div className="text-sm opacity-80">CBT-I + Mindfulness</div>
              </div>
              <div>
                <div className="text-3xl mb-3">🎧</div>
                <div className="font-semibold">Neuroacústica</div>
                <div className="text-sm opacity-80">Frecuencias específicas</div>
              </div>
              <div>
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-semibold">Resultados Rápidos</div>
                <div className="text-sm opacity-80">Desde la primera noche</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;