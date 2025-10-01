import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Headphones, Download, Clock, Star, Volume2, BookOpen, Zap } from 'lucide-react';
import Footer from '../components/Footer';

function Oferta() {
  useEffect(() => {
    // Scroll para o topo quando a página carrega
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <main className="container mx-auto px-4 py-16">
        {/* Seção Principal da Oferta */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <Clock className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Espere! Uma Última Oferta Especial! ⏰
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Antes de você sair, temos algo incrível que pode transformar sua experiência com o Protocolo SOS Ansiedade
            </p>
          </div>
        </div>

        {/* Card Principal da Oferta */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-100 to-yellow-100 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Headphones className="w-16 h-16 text-orange-600" />
                  <Volume2 className="w-6 h-6 text-orange-500 absolute -top-1 -right-1 animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                Protocolo SOS Ansiedade em Áudio MP3 🎧
              </CardTitle>
              <CardDescription className="text-lg text-orange-700">
                A versão completa em áudio para você ouvir onde e quando quiser!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Transforme Qualquer Momento em Uma Oportunidade de Cura
                </h3>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-orange-200 shadow-inner">
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-lg text-gray-500 line-through">De R$ 57,00</p>
                      <p className="text-4xl font-bold text-green-600">R$ 27,00</p>
                      <p className="text-sm text-orange-600 font-semibold">DESCONTO DE 53%</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                        OFERTA LIMITADA
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Apenas nesta página!</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        O que você vai receber:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Protocolo completo em áudio MP3
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Narração profissional e clara
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Técnicas de respiração guiadas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          Exercícios práticos em áudio
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        Vantagens exclusivas:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          Ouça no carro, caminhando, relaxando
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          Acesso imediato após a compra
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          Download para todos os dispositivos
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          Formato compatível universalmente
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                      <Headphones className="w-5 h-5 text-purple-500" />
                      Por que escolher a versão em áudio?
                    </h4>
                    <p className="text-gray-700 text-sm">
                      <strong>Multitarefa:</strong> Absorva o conhecimento enquanto faz outras atividades • 
                      <strong> Relaxamento:</strong> A voz guiada potencializa o efeito terapêutico • 
                      <strong> Praticidade:</strong> Leve o protocolo para qualquer lugar
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="space-y-4">
                  <button 
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                    onClick={() => {
                      // Aqui você pode adicionar a lógica de compra
                      console.log('Compra do áudio iniciada');
                    }}
                  >
                    <Download className="w-6 h-6" />
                    SIM! Quero o Protocolo em Áudio por R$ 27,00
                  </button>
                  
                  <div className="text-center">
                    <button 
                      className="text-gray-500 hover:text-gray-700 underline text-sm transition-colors duration-200"
                      onClick={() => {
                        // Redireciona para fora da oferta
                        window.location.href = '/';
                      }}
                    >
                      Não, obrigado. Prefiro continuar apenas com a versão escrita.
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Benefícios Adicionais */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Imagine Poder Acessar o Protocolo a Qualquer Momento...
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">No Trânsito</h3>
                <p className="text-gray-600 text-sm">
                  Transforme o tempo no trânsito em momentos de aprendizado e relaxamento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Exercitando-se</h3>
                <p className="text-gray-600 text-sm">
                  Ouça durante caminhadas, corridas ou qualquer atividade física
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="pt-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Relaxando</h3>
                <p className="text-gray-600 text-sm">
                  Perfeito para momentos de descanso e meditação em casa
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Urgência */}
          <div className="text-center bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <Clock className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              ⚠️ Esta Oferta Expira Quando Você Sair Desta Página!
            </h3>
            <p className="text-red-700">
              Esta é sua única chance de ter o Protocolo SOS Ansiedade em áudio com 53% de desconto. 
              Não perca esta oportunidade única!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Oferta;