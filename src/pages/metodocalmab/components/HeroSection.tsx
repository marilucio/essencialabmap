import { useState, useEffect } from "react";

const HeroSection = () => {
  const handleCTAClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
    (window as any).fbq('track', 'InitiateCheckout', {
      content_name: 'Kit SOS Ansiedade',
      value: 44.00,  // Confirme que está 44, não 97
      currency: 'BRL'
    });
  }
  
  setTimeout(() => {
    window.location.href = 'https://pay.kiwify.com.br/KDSJr1d';
  }, 500);
};
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-15T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge de Oferta */}
        <div className="inline-block bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold mb-6 animate-pulse">
          ⚡ OFERTA ESPECIAL ATÉ 15/10/2025
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Você Acorda de Madrugada com o Coração Disparado, Achando que Vai
          Morrer?
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8 opacity-95 font-light leading-relaxed">
          Um protocolo natural desenvolvido por naturopata para ajudar a acalmar
          crises de ansiedade noturnas e melhorar a qualidade do sono
        </p>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-lg mb-4 font-medium">
            ⏰ Esta é uma oferta de lançamento por tempo limitado:
          </p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-sm opacity-80">Dias</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-sm opacity-80">Horas</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-sm opacity-80">Min</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl md:text-3xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-sm opacity-80">Seg</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="inline-block bg-green-400 hover:bg-green-300 text-green-900 font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
        >
          🚀 QUERO O KIT COMPLETO AGORA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
