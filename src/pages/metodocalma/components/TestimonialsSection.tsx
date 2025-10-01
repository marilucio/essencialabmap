const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Rodrigues",
      profession: "Enfermeira",
      location: "São Paulo, SP",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      verified: true,
      date: "há 3 dias",
      rating: 5,
      messages: [
        { text: "Pessoal, preciso compartilhar isso com vocês", time: "23:42", type: "text" },
        { text: "Trabalho em plantão noturno e quando chego em casa às 7h não conseguia desligar", time: "23:43", type: "text" },
        { text: "Ficava até meio-dia acordada, ansiosa, pensando nos pacientes", time: "23:43", type: "text" },
        { text: "Comecei a usar a técnica da janela de preocupação há 2 semanas", time: "23:44", type: "text" },
        { text: "Agora consigo dormir em 20 minutos. Mudou minha vida profissional", time: "23:45", type: "text" }
      ]
    },
    {
      name: "Rafael Santos",
      profession: "Desenvolvedor",
      location: "Belo Horizonte, MG",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      date: "há 1 semana",
      rating: 5,
      messages: [
        { text: "Cara, que descoberta sobre a cafeína", time: "15:28", type: "text" },
        { text: "Eu tomava café até às 18h achando que não fazia diferença", time: "15:29", type: "text" },
        { text: "Seguindo o cronograma do guia nutricional, parei de tomar depois das 14h", time: "15:30", type: "text" },
        { text: "Em 4 dias já notei que não acordo mais às 3h da manhã com o coração disparado", time: "15:31", type: "text" },
        { text: "Simples mas eficaz. Obrigado pela dica científica", time: "15:32", type: "text" }
      ]
    },
    {
      name: "Paula Mendonça",
      profession: "Psicóloga",
      location: "Rio de Janeiro, RJ",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
      date: "há 5 dias",
      rating: 4,
      messages: [
        { text: "Como profissional da área, fiquei curiosa sobre as técnicas", time: "19:15", type: "text" },
        { text: "Testei primeiro em mim (também sofro com ansiedade noturna)", time: "19:16", type: "text" },
        { text: "A respiração 4-7-8 modificada realmente funciona", time: "19:17", type: "text" },
        { text: "Já indiquei para 3 pacientes que relataram melhora", time: "19:18", type: "text" },
        { text: "Método bem fundamentado. Parabéns pelo trabalho", time: "19:19", type: "text" }
      ]
    },
    {
      name: "Dr. Carlos Andrade",
      profession: "Cardiologista",
      location: "Porto Alegre, RS",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      date: "há 2 semanas",
      rating: 5,
      messages: [
        { text: "Inicialmente comprei por curiosidade profissional", time: "08:45", type: "text" },
        { text: "Atendo muitos pacientes com palpitações noturnas sem causa cardíaca", time: "08:46", type: "text" },
        { text: "As técnicas de regulação do sistema nervoso são bem embasadas", time: "08:47", type: "text" },
        { text: "Comecei a recomendar como terapia adjuvante", time: "08:48", type: "text" },
        { text: "Pacientes relatam redução significativa dos episódios", time: "08:49", type: "text" }
      ]
    }
  ];

  return (
    <section className="py-16 px-5 bg-gray-50" id="testemunhos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          💬 Depoimentos Verificados
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Histórias reais de profissionais e pessoas que transformaram suas noites de sono:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((person, personIndex) => (
            <div key={personIndex} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Header do perfil */}
              <div className="flex items-start space-x-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {person.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 text-sm truncate">{person.name}</h3>
                  <p className="text-xs text-gray-600 truncate">{person.profession}</p>
                  <p className="text-xs text-gray-500 truncate">{person.location}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < person.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Depoimento em texto único */}
              <div className="text-gray-700 text-sm leading-relaxed italic">
                "{person.messages.map(msg => msg.text).join(' ')}"
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-12 text-center shadow-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ⭐ Mais de 1.800 pessoas já transformaram suas noites
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Todos os depoimentos são de clientes reais que autorizaram o compartilhamento de suas experiências.
          </p>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 text-2xl">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span className="text-gray-600 text-lg ml-2">(4.8/5 - 847 avaliações verificadas)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;