import React from 'react';
import { Card } from './ui/card';

const QuemSouSection = () => {
  return (
    <section className="quem-sou py-12 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-blue-100/30"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-200/20 to-transparent"></div>
      
      <div className="container mx-auto container-responsive relative z-10">
        {/* Foto do perfil */}
        <div className="text-center mb-8 lg:mb-12">
          <img 
            src="/images/foto_eu.png" 
            alt="Dr. Marilúcio Rocha" 
            className="foto-perfil w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover mx-auto mb-6 lg:mb-8 border-4 border-white shadow-lg"
          />
          
          <h2 className="heading-responsive font-bold text-gray-800 mb-2 lg:mb-4">
            Quem Criou Este Método?
          </h2>
          
          <h3 className="subheading-responsive font-bold text-blue-600 mb-2">
            Dr. Marilúcio Rocha - Naturopata Ortomolecular
          </h3>
          
          <p className="text-responsive text-gray-600 font-medium">
            15 anos transformando vidas com tratamentos naturais
          </p>
        </div>

        {/* História */}
        <div className="historia max-w-4xl mx-auto">
          <Card className="p-6 lg:p-10 bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
            <div className="space-y-6 lg:space-y-8 text-base lg:text-lg leading-relaxed text-gray-700">
              <p>
                Minha história com a saúde natural começou em 2004, quando meu pai teve um AVC. Ele não apresentava nenhum sintoma, e da noite para o dia, tudo mudou.
              </p>
              
              <p>
                Aquilo me deixou preocupado - afinal, se aconteceu com ele, poderia acontecer comigo também. Foi quando mergulhei nos estudos sobre como o corpo realmente funciona.
              </p>
              
              <p>
                Depois de um ano de estudo intenso, resolvi um problema de tosse crônica que tinha e decidi: <strong className="text-blue-600">vou ajudar outras pessoas com isso.</strong>
              </p>
              
              <p>
                A primeira pessoa a se beneficiar foi minha própria esposa, que sofria de urticária crônica há anos. Após 5 anos tomando remédios sem resultado, conseguimos reverter completamente o quadro dela com abordagem natural.
              </p>
              
              <p className="font-semibold text-blue-700">
                <strong>Estudar é bom demais e não consigo parar. Ajudar pessoas é melhor ainda - essa é minha missão!</strong>
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 lg:p-8 border-l-4 border-blue-400 mt-8">
                <h4 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4 lg:mb-6">
                  Como Nasceu o Método CALMA#
                </h4>
                
                <div className="space-y-4 lg:space-y-6">
                  <p>
                    Há alguns meses, algo inusitado aconteceu comigo: acordei às 3:34 da madrugada. Estranhei, mas voltei a dormir.
                  </p>
                  
                  <p>
                    No segundo dia, acordei exatamente às 3:34 novamente. Agora estava curioso.
                  </p>
                  
                  <p>
                    No terceiro dia, acordei às 3:44. <strong className="text-blue-700">Isso nunca tinha acontecido comigo.</strong>
                  </p>
                  
                  <p>
                    Sentei na cama e comecei a me questionar: "Estou ansioso? Cortisol alto?" Mas não fazia sentido - sou uma pessoa calma, sem estresse aparente.
                  </p>
                  
                  <p>
                    Foi quando me lembrei de um estudo que havia lido sobre uma técnica que estava testando com alguns pacientes. Muitos estavam gostando dos resultados.
                  </p>
                  
                  <p>
                    Naquele mesmo dia, ainda de madrugada, comecei a pesquisar mais profundamente. Descobri outras técnicas complementares, suplementos específicos, e percebi que <strong className="text-blue-700">havia um padrão que poderia ajudar milhares de pessoas.</strong>
                  </p>
                  
                  <p>
                    Uni tudo isso no que chamei de <strong className="text-blue-700">Método CALMA#</strong> - um protocolo completo que tenho testado com pacientes na minha prática clínica.
                  </p>
                  
                  <p>
                    <strong className="text-blue-700">Os resultados têm sido incríveis e rápidos.</strong> Foi então que percebi: preciso levar isso para o mundo. Preciso que mais pessoas tenham acesso a essa solução natural e eficaz.
                  </p>
                </div>
              </div>
              
              <div className="destaque bg-white rounded-xl p-6 lg:p-8 border-l-4 border-blue-500 shadow-md mt-8">
                <p className="font-semibold text-lg lg:text-xl text-blue-800">
                  Por isso criei este kit completo - para que você também possa ter o alívio que tantos dos meus pacientes já experimentaram.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuemSouSection;
export { QuemSouSection };