import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Monitor, 
  Smartphone, 
  Shield, 
  Clock, 
  CheckCircle, 
  User, 
  CreditCard, 
  FileText, 
  Settings, 
  Zap,
  Heart,
  Brain,
  Apple,
  Calendar,
  Download,
  Play,
  Lock,
  Globe
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CentralDeAjuda() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scrollToForm = () => {
    window.location.href = '/#lead-capture-form';
  };

  const openDemoModal = () => {
    window.location.href = '/#';
  };

  const scrollToScience = () => {
    window.location.href = '/#base-cientifica';
  };

  const categories = [
    { id: 'all', name: 'Todas', icon: HelpCircle },
    { id: 'getting-started', name: 'Primeiros Passos', icon: Play },
    { id: 'technical', name: 'Técnico', icon: Settings },
    { id: 'billing', name: 'Pagamento', icon: CreditCard },
    { id: 'features', name: 'Funcionalidades', icon: Zap },
    { id: 'account', name: 'Conta', icon: User }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'Como funciona o trial gratuito de 7 dias?',
      answer: 'O trial gratuito oferece acesso completo a todas as funcionalidades do MAP por 7 dias, incluindo: análise facial 3D, saúde preditiva/preventiva, biblioteca de artigos, cursos, receitas funcionais e programa de jejum intermitente. Não é necessário inserir dados de cartão de crédito para começar. Você pode cancelar a qualquer momento durante o período de teste.'
    },
    {
      category: 'getting-started',
      question: 'Preciso instalar algum software?',
      answer: 'Não! O MAP é um aplicativo web que funciona diretamente no seu navegador. É compatível com desktop e celular, sendo totalmente funcional, organizado e intuitivo. Basta acessar através do link que enviaremos por email após o cadastro.'
    },
    {
      category: 'getting-started',
      question: 'Como faço meu primeiro cadastro?',
      answer: 'O cadastro é obrigatório e inclui confirmação por email para garantir a segurança. Você precisará fornecer seu email profissional e especialidade. Após a confirmação, terá acesso imediato a todas as funcionalidades por 7 dias gratuitamente.'
    },
    {
      category: 'technical',
      question: 'O MAP funciona em celular e desktop?',
      answer: 'Sim! O MAP é um aplicativo web responsivo que funciona perfeitamente em ambos os dispositivos. A interface se adapta automaticamente ao tamanho da tela, mantendo todas as funcionalidades disponíveis tanto no desktop quanto no celular.'
    },
    {
      category: 'technical',
      question: 'Quais navegadores são suportados?',
      answer: 'O MAP funciona em todos os navegadores modernos: Chrome, Firefox, Safari, Edge. Recomendamos manter seu navegador sempre atualizado para a melhor experiência. A análise facial funciona através da câmera do dispositivo usando tecnologia web padrão.'
    },
    {
      category: 'technical',
      question: 'Como funciona a análise facial?',
      answer: 'A análise facial utiliza tecnologia de pletismografia (rPPG + MTC) e observação de microexpressões faciais invisíveis ao olho humano. O processo é não-invasivo, usa apenas a câmera do celular/computador e não requer equipamentos especiais. Nenhuma imagem é armazenada - o processamento é feito em tempo real.'
    },
    {
      category: 'features',
      question: 'O que está incluído no trial gratuito?',
      answer: 'O trial de 7 dias inclui acesso completo a: análise facial 3D, saúde preditiva/preventiva, biblioteca de artigos científicos, todos os cursos disponíveis, receitas funcionais, programa de jejum intermitente, relatórios SOGI, protocolos personalizados e suporte técnico.'
    },
    {
      category: 'features',
      question: 'O que é o relatório SOGI?',
      answer: 'SOGI é a análise dos 4 pilares metabólicos: Submetilação, Oxidação, Glicação e Inflamação. O relatório é gerado automaticamente após a análise facial e fornece insights precisos sobre o estado metabólico do paciente, baseado em evidências científicas.'
    },
    {
      category: 'features',
      question: 'Como funcionam os protocolos personalizados?',
      answer: 'Com base nos resultados da análise SOGI, o MAP gera automaticamente protocolos de tratamento personalizados, incluindo suplementação direcionada, ajustes nutricionais e recomendações de acompanhamento. Os protocolos são baseados em evidências científicas e podem ser ajustados conforme a evolução do paciente.'
    },
    {
      category: 'billing',
      question: 'Preciso colocar dados do cartão para o trial?',
      answer: 'Não! O trial gratuito de 7 dias não requer nenhum dado de cartão de crédito. Você pode testar todas as funcionalidades sem compromisso. Apenas após decidir continuar é que será necessário escolher um plano de pagamento.'
    },
    {
      category: 'billing',
      question: 'Quais são os planos disponíveis?',
      answer: 'Oferecemos dois planos: Assinatura Anual por R$ 51,40/mês (R$ 497 à vista) e Assinatura Vitalícia por R$ 1.347 à vista (ou 12x de R$ 139,31). Ambos incluem acesso completo a todas as funcionalidades e cursos.'
    },
    {
      category: 'billing',
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Você pode cancelar sua assinatura a qualquer momento sem burocracia. Para assinatura anual, o cancelamento impede a renovação automática. Para assinatura vitalícia, o acesso é mantido permanentemente.'
    },
    {
      category: 'account',
      question: 'Como altero meus dados de cadastro?',
      answer: 'Você pode alterar seus dados diretamente na área de configurações da sua conta dentro da plataforma. Isso inclui email, especialidade, dados de contato e preferências de notificação.'
    },
    {
      category: 'account',
      question: 'Esqueci minha senha, como recuperar?',
      answer: 'Na tela de login, clique em "Esqueci minha senha" e siga as instruções enviadas para seu email cadastrado. O processo é seguro e você receberá um link para criar uma nova senha.'
    },
    {
      category: 'technical',
      question: 'Os dados dos pacientes são seguros?',
      answer: 'Absolutamente! Seguimos rigorosamente as leis LGPD (Brasil) e HIPAA (EUA). Nenhuma imagem facial é armazenada - o processamento é feito em tempo real e os dados são descartados imediatamente. Apenas os resultados metabólicos são mantidos, sempre com consentimento explícito.'
    },
    {
      category: 'features',
      question: 'Quantas análises posso fazer?',
      answer: 'Não há limite! Tanto no trial quanto nos planos pagos, você pode realizar análises faciais ilimitadas. Isso permite acompanhar a evolução dos pacientes ao longo do tempo sem restrições.'
    },
    {
      category: 'technical',
      question: 'Preciso de internet para usar o MAP?',
      answer: 'Sim, o MAP requer conexão com internet para funcionar, pois o processamento da análise facial é feito em nossos servidores seguros. Isso garante a precisão dos resultados e a segurança dos dados.'
    },
    {
      category: 'features',
      question: 'O MAP substitui exames laboratoriais?',
      answer: 'O MAP é uma ferramenta complementar que oferece insights metabólicos através da análise facial. Não substitui exames laboratoriais, mas fornece informações valiosas para triagem e acompanhamento, ajudando a direcionar investigações mais específicas.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Saúde Preditiva/Preventiva',
      description: 'Sistema completo de análise preventiva para identificar riscos antes que se tornem problemas.'
    },
    {
      icon: Brain,
      title: 'Análise Facial 3D',
      description: 'Tecnologia avançada de análise facial com precisão de 91% baseada em estudos científicos.'
    },
    {
      icon: FileText,
      title: 'Biblioteca de Artigos',
      description: 'Acesso a centenas de artigos científicos atualizados sobre saúde metabólica e funcional.'
    },
    {
      icon: Download,
      title: 'Cursos Completos',
      description: 'Todos os cursos disponíveis na plataforma para aprimorar seus conhecimentos profissionais.'
    },
    {
      icon: Apple,
      title: 'Receitas Funcionais',
      description: 'Biblioteca completa de receitas funcionais para complementar os protocolos de tratamento.'
    },
    {
      icon: Calendar,
      title: 'Programa de Jejum Intermitente',
      description: 'Protocolos estruturados de jejum intermitente baseados em evidências científicas.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6">
            ✓ Suporte Especializado 24/7
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Central de Ajuda
            </span>
            <br />
            Sistema MAP
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Encontre respostas para suas dúvidas sobre o MAP, desde os primeiros passos 
            até funcionalidades avançadas. Nossa equipe está aqui para ajudar você a 
            aproveitar ao máximo a plataforma.
          </p>
        </div>
      </section>

      {/* Busca e Filtros */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' 
                    : 'hover:border-blue-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios do Trial */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O Que Você Tem Acesso no Trial Gratuito de 7 Dias
            </h2>
            <p className="text-xl text-gray-600">
              Teste todas as funcionalidades sem compromisso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold"
              onClick={scrollToForm}
            >
              Começar Trial Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'pergunta encontrada' : 'perguntas encontradas'}
            </p>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 text-left">
                        {faq.question}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {categories.find(cat => cat.id === faq.category)?.name}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-11">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-500">
                Tente usar outros termos de busca ou entre em contato conosco
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ainda Precisa de Ajuda?</h2>
            <p className="text-xl text-gray-600">
              Nossa equipe especializada está pronta para atender você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription>Resposta em até 2 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Para dúvidas técnicas, suporte ou questões sobre sua conta
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('mailto:suporte@essencialab.site', '_blank')}
                >
                  suporte@essencialab.site
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Telefone</CardTitle>
                <CardDescription>Atendimento direto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Para suporte imediato e orientações personalizadas
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('tel:+5543991343807', '_blank')}
                >
                  (43) 99134-3807
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
                <CardDescription>Chat em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Para conversas rápidas e esclarecimentos instantâneos
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5543991343807?text=Olá! Preciso de ajuda com o MAP.', '_blank')}
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🕐 Horário de Atendimento
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Suporte Técnico</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                  <p className="text-gray-600">Email: 24/7 com resposta em até 2h</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Atendimento Comercial</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                  <p className="text-gray-600">Sábado: 8h às 16h</p>
                  <p className="text-gray-600">WhatsApp: Resposta imediata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Informações Técnicas</h2>
            <p className="text-xl text-gray-600">
              Detalhes importantes sobre o funcionamento do MAP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-lg">Compatibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Funciona em desktop e celular através de navegador web. 
                  Compatível com Chrome, Firefox, Safari e Edge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-lg">Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Conformidade LGPD e HIPAA. Nenhuma imagem é armazenada. 
                  Processamento em tempo real com descarte imediato.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-lg">Acesso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Aplicativo web funcional, organizado e intuitivo. 
                  Acesso via link enviado por email após cadastro.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lock className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                <CardTitle className="text-lg">Cadastro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Cadastro obrigatório com confirmação de email. 
                  Não requer dados de cartão para trial gratuito.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Teste o MAP gratuitamente por 7 dias e descubra como pode 
            transformar sua prática profissional.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">✨ TRIAL GRATUITO - SEM COMPROMISSO</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {[
                "Acesso completo por 7 dias",
                "Todas as funcionalidades liberadas",
                "Suporte técnico incluído",
                "Sem dados de cartão necessários",
                "Cancele quando quiser",
                "Garantia de satisfação"
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
            Começar Trial Gratuito
          </Button>

          <p className="text-sm mt-6 opacity-75">
            Junte-se a mais de 2.347 profissionais que já transformaram suas práticas
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
