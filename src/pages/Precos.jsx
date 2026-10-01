import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Star, ArrowRight, Zap, TrendingUp, Award, Shield, Clock, Users, DollarSign, Calendar, CreditCard, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Precos() {
  const [billingCycle, setBillingCycle] = useState('annual');

  const scrollToForm = () => {
    window.location.href = '/#lead-capture-form';
  };

  const openDemoModal = () => {
    window.location.href = '/#';
  };

  const scrollToScience = () => {
    window.location.href = '/#base-cientifica';
  };

  const benefits = [
    {
      icon: Zap,
      title: "Economia de Tempo Massiva",
      description: "Substitua 2-3 horas de análise de exames por 30 segundos de análise facial. Atenda 3x mais pacientes no mesmo tempo.",
      value: "Economize 15+ horas por semana"
    },
    {
      icon: TrendingUp,
      title: "Aumento de Receita Comprovado",
      description: "Cobre consultas premium com tecnologia diferenciada. Nossos usuários reportam aumento médio de R$ 300 por consulta.",
      value: "ROI de 310% no primeiro mês"
    },
    {
      icon: Award,
      title: "Diferenciação Competitiva",
      description: "Seja o único profissional na sua região com análise metabólica por IA. Destaque-se da concorrência.",
      value: "Vantagem competitiva única"
    },
    {
      icon: Shield,
      title: "Credibilidade Científica",
      description: "Baseie suas recomendações em 728+ estudos científicos. Aumente a confiança dos pacientes em 91%.",
      value: "Precisão científica validada"
    },
    {
      icon: Users,
      title: "Satisfação dos Pacientes",
      description: "Relatórios visuais impressionantes e protocolos personalizados aumentam a satisfação e fidelização.",
      value: "94% de satisfação dos usuários"
    },
    {
      icon: Clock,
      title: "Resultados Imediatos",
      description: "Veja resultados desde o primeiro dia. Não precisa esperar semanas para ver o impacto na sua prática.",
      value: "Resultados em 24 horas"
    }
  ];

  const plans = [
    {
      name: "Assinatura Anual",
      subtitle: "Menos de 1 café por dia",
      price: "51,40",
      originalPrice: "97,00",
      period: "por mês",
      yearlyPrice: "497,00",
      yearlyOriginal: "1.164,00",
      savings: "57% de desconto",
      popular: true,
      features: [
        "Análises faciais ilimitadas",
        "Relatórios SOGI completos",
        "Protocolos personalizados",
        "Biblioteca de artigos científicos",
        "Todos os cursos disponíveis",
        "Receitas funcionais",
        "Programa de jejum intermitente",
        "Análise facial 3D",
        "Saúde preditiva/preventiva",
        "Suporte técnico prioritário",
        "Atualizações automáticas",
        "Garantia de satisfação"
      ]
    },
    {
      name: "Assinatura Vitalícia",
      subtitle: "Investimento único",
      price: "1.347,00",
      period: "pagamento único",
      installments: "12x de R$ 139,31",
      savings: "Economia de R$ 2.000+ ao longo do tempo",
      premium: true,
      features: [
        "Tudo da assinatura anual",
        "Acesso vitalício garantido",
        "Todas as futuras atualizações",
        "Novos recursos inclusos",
        "Suporte vitalício",
        "Sem mensalidades para sempre",
        "Melhor custo-benefício",
        "Investimento único",
        "ROI infinito a longo prazo"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ana Paula Silva",
      role: "Nutricionista",
      content: "Em 30 dias, aumentei minha receita em 40% oferecendo consultas diferenciadas. O MAP me posicionou como referência na região.",
      revenue: "+R$ 4.800/mês"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Nutrólogo",
      content: "O investimento se pagou na primeira semana. Agora consigo atender o dobro de pacientes com muito mais precisão.",
      revenue: "+R$ 7.200/mês"
    },
    {
      name: "Dra. Mariana Costa",
      role: "Biomédica",
      content: "Meus pacientes ficam impressionados com os relatórios. A taxa de retorno aumentou 85% desde que comecei a usar o MAP.",
      revenue: "+R$ 3.600/mês"
    }
  ];

  const faqs = [
    {
      question: "Por que o MAP vale esse investimento?",
      answer: "O MAP não é apenas uma ferramenta, é um multiplicador de resultados. Com ele, você economiza horas de trabalho, atende mais pacientes, cobra mais por consulta e se diferencia da concorrência. O ROI médio é de 310% no primeiro mês."
    },
    {
      question: "Como posso justificar esse valor para meus pacientes?",
      answer: "Seus pacientes pagarão mais porque receberão muito mais valor: análise científica precisa, relatórios profissionais, protocolos personalizados e acompanhamento de ponta. É tecnologia que impressiona e gera resultados."
    },
    {
      question: "E se eu não conseguir aumentar minha receita?",
      answer: "Oferecemos garantia de satisfação. Se em 30 dias você não ver resultados positivos na sua prática, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia."
    },
    {
      question: "Qual a diferença entre os planos?",
      answer: "Ambos os planos oferecem acesso completo a todas as funcionalidades. A diferença está no período: anual com desconto significativo ou vitalício para quem quer fazer um investimento único e ter acesso para sempre."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
            ✓ ROI de 310% no Primeiro Mês
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Transforme Seu Investimento
            </span>
            <br />
            em Resultados Extraordinários
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Descubra como profissionais de saúde estão multiplicando sua receita e 
            se diferenciando no mercado com o MAP. Menos de R$ 2 por dia para 
            revolucionar sua prática profissional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">+R$ 300</div>
              <div className="text-gray-600">Aumento médio por consulta</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600">Mais eficiência no atendimento</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">310%</div>
              <div className="text-gray-600">ROI médio no primeiro mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Por Que o MAP é o Melhor Investimento da Sua Carreira?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não é apenas uma ferramenta, é um multiplicador de resultados que transforma 
              sua prática profissional e acelera seu crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{benefit.value}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos de Preços */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Escolha Seu Plano de Transformação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambos os planos incluem acesso completo a todas as funcionalidades, 
              cursos e atualizações. A diferença está apenas no período de pagamento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-blue-500 scale-105' : 
                  plan.premium ? 'border-2 border-purple-500' : 'border-2 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Melhor Custo-Benefício
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.subtitle}</CardDescription>
                  
                  <div className="py-6">
                    {plan.yearlyPrice ? (
                      <div>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-gray-800">R$ {plan.price}</span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          De R$ {plan.originalPrice}/mês
                        </div>
                        <div className="mt-2 p-2 bg-green-100 rounded-lg">
                          <div className="text-lg font-bold text-green-800">
                            R$ {plan.yearlyPrice} à vista
                          </div>
                          <div className="text-sm text-green-600 line-through">
                            De R$ {plan.yearlyOriginal}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-gray-800">R$ {plan.price}</span>
                        </div>
                        <div className="text-gray-600">{plan.period}</div>
                        {plan.installments && (
                          <div className="mt-2 text-sm text-gray-600">
                            ou {plan.installments}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <Badge className="mt-4 bg-green-100 text-green-800 border-green-200">
                      {plan.savings}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-3 text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white'
                        : plan.premium
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                    onClick={scrollToForm}
                  >
                    Começar Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    ✓ 7 dias grátis • ✓ Sem compromisso • ✓ Cancele quando quiser
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Garantia de Resultados ou Seu Dinheiro de Volta
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos tão confiantes nos resultados do MAP que oferecemos garantia total. 
                Se em 30 dias você não ver melhoria na sua prática, devolvemos 100% do seu investimento.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Garantia de 30 dias</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Reembolso total</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span>Sem burocracia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Sobre Investimento</h2>
            <p className="text-xl text-gray-600">
              Esclarecemos suas dúvidas sobre o valor e retorno do MAP
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não Deixe Essa Oportunidade Passar
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Enquanto você pensa, seus concorrentes estão se diferenciando. 
            Comece hoje mesmo e veja os resultados em 24 horas.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">🚀 OFERTA ESPECIAL - TRIAL GRATUITO</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {[
                "7 dias de acesso completo GRÁTIS",
                "Sem dados de cartão necessários",
                "Todas as funcionalidades liberadas",
                "Suporte técnico incluído",
                "Garantia de satisfação total",
                "Cancele quando quiser"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToForm}
          >
            Começar Trial Gratuito Agora
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>

          <p className="text-sm mt-6 opacity-75">
            Mais de 2.347 profissionais já transformaram suas práticas • Seja o próximo
          </p>
        </div>
      </section>

      <Footer 
        onOpenDemo={openDemoModal}
        onScrollToForm={scrollToForm}
        onScrollToScience={scrollToScience}
      />
    </div>
  );
}
