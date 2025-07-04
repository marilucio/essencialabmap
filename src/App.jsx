import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Camera,
  Brain,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Zap,
  Award,
  TrendingUp,
  Shield,
  Users,
  ExternalLink,
  Download,
  MessageCircle,
  Clock,
  HelpCircle,
  X,
  Monitor,
  Smartphone,
  FileText,
  Video,
  Lock,
  UserCheck,
  FileCheck,
  Globe,
  Stethoscope,
  GraduationCap,
  Heart,
  Activity,
  Dumbbell,
  Lightbulb,
} from "lucide-react";

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoType, setSelectedDemoType] = useState(null);
  const [demoStep, setDemoStep] = useState(0);
  
  // Inicializa a biblioteca de animações AOS
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
      
      // Atualiza a AOS quando o componente é atualizado
      return () => {
        AOS.refresh();
      };
    }
  }, []);

  const scrollToForm = () => {
    // Fecha o modal se estiver aberto
    setIsDemoModalOpen(false);

    // Aguarda um pouco para o modal fechar completamente
    setTimeout(() => {
      const formSection = document.getElementById("lead-capture-form");
      
      if (!formSection) {
        console.warn("Elemento 'lead-capture-form' não encontrado");
        return;
      }

      // Scroll suave para a seção do formulário
      formSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }, 100);
  };

  // Função para abrir o modal de demonstração
  const openDemoModal = () => {
    setIsDemoModalOpen(true);
    setSelectedDemoType(null);
    setDemoStep(0);
  };

  // Função para rolar para a seção de base científica
  const scrollToScience = () => {
    const scienceSection = document.getElementById("base-cientifica");
    if (scienceSection) {
      scienceSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  // Função para selecionar tipo de demonstração
  const selectDemoType = (type) => {
    setSelectedDemoType(type);
    setDemoStep(1);
  };

  // Função para avançar no passo da demonstração
  const nextDemoStep = () => {
    if (demoStep < 6) {
      setDemoStep(demoStep + 1);
    }
  };

  // Função para voltar no passo da demonstração
  const prevDemoStep = () => {
    if (demoStep > 0) {
      setDemoStep(demoStep - 1);
    } else {
      setSelectedDemoType(null);
    }
  };

  // Dados das demonstrações
  const demoTypes = [
    {
      id: 'video',
      title: 'Vídeo Demonstração',
      description: 'Assista uma demonstração completa do MAP em ação',
      icon: Video,
      color: 'from-red-500 to-red-600',
      duration: '26:36 min'
    },
    {
      id: 'interactive',
      title: 'Tour Interativo',
      description: 'Explore a interface passo a passo',
      icon: Monitor,
      color: 'from-blue-500 to-blue-600',
      duration: '5-10 min'
    },
    {
      id: 'case-study',
      title: 'Caso Clínico',
      description: 'Veja um exemplo real de análise',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      duration: '3-5 min'
    }
  ];

  // Conteúdo dos passos da demonstração interativa
  const interactiveSteps = [
    {
      title: 'Captura da Imagem',
      description: 'O paciente acessa o aplicativo e realiza a análise facial',
      image: '/images/scanface.webp',
      features: ['Câmera do celular', 'Sem equipamentos especiais', 'Processo não-invasivo', 'Tecnologia de ponta com leitura do fluxo sanguíneo facial']
    },
    {
      title: 'Processamento IA',
      description: 'Nossa inteligência artificial analisa biomarcadores faciais em segundos',
      image: '/images/iascaning.webp',
      features: ['Algoritmos treinados em 17.000+ imagens', 'Análise em tempo real', 'Precisão de 91%']
    },
    {
      title: 'Relatório SOGI',
      description: 'Geração automática do relatório com os 4 pilares metabólicos',
      image: '/images/sogi.webp',
      features: ['Submetilação', 'Oxidação', 'Glicação', 'Inflamação']
    },
      {
        title: 'Recomendações',
        description: 'Plano de ação personalizado baseado nos resultados',
        image: '/images/recomenda.webp',
        features: ['Protocolos personalizados', 'Suplementação direcionada', 'Acompanhamento contínuo']
      },
    {
      title: 'Acompanhamento Preciso',
      description: 'Monitoramento contínuo dos resultados e evolução do paciente',
      image: '/images/acompanha.webp',
      features: ['Ajustes automáticos no protocolo', 'Comparativo de evolução', 'Alertas de desvios metabólicos']
    },
    {
      title: 'Análise Precisa - Teia Funcional',
      description: 'Mapeamento completo das interações metabólicas',
      image: '/images/teia.webp',
      features: ['Visão sistêmica da saúde', 'Identificação de causas raiz', 'Protocolos integrados']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  ✓ Baseado em 728+ Citações Científicas
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    91% de Precisão
                  </span>
                  <br />
                  na Predição de Riscos Metabólicos
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A primeira ferramenta que combina análise facial com
                  biomarcadores metabólicos, baseada em estudos científicos de
                  alto impacto. Transforme a forma como você avalia a saúde dos
                  seus pacientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>17.000+ imagens analisadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Validado Nature Medicine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>728+ citações científicas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Aprovado por profissionais</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  onClick={scrollToForm}
                >
                  <span className="relative z-10">
                    Acesso Imediato - 7 Dias Grátis
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                      onClick={openDemoModal}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Ver Demonstração
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-2">
                        {!selectedDemoType ? 'Escolha Sua Demonstração' : 
                         selectedDemoType === 'video' ? 'Vídeo Demonstração' :
                         selectedDemoType === 'interactive' ? 'Tour Interativo' :
                         'Caso Clínico Real'}
                      </DialogTitle>
                      <DialogDescription className="text-center text-gray-600">
                        {!selectedDemoType ? 'Selecione o tipo de demonstração que mais se adequa ao seu perfil' :
                         selectedDemoType === 'video' ? 'Assista uma demonstração completa do MAP em funcionamento' :
                         selectedDemoType === 'interactive' ? `Passo ${demoStep} de 6: Explore como o MAP funciona na prática` :
                         'Veja um exemplo real de análise metabólica'}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Seleção do tipo de demonstração */}
                    {!selectedDemoType && (
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {demoTypes.map((demo) => (
                          <Card 
                            key={demo.id}
                            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300"
                            onClick={() => selectDemoType(demo.id)}
                          >
                            <CardHeader className="text-center">
                              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4`}>
                                <demo.icon className="w-8 h-8 text-white" />
                              </div>
                              <CardTitle className="text-lg">{demo.title}</CardTitle>
                              <CardDescription>{demo.description}</CardDescription>
                              <Badge variant="outline" className="mt-2 w-fit mx-auto">
                                <Clock className="w-3 h-3 mr-1" />
                                {demo.duration}
                              </Badge>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Demonstração em Vídeo */}
                    {selectedDemoType === 'video' && (
                      <div className="mt-6">
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/lzwZuZK_5Ao?rel=0&modestbranding=1&showinfo=0"
                            title="MAP - Demonstração Completa"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-gray-600 mb-4">
                            Vídeo completo mostrando o MAP em ação real com pacientes
                          </p>
                          <Button 
                            onClick={scrollToForm}
                            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                          >
                            Quero Testar Gratuitamente
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Tour Interativo */}
                    {selectedDemoType === 'interactive' && (
                      <div className="mt-6">
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-2">
                              {[1, 2, 3, 4, 5, 6].map((step) => (
                                <div
                                  key={step}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    step <= demoStep 
                                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' 
                                      : 'bg-gray-200 text-gray-500'
                                  }`}
                                >
                                  {step}
                                </div>
                              ))}
                            </div>
                            <Badge className="bg-blue-100 text-blue-800">
                              {demoStep}/6
                            </Badge>
                          </div>
                        </div>

                        {demoStep > 0 && demoStep <= 6 && (
                          <Card className="mb-6">
                            <CardHeader>
                              <CardTitle className="text-xl">
                                {interactiveSteps[demoStep - 1].title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {interactiveSteps[demoStep - 1].description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-6 items-center">
                                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                  <img
                                    src={interactiveSteps[demoStep - 1].image}
                                    alt={interactiveSteps[demoStep - 1].title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="w-full h-full flex items-center justify-center text-center text-gray-500" style={{display: 'none'}}>
                                    <div>
                                      <Monitor className="w-12 h-12 mx-auto mb-2" />
                                      <p className="text-sm">Simulação da Interface</p>
                                      <p className="text-xs">Passo {demoStep}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-800">Características:</h4>
                                  {interactiveSteps[demoStep - 1].features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                      <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}

                        <div className="flex justify-between items-center">
                          <Button
                            variant="outline"
                            onClick={prevDemoStep}
                            disabled={demoStep === 1 && selectedDemoType}
                          >
                            {demoStep === 1 ? 'Voltar' : 'Anterior'}
                          </Button>
                          
                          {demoStep < 6 ? (
                            <Button
                              onClick={nextDemoStep}
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                            >
                              Próximo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          ) : (
                            <Button
                              onClick={scrollToForm}
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                            >
                              Começar Teste Gratuito
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Caso Clínico */}
                    {selectedDemoType === 'case-study' && (
                      <div className="mt-6">
                        <Card className="mb-6">
                          <CardHeader>
                            <CardTitle className="text-xl">Paciente: Maria, 45 anos</CardTitle>
                            <CardDescription>
                              Nutricionista solicitou análise metabólica preventiva
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Foto Analisada:</h4>
                                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                  <img
                                    src="/images/paciente.webp"
                                    alt="Paciente Maria - Análise Facial"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="w-full h-full flex items-center justify-center text-center text-gray-500" style={{display: 'none'}}>
                                    <div>
                                      <Camera className="w-12 h-12 mx-auto mb-2" />
                                      <p className="text-sm">Imagem Facial</p>
                                      <p className="text-xs">Análise Concluída</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-3">Resultados SOGI:</h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                    <span className="text-sm font-medium">Submetilação</span>
                                    <Badge variant="destructive">Alto Risco</Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                    <span className="text-sm font-medium">Oxidação</span>
                                    <Badge className="bg-yellow-500">Moderado</Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                                    <span className="text-sm font-medium">Glicação</span>
                                    <Badge className="bg-green-600">Baixo</Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                                    <span className="text-sm font-medium">Inflamação</span>
                                    <Badge className="bg-orange-500">Moderado</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">Recomendações Geradas:</h4>
                              <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Suplementação com complexo B e folato</li>
                                <li>• Protocolo antioxidante personalizado</li>
                                <li>• Acompanhamento em 30 dias</li>
                                <li>• Ajustes nutricionais específicos</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="text-center">
                          <p className="text-gray-600 mb-4">
                            Análise completa realizada em menos de 30 segundos
                          </p>
                          <Button 
                            onClick={scrollToForm}
                            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                          >
                            Analisar Meus Pacientes
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {!isVideoPlaying ? (
                      <div className="text-center">
                        <div
                          className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300"
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          Vídeo: Como o MAP Funciona
                        </p>
                        <p className="text-sm text-gray-500">
                          26:36 • Demonstração prática
                        </p>
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/lzwZuZK_5Ao?autoplay=1&rel=0&modestbranding=1&showinfo=0"
                        title="Como o MAP Funciona - Demonstração"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    )}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selos de Segurança */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Segurança e Conformidade Garantidas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sua tranquilidade e a de seus pacientes são nossa prioridade. Cumprimos rigorosamente todas as normas de segurança e privacidade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Shield,
                title: "LGPD Compliant",
                subtitle: "Brasil",
                description: "Conformidade total com a Lei Geral de Proteção de Dados",
                color: "green"
              },
              {
                icon: Lock,
                title: "HIPAA Compliant",
                subtitle: "EUA",
                description: "Atende aos padrões de privacidade em saúde dos EUA",
                color: "blue"
              },
              {
                icon: FileCheck,
                title: "ISO 27001",
                subtitle: "Certificado",
                description: "Padrão internacional de segurança da informação",
                color: "purple"
              },
              {
                icon: UserCheck,
                title: "Dados Criptografados",
                subtitle: "256-bit SSL",
                description: "Máxima proteção em todas as transmissões",
                color: "orange"
              },
              {
                icon: Globe,
                title: "Servidores Seguros",
                subtitle: "AWS/Azure",
                description: "Infraestrutura de nível empresarial",
                color: "indigo"
              },
              {
                icon: CheckCircle,
                title: "Auditoria Externa",
                subtitle: "Anual",
                description: "Verificação independente de segurança",
                color: "teal"
              }
            ].map((seal, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <CardContent className="p-4">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${
                      seal.color === "green"
                        ? "from-green-500 to-green-600"
                        : seal.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : seal.color === "purple"
                        ? "from-purple-500 to-purple-600"
                        : seal.color === "orange"
                        ? "from-orange-500 to-orange-600"
                        : seal.color === "indigo"
                        ? "from-indigo-500 to-indigo-600"
                        : "from-teal-500 to-teal-600"
                    } flex items-center justify-center mb-3`}
                  >
                    <seal.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-800 mb-1">
                    {seal.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mb-2">
                    {seal.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 leading-tight">
                    {seal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-800">Compromisso com a Privacidade</h3>
              </div>
              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>Nenhuma imagem é armazenada.</strong> O processamento é feito em tempo real e os dados são imediatamente descartados após a análise. 
                Apenas os resultados metabólicos são mantidos, sempre com consentimento explícito do paciente e profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Como o MAP Transforma Segundos em Insights Precisos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e científico que revoluciona a avaliação
              metabólica
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "CAPTURE",
                subtitle: "Paciente faz análise facial em vídeo de onde ele estiver",
                description: "Nenhuma imagem é gravada, segue as leis de LGPD Brasil e HIPAA EUA - tecnologia de pletismografia (rPPG + MTC + observação de microexpressões faciais invisíveis a olho humano)",
                color: "blue",
              },
              {
                icon: Brain,
                title: "PROCESSE",
                subtitle: "IA analisa biomarcadores faciais",
                description: "Algoritmos treinados em milhares de casos",
                color: "purple",
              },
              {
                icon: BarChart3,
                title: "AVALIE",
                subtitle: "Relatório SOGI instantâneo",
                description: "4 pilares metabólicos em tempo real",
                color: "green",
              },
              {
                icon: Target,
                title: "ATUE",
                subtitle: "Recomendações personalizadas",
                description: "Plano de ação baseado em evidências",
                color: "orange",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="relative border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${
                      step.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : step.color === "purple"
                        ? "from-purple-500 to-purple-600"
                        : step.color === "green"
                        ? "from-green-500 to-green-600"
                        : "from-orange-500 to-orange-600"
                    } flex items-center justify-center mb-4`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="font-semibold text-gray-700">
                    {step.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Base Científica */}
      <section id="base-cientifica" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ciência Validada por Estudos de Alto Impacto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O MAP não é apenas tecnologia - é ciência aplicada. Nossa
              metodologia está fundamentada em pesquisas peer-reviewed das mais
              renomadas publicações científicas mundiais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Análise de Rede Funcional Metabólica",
                journal: "mSystems (2018)",
                citations: "85 citações",
                finding:
                  "O metabolismo da microbiota é mais conservado entre indivíduos humanos do que a composição de espécies",
                application:
                  "Validação da abordagem de análise sistêmica para predição metabólica",
                image:
                  "/images/estudos/estudo-1-network-analysis-metabolic.jpeg",
                link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5872302/",
                linkText: "Rede funcional metabólica (mSystems, 2018)",
              },
              {
                title: "Biomarcadores SOGI",
                journal: "Physiological Research (2014)",
                citations: "62 citações",
                finding:
                  "AGEs foram significativamente maiores no grupo +DC comparado ao -DC",
                application:
                  "Evidência científica dos 4 pilares metabólicos (Submetilação, Oxidação, Glicação, Inflamação)",
                image:
                  "/images/estudos/estudo-2-glycation-oxidation-inflammation.png",
                link: "https://pubmed.ncbi.nlm.nih.gov/27529340/",
                linkText: "Biomarcadores AGEs (~PLOS ONE, 2014)",
              },
              {
                title: "Fenotipagem Facial Preditiva",
                journal: "Nature Medicine (2019)",
                citations: "728 citações",
                finding:
                  "91% de acurácia top-10 na identificação da síndrome correta",
                application:
                  "Validação da análise facial como biomarcador confiável",
                image:
                  "/images/estudos/estudo-3-facial-phenotyping-deep-learning.png",
                link: "https://pubmed.ncbi.nlm.nih.gov/30617323/",
                linkText: "Fenotipagem facial (Nature Medicine, 2019)",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {study.citations}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {study.journal}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Descoberta:
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "{study.finding}"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Aplicação MAP:
                    </p>
                    <p className="text-sm text-gray-600">{study.application}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      window.open(study.link, "_blank", "noreferrer")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {study.linkText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O Que Você Conquista nos Primeiros 7 Dias
            </h2>
            <p className="text-xl text-gray-600">
              Resultados imediatos que transformam sua prática profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Consultas 60% mais eficientes",
                description:
                  "Substitua horas de exames laboratoriais por 30 segundos de análise. Otimize seu tempo e atenda mais pacientes com a mesma qualidade.",
                color: "yellow",
              },
              {
                icon: TrendingUp,
                title: "Aumente sua receita média por paciente em R$ 300",
                description:
                  "Cobre mais por consultas diferenciadas com tecnologia de ponta. Nossos usuários reportam aumento médio de R$ 300 por consulta.",
                color: "orange",
              },
              {
                icon: BarChart3,
                title: "Relatórios profissionais que impressionam",
                description:
                  "Apresente análises visuais e científicas que demonstram seu expertise. Seus pacientes ficarão impressionados com a precisão.",
                color: "indigo",
              },
              {
                icon: Award,
                title: "Diferenciação competitiva no mercado",
                description:
                  "Seja o primeiro na sua região a oferecer análise metabólica por IA. Destaque-se da concorrência com tecnologia exclusiva.",
                color: "purple",
              },
              {
                icon: Target,
                title: "Precisão Científica Validada",
                description:
                  "91% de acurácia baseada em estudos Nature Medicine. Tome decisões clínicas com a confiança que só a ciência pode oferecer.",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Credibilidade Profissional Elevada",
                description:
                  "Baseie suas recomendações em dados científicos sólidos. Aumente a confiança dos pacientes em seus protocolos de tratamento.",
                color: "green",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                      benefit.color === "yellow"
                        ? "from-yellow-400 to-yellow-500"
                        : benefit.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : benefit.color === "purple"
                        ? "from-purple-500 to-purple-600"
                        : benefit.color === "green"
                        ? "from-green-500 to-green-600"
                        : benefit.color === "orange"
                        ? "from-orange-500 to-orange-600"
                        : "from-indigo-500 to-indigo-600"
                    } flex items-center justify-center mb-4`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é o sistema MAP */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Para Quem é o Sistema MAP do EssenciaLab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especificamente para profissionais de saúde que buscam excelência, 
              precisão e diferenciação em suas práticas clínicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                profession: "Nutricionistas",
                description: "Crie planos alimentares personalizados baseados em análise metabólica precisa e acompanhe a evolução dos pacientes em tempo real.",
                benefits: ["Planos alimentares direcionados", "Análise de deficiências nutricionais", "Protocolos de suplementação"],
                color: "green"
              },
              {
                icon: GraduationCap,
                profession: "Nutrólogos",
                description: "Integre dados metabólicos com prescrições médicas para tratamentos mais assertivos e baseados em evidências científicas.",
                benefits: ["Prescrições personalizadas", "Diagnósticos mais precisos", "Acompanhamento clínico avançado"],
                color: "blue"
              },
              {
                icon: Heart,
                profession: "Psicólogos e Terapeutas",
                description: "Compreenda a conexão mente-corpo através de biomarcadores que revelam o impacto do estresse e emoções no metabolismo.",
                benefits: ["Análise psicossomática", "Protocolos integrais", "Acompanhamento holístico"],
                color: "purple"
              },
              {
                icon: Activity,
                profession: "Fisioterapeutas",
                description: "Desenvolva programas de reabilitação considerando o perfil metabólico para otimizar a recuperação e performance.",
                benefits: ["Reabilitação personalizada", "Protocolos de recuperação", "Análise de performance"],
                color: "orange"
              },
              {
                icon: Dumbbell,
                profession: "Educadores Físicos",
                description: "Crie treinos e programas de condicionamento baseados no perfil metabólico individual de cada aluno ou atleta.",
                benefits: ["Treinos personalizados", "Otimização de performance", "Prevenção de lesões"],
                color: "red"
              },
              {
                icon: Lightbulb,
                profession: "Consultores de Bem-Estar",
                description: "Ofereça consultorias completas integrando análise metabólica com estratégias de lifestyle e longevidade.",
                benefits: ["Consultorias premium", "Programas de longevidade", "Coaching de saúde"],
                color: "indigo"
              },
              {
                icon: FileCheck,
                profession: "Biomédicos",
                description: "Correlacione exames laboratoriais com análise facial para interpretações mais completas e precisas.",
                benefits: ["Interpretação avançada", "Correlação de dados", "Laudos diferenciados"],
                color: "teal"
              },
              {
                icon: UserCheck,
                profession: "Médicos Generalistas",
                description: "Tenha uma ferramenta de triagem rápida para identificar riscos metabólicos e direcionar investigações.",
                benefits: ["Triagem eficiente", "Medicina preventiva", "Diagnóstico precoce"],
                color: "cyan"
              },
              {
                icon: Shield,
                profession: "Terapeutas Integrativos",
                description: "Combine análise metabólica com terapias naturais para abordagens verdadeiramente personalizadas.",
                benefits: ["Terapias direcionadas", "Medicina integrativa", "Protocolos naturais"],
                color: "emerald"
              }
            ].map((professional, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${
                      professional.color === "green"
                        ? "from-green-500 to-green-600"
                        : professional.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : professional.color === "purple"
                        ? "from-purple-500 to-purple-600"
                        : professional.color === "orange"
                        ? "from-orange-500 to-orange-600"
                        : professional.color === "red"
                        ? "from-red-500 to-red-600"
                        : professional.color === "indigo"
                        ? "from-indigo-500 to-indigo-600"
                        : professional.color === "teal"
                        ? "from-teal-500 to-teal-600"
                        : professional.color === "cyan"
                        ? "from-cyan-500 to-cyan-600"
                        : "from-emerald-500 to-emerald-600"
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <professional.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {professional.profession}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {professional.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Como o MAP ajuda:</h4>
                    {professional.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Não encontrou sua especialidade?
              </h3>
              <p className="text-gray-600 mb-6">
                O MAP é uma ferramenta versátil que se adapta a qualquer área da saúde. 
                Se você trabalha com bem-estar, prevenção ou tratamento, o MAP pode potencializar seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Testar Gratuitamente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5543991246422?text=Olá! Gostaria de saber como o MAP pode ajudar na minha especialidade.",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture - Ebook */}
      <section
        id="lead-capture-form"
        className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comece Seu Cadastro e Receba o Guia
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  <strong>"Guia de 7 dias para hábitos essenciais"</strong>
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Cadastre-se abaixo para acessar a ferramenta EssenciaLab MAP gratuitamente por 7 dias. Após seu primeiro login, você receberá o guia para transformar a saúde dos seus pacientes com hábitos baseados em evidências.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    O que você vai descobrir:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "7 hábitos fundamentais validados cientificamente",
                      "Protocolo dia-a-dia para implementação",
                      "Métricas para acompanhar resultados",
                      "Cases reais de transformação",
                      "Checklist de implementação prática",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">100% livre de spam</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Respeitamos sua privacidade. Você pode cancelar a qualquer
                      momento.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <form 
                    name="guia-essencialab" 
                    method="POST" 
                    data-netlify="true" 
                    netlify-honeypot="bot-field"
                    className="space-y-4"
                    action="https://essencialab.app"
                  >
                    <input type="hidden" name="form-name" value="guia-essencialab" />
                    <p style={{display: 'none'}}>
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>
                    
                    <div>
                      <label htmlFor="email-guia" className="block text-sm font-semibold text-gray-700 mb-2">
                        Seu melhor email profissional
                      </label>
                      <Input
                        type="email"
                        id="email-guia"
                        name="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="especialidade-guia" className="block text-sm font-semibold text-gray-700 mb-2">
                        Sua especialidade
                      </label>
                      <Select name="especialidade" required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione sua área" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nutricionista">Nutricionista</SelectItem>
                          <SelectItem value="nutrologo">Nutrólogo</SelectItem>
                          <SelectItem value="biomedico">Biomédico</SelectItem>
                          <SelectItem value="medico">Médico</SelectItem>
                          <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                          <SelectItem value="fisioterapeuta">Fisioterapeuta</SelectItem>
                          <SelectItem value="psicologo">Psicólogo</SelectItem>
                          <SelectItem value="naturopata">Naturopata</SelectItem>
                          <SelectItem value="iridologo">Iridólogo</SelectItem>
                          <SelectItem value="aromaterapeuta">Aromaterapeuta</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Cadastrar e Acessar a Ferramenta
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Junte-se a 2.347 profissionais que já transformaram suas práticas
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Profissionais de Saúde Já Estão Transformando Suas Práticas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Dr. H.C. Marilúcio Rocha",
                role: "Naturólogo",
                content:
                  "Já usei vários sistemas para automatizar meu atendimentos, mas o MAP é, de longe, o mais eficaz. Ele me ajuda a entender melhor as necessidades dos meus pacientes e a personalizar os tratamentos. O melhor de tudo: acompanhamento altamente personalizado e eficiente.",
                rating: 5,
              },
              {
                name: "Prof. Carlos Santos",
                role: "Nutrólogo",
                content:
                  "Como professor universitário, sempre busquei ferramentas baseadas em evidências. O MAP supera minhas expectativas - é ciência aplicada na prática clínica.",
                rating: 5,
              },
              {
                name: "Wellington C. Dias",
                role: "Terapeuta Iridólogo",
                content:
                  "Sabe aquela sensação de estar sobrecarregado tentando montar um plano de tratamento certeiro, analisando exames por horas e mesmo assim às vezes não ver resultados que o paciente espera? Eu também vivia isso até conhecer o MAP do EssenciaLab. É como ter um copiloto clínico: a ferramenta me ajuda a interpretar exames com precisão, sugere condutas eficazes e ainda respeita o toque humano, posso ajustar conforme a individualidade de cada pessoa. Hoje meus atendimentos são mais rápidos, mais assertivos e com muito mais resultados.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Números de Impacto */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                number: "1.347",
                label: "Análises esta semana",
                sublabel: "Profissionais de saúde usando o MAP",
              },
              {
                number: "94%",
                label: "Satisfação dos usuários",
                sublabel: "Recomendariam para colegas",
              },
              {
                number: "4.8/5",
                label: "Avaliação média",
                sublabel: "Baseado em 147 reviews",
              },
              {
                number: "310%",
                label: "ROI médio",
                sublabel: "No primeiro mês de uso",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as principais dúvidas dos profissionais de saúde
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "É difícil de usar? Preciso de conhecimento técnico?",
                answer:
                  "Absolutamente não! A interface é intuitiva e foi desenvolvida pensando em profissionais de saúde. Em apenas 5 minutos você domina completamente a ferramenta. Oferecemos treinamento completo e suporte técnico dedicado.",
              },
              {
                question: "Funciona na minha especialidade?",
                answer:
                  "Sim! O MAP é usado com sucesso por nutricionistas, nutrólogos, Terapeutas holísticos, biomédicos, consultores de bem-estar, médicos, enfermeiros e outros profissionais. A análise metabólica é universal e aplicável a todas as áreas da saúde.",
              },
              {
                question:
                  "É realmente científico? Posso confiar nos resultados?",
                answer:
                  "Totalmente! Nossa metodologia está baseada em 728+ citações científicas, incluindo estudos publicados na Nature Medicine. A precisão de 91% foi validada em centenas de casos reais.",
              },
              {
                question: "E se eu não gostar? Posso cancelar?",
                answer:
                  "Claro! Oferecemos 7 dias de trial gratuito sem compromisso. Não precisa nem colocar dados do cartão. Se não ficar satisfeito, ainda assim continuará tendo acesso gratuito aos protocolos pré-definidos. Garantia de satisfação 100%.",
              },
              {
                question: "Como funciona o suporte? Vou ficar sozinho?",
                answer:
                  "Jamais! Temos suporte técnico dedicado e acompanhamento personalizado. Você nunca estará sozinho nessa jornada.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3 text-left">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-11">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open(
                  "https://wa.me/5543991246422?text=Olá! Tenho interesse no MAP e gostaria de falar com um especialista.",
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não deixe seus concorrentes saírem na frente. A revolução da
            avaliação metabólica já começou, e você pode fazer parte dela agora
            mesmo.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">TRIAL GRATUITO 7 DIAS</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {[
                "Acesso completo à plataforma",
                "Análises ilimitadas",
                "Suporte técnico dedicado",
                "Material científico exclusivo",
                "Cadastro gratuito sem compromisso algum",
                "Não precisa colocar dados de cartão para testar a ferramenta",
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
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            onClick={scrollToForm}
          >
            <span className="relative z-10">Garantir Minha Vaga Agora</span>
            <ArrowRight className="w-6 h-6 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <p className="text-sm mt-6 opacity-75">
            Satisfação garantida ou seu dinheiro de volta • Vagas limitadas para
            o trial gratuito
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

export default App;
