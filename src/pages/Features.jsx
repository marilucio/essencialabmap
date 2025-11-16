import "../App.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Camera,
  Heart,
  Brain,
  Activity,
  FlaskConical,
  BookOpen,
  Waves,
  Award,
  CheckCircle,
  Users,
  BarChart3,
  Target,
  Shield,
  Globe,
  Sparkles,
  Leaf,
  Moon,
  Sun,
  Smile,
  MessageCircle,
  FileText,
  Dumbbell,
  Lightbulb,
  Clock,
  Bell,
  Clipboard,
  TrendingUp,
} from "lucide-react";

function Features() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('lang') || 'pt';

  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang });
  };

  // Inicializa AOS
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
      return () => {
        AOS.refresh();
      };
    }
  }, []);

  const content = {
    pt: {
      hero: {
        title: "Todas as Funcionalidades",
        subtitle:
          "Descubra tudo o que o EssenciaLab oferece para transformar sua prática profissional e bem-estar pessoal",
        cta: "Começar Grátis",
      },
      sections: [
        {
          badge: "🔬 Saúde Preventiva",
          title: "Monitore Sua Saúde em Tempo Real",
          features: [
            {
              icon: BarChart3,
              title: "Dashboard de Saúde Inteligente",
              description:
                "Monitore sua saúde em tempo real com análises cardiovasculares, de stress, energia, sono e nutrição. Receba alertas inteligentes antes que desequilíbrios se tornem problemas.",
            },
            {
              icon: FileText,
              title: "Upload e Análise de Exames",
              description:
                "Digitalize seus exames médicos automaticamente com tecnologia OCR. Entenda o que seus números significam em linguagem clara com IA integrada (GPT-4).",
            },
            {
              icon: Activity,
              title: "Análise Completa de Sangue",
              description:
                "Hemograma completo interpretado, perfil metabólico detalhado, marcadores inflamatórios. Sistema avançado de classificação por cutoffs clínicos.",
            },
            {
              icon: Clock,
              title: "Análise de Longevidade",
              description:
                "Calcule sua idade biológica versus cronológica. Entenda seu potencial de vida saudável com algoritmos atuariais de última geração.",
            },
          ],
        },
        {
          badge: "👁️ Análise Facial com IA",
          title: "Biometria Sem Sensores",
          features: [
            {
              icon: Camera,
              title: "478 Pontos Faciais Detectados",
              description:
                "Tecnologia MediaPipe do Google analisa assimetrias faciais, sinais de fadiga e estima idade aparente. Seu rosto é um mapa da sua saúde interna!",
            },
            {
              icon: Heart,
              title: "Sinais Vitais pela Câmera (rPPG)",
              description:
                "Frequência cardíaca, variabilidade cardíaca (HRV), estimativa de pressão arterial e taxa respiratória — tudo sem sensores físicos!",
            },
            {
              icon: Sun,
              title: "Análise de Pele",
              description:
                "Avaliação de hidratação, detecção de manchas, análise de rugas e recomendações personalizadas para cuidado com a pele.",
            },
            {
              icon: Smile,
              title: "Análise Emocional em Tempo Real",
              description:
                "Detecção de 7 emoções básicas, microexpressões e histórico emocional. Dar nome às emoções é o primeiro passo para processá-las!",
            },
          ],
        },
        {
          badge: "🧠 Autoconhecimento",
          title: "Ferramentas Psicológicas Validadas",
          features: [
            {
              icon: Brain,
              title: "Teste de Personalidade Big Five",
              description:
                "50 questões validadas cientificamente avaliando os 5 grandes fatores (OCEAN). Relatórios detalhados e histórico de evolução.",
            },
            {
              icon: Leaf,
              title: "Avaliação de Sobrecrescimento Fúngico",
              description:
                "Questionário de 100+ sintomas com protocolo antifúngico personalizado e plano dietético. Milhões sofrem sem saber a causa!",
            },
            {
              icon: Moon,
              title: "Perfil Hormonal Feminino",
              description:
                "Avaliação por fase do ciclo, score por hormônio e recomendações naturais. Toda mulher merece entender seu corpo sem mistérios.",
            },
            {
              icon: Target,
              title: "Roda das Emoções (Plutchik)",
              description:
                "Roda interativa com 8 emoções primárias, 16 secundárias e 32 terciárias. Alfabetização emocional é essencial para viver bem!",
            },
            {
              icon: TrendingUp,
              title: "Avaliação de Desenvolvimento Pessoal",
              description:
                "8 pilares da vida: Saúde Física, Mental, Relacionamentos, Carreira, Finanças, Espiritualidade, Propósito e Crescimento.",
            },
          ],
        },
        {
          badge: "🌿 Protocolos Naturais",
          title: "Terapias e Tratamentos",
          features: [
            {
              icon: BookOpen,
              title: "Biblioteca de Protocolos Metabólicos",
              description:
                "Centenas de protocolos para condições variadas com busca inteligente por sintomas. Tudo baseado em evidências científicas.",
            },
            {
              icon: FlaskConical,
              title: "Sistema SOGI",
              description:
                "Questionário de 200+ perguntas avaliando 12 sistemas corporais. O corpo é um sistema interconectado!",
            },
            {
              icon: Activity,
              title: "Teia Funcional",
              description:
                "Visualização das conexões entre sistemas e identificação de padrões ocultos. Uma inflamação intestinal pode causar ansiedade!",
            },
            {
              icon: Waves,
              title: "Protocolo Respiratório 5x5x10",
              description:
                "Exercício guiado de respiração com animações visuais. Regulação do sistema nervoso em apenas 2 minutos!",
            },
          ],
        },
        {
          badge: "📚 Educação",
          title: "Aprenda e Cresça",
          features: [
            {
              icon: Award,
              title: "Plataforma de Cursos",
              description:
                "Aromaterapia, Código da Saúde, Decisões Inteligentes, Solução TDAH. Player de vídeo, certificados e materiais complementares.",
            },
            {
              icon: FileText,
              title: "Biblioteca de Artigos",
              description:
                "Centenas de artigos curados sobre saúde, bem-estar e naturopatia. Busca inteligente por categorias.",
            },
            {
              icon: Dumbbell,
              title: "Receitas Funcionais",
              description:
                "Keto, Plant-Based, Low-Carb, Low-FODMAP com informações nutricionais completas. Alimentação que cura!",
            },
            {
              icon: Heart,
              title: "Alimentos por Tipo Sanguíneo",
              description:
                "Recomendações baseadas no trabalho do Dr. Peter D'Adamo. Personalize sua dieta de acordo com seu tipo sanguíneo.",
            },
          ],
        },
        {
          badge: "🎵 Terapias de Som",
          title: "Som é Medicina",
          features: [
            {
              icon: Waves,
              title: "Player de Áudio Neuroacústico",
              description:
                "Frequências binaurais, sons isocrônicos e ondas cerebrais (Alpha, Beta, Theta, Delta). Frequências específicas acalmam, focam ou facilitam o sono!",
            },
            {
              icon: MessageCircle,
              title: "Reflexão Diária Guiada",
              description:
                "Prompts personalizados para autoconhecimento com espaço para gratidão, intenções e aprendizados diários.",
            },
          ],
        },
        {
          badge: "🎮 Gamificação",
          title: "Cuidar de Si Deveria Ser Prazeroso",
          features: [
            {
              icon: Award,
              title: "Sistema de Recompensas",
              description:
                "Ganhe pontos por ações de autocuidado. Sistema de streaks, conquistas, badges e níveis para te manter motivado!",
            },
            {
              icon: Clipboard,
              title: "Gestão Inteligente de Tarefas",
              description:
                "Tarefas automáticas baseadas no seu perfil, priorização inteligente e lembretes personalizados.",
            },
            {
              icon: Bell,
              title: "Notificações Push Inteligentes",
              description:
                "Lembretes de check-in, alertas de saúde e novos conteúdos com agendamento inteligente.",
            },
          ],
        },
        {
          badge: "👨‍⚕️ Para Profissionais",
          title: "Ferramentas Profissionais",
          features: [
            {
              icon: Users,
              title: "Dashboard Profissional",
              description:
                "Gestão de clientes, visualização de testes, comparação de evolução e anotações clínicas. Mais tempo para conexão humana!",
            },
            {
              icon: FileText,
              title: "Relatórios Profissionais",
              description:
                "PDFs customizáveis com gráficos, comparações antes/depois e assinatura digital. Impressione seus clientes!",
            },
            {
              icon: BarChart3,
              title: "Análise Comparativa",
              description:
                "Comparação lado a lado de múltiplas avaliações com destaque de mudanças significativas.",
            },
          ],
        },
        {
          badge: "🔒 Segurança",
          title: "Seus Dados Protegidos",
          features: [
            {
              icon: Shield,
              title: "Criptografia E2E",
              description:
                "Conformidade LGPD/GDPR, autenticação biométrica e 2FA. Controle total dos seus dados pessoais!",
            },
            {
              icon: Globe,
              title: "Acessível em Qualquer Lugar",
              description:
                "PWA + App Android nativo. Funciona offline com atualizações automáticas (OTA).",
            },
            {
              icon: Globe,
              title: "Multilíngue",
              description:
                "Português (BR), Inglês (EUA) e Espanhol (ES). Tecnologia i18next para tradução perfeita.",
            },
          ],
        },
      ],
      cta: {
        title: "Pronto Para Começar?",
        subtitle:
          "Todas essas funcionalidades estão disponíveis agora. Comece gratuitamente e transforme sua vida!",
        button: "Criar Minha Conta Grátis",
      },
    },
  };

  const t = content[language] || content.pt;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      <Header language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
            ✨ Funcionalidades Completas
          </Badge>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            {t.hero.title}
          </h1>
          <p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg text-lg px-10 py-6"
            onClick={() => window.open("https://app.essencialab.site", "_blank")}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* Features Sections */}
      {t.sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 px-4 ${
            sectionIndex % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-green-50 to-emerald-50"
          }`}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200 text-base px-4 py-2">
                {section.badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {section.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {section.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto max-w-4xl text-center" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t.cta.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 shadow-2xl text-lg px-10 py-7"
            onClick={() => window.open("https://app.essencialab.site", "_blank")}
          >
            <Sparkles className="mr-2 h-6 w-6" />
            {t.cta.button}
          </Button>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}

export default Features;

