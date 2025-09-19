import React from 'react';
import { Card } from './ui/card';

const ProofSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      location: "São Paulo, SP",
      problem: "Insônia há 8 anos",
      result: "Primeira noite tranquila em anos",
      quote: "Não acreditei quando funcionou logo na primeira noite. Depois de 8 anos tomando remédio para dormir, finalmente encontrei algo natural que funciona.",
      rating: 5
    },
    {
      name: "João Santos",
      age: "42 anos", 
      location: "Rio de Janeiro, RJ",
      problem: "Pensamentos acelerados",
      result: "Mente calma em 3 minutos",
      quote: "Trabalho em TI e minha mente nunca parava. O método é simples mas poderoso. Agora durmo como uma criança.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      location: "Belo Horizonte, MG", 
      problem: "Ansiedade noturna",
      result: "Sem mais madrugadas em claro",
      quote: "Era sempre às 3h da manhã que eu acordava com o coração disparado. Hoje isso é passado. Método incrível!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      age: "51 anos",
      location: "Porto Alegre, RS",
      problem: "Estresse do trabalho",
      result: "Sono reparador todos os dias",
      quote: "Empresário há 20 anos, nunca conseguia desligar. Este método mudou minha vida e meu negócio melhorou junto.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      age: "39 anos",
      location: "Fortaleza, CE",
      problem: "Preocupações familiares",
      result: "Paz mental instantânea",
      quote: "Mãe de 3 filhos, sempre preocupada. Agora tenho uma ferramenta que me dá paz na hora que preciso.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      age: "45 anos",
      location: "Salvador, BA",
      problem: "Insônia crônica",
      result: "8 horas de sono por noite",
      quote: "Médicos diziam que era normal na minha idade. Provou que estavam errados. Durmo 8h todas as noites agora.",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "1.847",
      label: "Brasileiros Testaram",
      description: "De todas as regiões do país"
    },
    {
      number: "94%",
      label: "Taxa de Sucesso",
      description: "Dormem na primeira noite"
    },
    {
      number: "3min",
      label: "Tempo Médio",
      description: "Para sentir o efeito"
    },
    {
      number: "100%",
      label: "Natural",
      description: "Sem medicamentos"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto container-responsive">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-responsive font-bold text-gray-800 mb-4 lg:mb-6">
            Mais de 1.800 Brasileiros
            <span className="block text-success">Já Transformaram Suas Noites</span>
          </h2>
          <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja os resultados reais de pessoas que estavam na mesma situação que você e descobriram a paz mental que tanto procuravam.
          </p>
        </div>

        {/* Estatísticas principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 lg:p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-smooth">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="font-semibold text-gray-800 text-sm lg:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-xs lg:text-sm text-gray-600">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mb-12 lg:mb-16">
          <h3 className="subheading-responsive font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Depoimentos Reais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 lg:p-8 bg-gray-50 border border-gray-200 hover:shadow-lg transition-smooth">
                {/* Estrelas */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg lg:text-xl">⭐</span>
                  ))}
                </div>

                {/* Depoimento */}
                <blockquote className="text-sm lg:text-base text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Informações da pessoa */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-center">
                    <p className="font-bold text-gray-800 text-sm lg:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600 mb-2">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    
                    {/* Problema e resultado */}
                    <div className="space-y-2">
                      <div className="bg-red-50 rounded-lg p-2">
                        <p className="text-xs font-medium text-red-700">
                          Problema: {testimonial.problem}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2">
                        <p className="text-xs font-medium text-green-700">
                          Resultado: {testimonial.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Seção de credibilidade */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 lg:p-10 border border-blue-200">
          <div className="text-center">
            <h3 className="subheading-responsive font-bold text-gray-800 mb-6 lg:mb-8">
              Por Que Tantas Pessoas Confiam no Método?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🔬</div>
                <p className="font-semibold text-gray-800 mb-2">Cientificamente Embasado</p>
                <p className="text-sm text-gray-600">Baseado em neurociência aplicada</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🇧🇷</div>
                <p className="font-semibold text-gray-800 mb-2">Feito para Brasileiros</p>
                <p className="text-sm text-gray-600">Adaptado à nossa realidade</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">⚡</div>
                <p className="font-semibold text-gray-800 mb-2">Resultados Rápidos</p>
                <p className="text-sm text-gray-600">Funciona em apenas 3 minutos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3">🌿</div>
                <p className="font-semibold text-gray-800 mb-2">100% Natural</p>
                <p className="text-sm text-gray-600">Sem medicamentos ou dependência</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-blue-300">
              <p className="text-responsive text-gray-700 font-medium">
                <span className="text-success font-bold">Mais de 94% de sucesso</span> porque o método ataca a causa raiz do problema, não apenas os sintomas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
export { ProofSection };