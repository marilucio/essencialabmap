import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Mail, Star, Clock, Award, Eye, Scan } from 'lucide-react';
import Footer from '../components/Footer';

function Obrigado() {
  useEffect(() => {
    // Meta Pixel Code
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    if (typeof window.fbq !== 'undefined') {
      window.fbq('init', '1289139885831063');
      window.fbq('track', 'PageView');
    }

    // Configuração do GTM
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'purchase', {
        transaction_id: new URLSearchParams(window.location.search).get('transaction_id'),
        value: parseFloat(new URLSearchParams(window.location.search).get('value') || '97.00'),
        currency: 'BRL',
        items: [{
          item_id: 'protocolo-sos-ansiedade',
          item_name: 'Protocolo SOS Ansiedade',
          category: 'Saúde Mental',
          quantity: 1,
          price: parseFloat(new URLSearchParams(window.location.search).get('value') || '97.00')
        }]
      });
    }

    // Verifica se o pixel do Facebook já foi carregado
    if (typeof window.fbq !== 'undefined') {
      // Função para verificar status de pagamento e disparar Purchase
      const checkPaymentStatus = () => {
        // Obtém parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');
        const transactionId = urlParams.get('transaction_id');
        const value = urlParams.get('value') || '97.00'; // Valor padrão do Protocolo SOS Ansiedade
        
        // Dispara Purchase apenas se o status for "aprovado"
        if (status === 'aprovado' || status === 'approved') {
          window.fbq('track', 'Purchase', {
            value: parseFloat(value),
            currency: 'BRL',
            transaction_id: transactionId,
            content_name: 'Protocolo SOS Ansiedade',
            content_category: 'Saúde Mental',
            content_type: 'product'
          });
          
          console.log('Purchase event fired for approved transaction:', transactionId);
        }
      };
      
      // Executa a verificação após um pequeno delay para garantir que a página carregou
      setTimeout(checkPaymentStatus, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-16">
        {/* Seção Principal de Confirmação */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Parabéns! Sua compra foi realizada com sucesso! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Você acabou de dar o primeiro passo para transformar sua relação com a ansiedade
            </p>
          </div>

          {/* Card de Confirmação */}
          <Card className="mb-12 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-green-800">
                <Mail className="w-6 h-6" />
                Acesso ao Protocolo SOS Ansiedade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-lg mb-4">
                <strong>Um email com todos os dados de acesso ao produto acabou de ser enviado para você!</strong>
              </p>
              <p className="text-green-600">
                Verifique sua caixa de entrada (e também a pasta de spam) nos próximos minutos. 
                O email contém seu login, senha e instruções completas para acessar o Protocolo SOS Ansiedade.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Upsell */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-orange-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                Oferta Especial Exclusiva! 🔥
              </CardTitle>
              <CardDescription className="text-lg text-orange-700">
                Apenas para quem acabou de adquirir o Protocolo SOS Ansiedade
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Consulta Online Personalizada com o Naturólogo Criador do Método CALMA
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Potencialize seus resultados com uma consulta individual para personalizar ainda mais 
                  sua experiência e acelerar sua jornada de transformação.
                </p>
                
                <div className="bg-white rounded-lg p-6 mb-6 border border-orange-200">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 line-through">De R$ 450,00</p>
                      <p className="text-3xl font-bold text-green-600">R$ 350,00</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-orange-600">INCLUI RETORNO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-orange-600 mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Oferta válida apenas nesta página!</span>
                  </div>
                  
                  <ul className="text-left text-gray-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Consulta online de 60 minutos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Análise personalizada do seu caso
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      Análise Iridológica completa
                    </li>
                    <li className="flex items-center gap-2">
                      <Scan className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      Análise Facial 3D avançada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Protocolo customizado para você
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Consulta de retorno incluída
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      Suporte direto com o criador do método
                    </li>
                  </ul>
                </div>

                {/* Botão de Upsell do Kiwify */}
                <div style={{textAlign:"center"}} id="kiwify-upsell-vvz0Zp6" data-upsell-url="" data-downsell-url="https://essencialab.site/oferta">
                  <button 
                    id="kiwify-upsell-trigger-vvz0Zp6" 
                    style={{
                      backgroundColor:"#1CA085",
                      padding:"16px 24px",
                      cursor:"pointer",
                      color:"#FFFFFF",
                      fontWeight:"600",
                      borderRadius:"8px",
                      border:"1px solid #1CA085",
                      fontSize:"20px",
                      width:"100%",
                      maxWidth:"400px",
                      transition:"all 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#159A7A"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#1CA085"}
                  >
                    ✨ Sim, eu aceito essa oferta especial!
                  </button>
                  <div 
                    id="kiwify-upsell-cancel-trigger-vvz0Zp6" 
                    style={{
                      marginTop:"1.5rem",
                      cursor:"pointer",
                      fontSize:"16px",
                      textDecoration:"underline",
                      fontFamily:"sans-serif",
                      color:"#666"
                    }}
                  >
                    Não, eu gostaria de recusar essa oferta
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Próximos Passos */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Passos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">1. Verifique seu Email</h3>
                <p className="text-sm text-gray-600">
                  Acesse sua caixa de entrada para encontrar os dados de login
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">2. Acesse o Protocolo</h3>
                <p className="text-sm text-gray-600">
                  Faça login na plataforma e comece sua jornada
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">3. Transforme sua Vida</h3>
                <p className="text-sm text-gray-600">
                  Siga o protocolo e veja os resultados acontecerem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Script do Kiwify Upsell */}
      <script src="https://snippets.kiwify.com/upsell/upsell.min.js"></script>
    </div>
  );
}

export default Obrigado;