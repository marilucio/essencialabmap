const UnderstandingSection = () => {
  return (
    <section className="py-16 px-5 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Eu Entendo Exatamente Como Você Se Sente
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-center">
            <p>
              Você não está "ficando louco". Você não está "exagerando". E você definitivamente não está sozinho.
            </p>
            
            <p>
              <strong>Milhares de pessoas acordam toda madrugada no mesmo horário</strong> — muitas vezes às 3h da manhã — 
              com o coração acelerado, falta de ar, tremores e a certeza absoluta de que algo terrível está acontecendo.
            </p>
            
            <p>
              E o pior? <strong>Ninguém ao seu redor parece entender.</strong> Familiares dizem "calma, não é nada". 
              Médicos não encontram nada nos exames. Mas VOCÊ sente. E é real. É assustador. É exaustivo.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg mt-8">
              <p className="font-semibold text-indigo-800 text-xl">
                Mas existe uma saída. E ela não precisa envolver anos de terapia ou medicamentos pesados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;