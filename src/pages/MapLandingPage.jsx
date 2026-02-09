import "../App.css";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

function MapLandingPage({ language = "pt" }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoType, setSelectedDemoType] = useState(null);
  const [demoStep, setDemoStep] = useState(0);

  // Form states
  const [formEmail, setFormEmail] = useState("");
  const [formEspecialidade, setFormEspecialidade] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formEmail || !formEspecialidade) return;

    setFormStatus("loading");
    setFormError("");

    try {
      const response = await fetch(
        "https://n8n.mariluciorocha.com/webhook/map-lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formEmail,
            especialidade: formEspecialidade,
            source: "map-landing-page",
            language: language,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      setFormStatus("success");
      setTimeout(() => {
        window.location.href = "https://essencialab.app";
      }, 1500);
    } catch (err) {
      setFormStatus("error");
      setFormError(
        language === "es"
          ? "Error al enviar. Intenta de nuevo."
          : language === "en"
            ? "Submission failed. Please try again."
            : "Erro ao enviar. Tente novamente."
      );
    }
  };

  // Inicializa a biblioteca de animações AOS
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
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
        inline: "nearest",
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
        inline: "nearest",
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

  // Conteúdo multilíngue
  const content = {
    pt: {
      hero: {
        badge: "✓ Baseado em 728+ Citações Científicas",
        title1: "91% de Precisão",
        title2: "na Predição de Riscos Metabólicos",
        description:
          "A primeira ferramenta que combina análise facial com biomarcadores metabólicos, baseada em estudos científicos de alto impacto. Transforme a forma como você avalia a saúde dos seus pacientes.",
        stats: [
          "17.000+ imagens analisadas",
          "Validado Nature Medicine",
          "728+ citações científicas",
          "Aprovado por profissionais",
        ],
        cta1: "Acesso Imediato - 7 Dias Grátis",
        cta2: "Ver Demonstração",
        materialsBtn: "📦 Kit de Materiais",
        videoTitle: "Vídeo: Como o MAP Funciona",
        videoSubtitle: "26:36 • Demonstração prática",
        videoIframeTitle: "MAP - Demonstração Completa",
        videoIframeTitle2: "Como o MAP Funciona - Demonstração",
      },
      demo: {
        selectTitle: "Escolha Sua Demonstração",
        selectDescription:
          "Selecione o tipo de demonstração que mais se adequa ao seu perfil",
        videoTitle: "Vídeo Demonstração",
        videoDescription: "Assista uma demonstração completa do MAP em ação",
        videoModalTitle: "Vídeo Demonstração",
        videoModalDescription:
          "Assista uma demonstração completa do MAP em funcionamento",
        videoComplete:
          "Vídeo completo mostrando o MAP em ação real com pacientes",
        videoCTA: "Quero Testar Gratuitamente",
        interactiveTitle: "Tour Interativo",
        interactiveDescription: "Explore a interface passo a passo",
        interactiveModalTitle: "Tour Interativo",
        interactiveModalDescription:
          "Passo {step} de 6: Explore como o MAP funciona na prática",
        caseStudyTitle: "Caso Clínico",
        caseStudyDescription: "Veja um exemplo real de análise",
        caseStudyModalTitle: "Caso Clínico Real",
        caseStudyModalDescription: "Veja um exemplo real de análise metabólica",
        step: "Passo",
        of: "de",
        previous: "Anterior",
        back: "Voltar",
        next: "Próximo",
        startTrial: "Começar Teste Gratuito",
        characteristics: "Características:",
        interfaceSimulation: "Simulação da Interface",
      },
      interactiveSteps: [
        {
          title: "Captura da Imagem",
          description:
            "O paciente acessa o aplicativo e realiza a análise facial",
          features: [
            "Câmera do celular",
            "Sem equipamentos especiais",
            "Processo não-invasivo",
            "Tecnologia de ponta com leitura do fluxo sanguíneo facial",
          ],
        },
        {
          title: "Processamento IA",
          description:
            "Nossa inteligência artificial analisa biomarcadores faciais em segundos",
          features: [
            "Algoritmos treinados em 17.000+ imagens",
            "Análise em tempo real",
            "Precisão de 91%",
          ],
        },
        {
          title: "Relatório SOGI",
          description:
            "Geração automática do relatório com os 4 pilares metabólicos",
          features: ["Submetilação", "Oxidação", "Glicação", "Inflamação"],
        },
        {
          title: "Recomendações",
          description: "Plano de ação personalizado baseado nos resultados",
          features: [
            "Protocolos personalizados",
            "Suplementação direcionada",
            "Acompanhamento contínuo",
          ],
        },
        {
          title: "Acompanhamento Preciso",
          description:
            "Monitoramento contínuo dos resultados e evolução do paciente",
          features: [
            "Ajustes automáticos no protocolo",
            "Comparativo de evolução",
            "Alertas de desvios metabólicos",
          ],
        },
        {
          title: "Análise Precisa - Teia Funcional",
          description: "Mapeamento completo das interações metabólicas",
          features: [
            "Visão sistêmica da saúde",
            "Identificação de causas raiz",
            "Protocolos integrados",
          ],
        },
      ],
      caseStudy: {
        patient: "Paciente: Maria, 45 anos",
        request: "Nutricionista solicitou análise metabólica preventiva",
        analyzedPhoto: "Foto Analisada:",
        facialAnalysis: "Paciente Maria - Análise Facial",
        facialImage: "Imagem Facial",
        analysisComplete: "Análise Concluída",
        sogiResults: "Resultados SOGI:",
        highRisk: "Alto Risco",
        moderate: "Moderado",
        low: "Baixo",
        recommendations: "Recomendações Geradas:",
        rec1: "• Suplementação com complexo B e folato",
        rec2: "• Protocolo antioxidante personalizado",
        rec3: "• Acompanhamento em 30 dias",
        rec4: "• Ajustes nutricionais específicos",
        completeAnalysis: "Análise completa realizada em menos de 30 segundos",
        analyzePatients: "Analisar Meus Pacientes",
      },
      security: {
        title: "Segurança e Conformidade Garantidas",
        description:
          "Sua tranquilidade e a de seus pacientes são nossa prioridade. Cumprimos rigorosamente todas as normas de segurança e privacidade.",
        commitment: "Compromisso com a Privacidade",
        privacyText:
          "Nenhuma imagem é armazenada. O processamento é feito em tempo real e os dados são imediatamente descartados após a análise. Apenas os resultados metabólicos são mantidos, sempre com consentimento explícito do paciente e profissional.",
        seals: [
          {
            title: "LGPD Compliant",
            subtitle: "Brasil",
            description:
              "Conformidade total com a Lei Geral de Proteção de Dados",
          },
          {
            title: "HIPAA Compliant",
            subtitle: "EUA",
            description: "Atende aos padrões de privacidade em saúde dos EUA",
          },
          {
            title: "ISO 27001",
            subtitle: "Certificado",
            description: "Padrão internacional de segurança da informação",
          },
          {
            title: "Dados Criptografados",
            subtitle: "256-bit SSL",
            description: "Máxima proteção em todas as transmissões",
          },
          {
            title: "Servidores Seguros",
            subtitle: "AWS/Azure",
            description: "Infraestrutura de nível empresarial",
          },
          {
            title: "Auditoria Externa",
            subtitle: "Anual",
            description: "Verificação independente de segurança",
          },
        ],
      },
      howItWorks: {
        title: "Como o MAP Transforma Segundos em Insights Precisos",
        subtitle:
          "Processo simples e científico que revoluciona a avaliação metabólica",
        steps: [
          {
            title: "CAPTURE",
            subtitle:
              "Paciente faz análise facial em vídeo de onde ele estiver",
            description:
              "Nenhuma imagem é gravada, segue as leis de LGPD Brasil e HIPAA EUA - tecnologia de pletismografia (rPPG + MTC + observação de microexpressões faciais invisíveis a olho humano)",
          },
          {
            title: "PROCESSE",
            subtitle: "IA analisa biomarcadores faciais",
            description: "Algoritmos treinados em milhares de casos",
          },
          {
            title: "AVALIE",
            subtitle: "Relatório SOGI instantâneo",
            description: "4 pilares metabólicos em tempo real",
          },
          {
            title: "ATUE",
            subtitle: "Recomendações personalizadas",
            description: "Plano de ação baseado em evidências",
          },
        ],
      },
      science: {
        title: "Ciência Validada por Estudos de Alto Impacto",
        subtitle:
          "O MAP não é apenas tecnologia - é ciência aplicada. Nossa metodologia está fundamentada em pesquisas peer-reviewed das mais renomadas publicações científicas mundiais.",
        discovery: "Descoberta:",
        application: "Aplicação MAP:",
        studies: [
          {
            title: "Análise de Rede Funcional Metabólica",
            journal: "mSystems (2018)",
            citations: "85 citações",
            finding:
              "O metabolismo da microbiota é mais conservado entre indivíduos humanos do que a composição de espécies",
            application:
              "Validação da abordagem de análise sistêmica para predição metabólica",
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
            linkText: "Fenotipagem facial (Nature Medicine, 2019)",
          },
        ],
      },
      benefits: {
        title: "O Que Você Conquista nos Primeiros 7 Dias",
        subtitle:
          "Resultados imediatos que transformam sua prática profissional",
        items: [
          {
            title: "Consultas 60% mais eficientes",
            description:
              "Substitua horas de exames laboratoriais por 30 segundos de análise. Otimize seu tempo e atenda mais pacientes com a mesma qualidade.",
          },
          {
            title: "Aumente sua receita média por paciente em R$ 300",
            description:
              "Cobre mais por consultas diferenciadas com tecnologia de ponta. Nossos usuários reportam aumento médio de R$ 300 por consulta.",
          },
          {
            title: "Relatórios profissionais que impressionam",
            description:
              "Apresente análises visuais e científicas que demonstram seu expertise. Seus pacientes ficarão impressionados com a precisão.",
          },
          {
            title: "Diferenciação competitiva no mercado",
            description:
              "Seja o primeiro na sua região a oferecer análise metabólica por IA. Destaque-se da concorrência com tecnologia exclusiva.",
          },
          {
            title: "Precisão Científica Validada",
            description:
              "91% de acurácia baseada em estudos Nature Medicine. Tome decisões clínicas com a confiança que só a ciência pode oferecer.",
          },
          {
            title: "Credibilidade Profissional Elevada",
            description:
              "Baseie suas recomendações em dados científicos sólidos. Aumente a confiança dos pacientes em seus protocolos de tratamento.",
          },
        ],
      },
      professionals: {
        title: "Para Quem é o Sistema MAP do EssenciaLab?",
        subtitle:
          "Desenvolvido especificamente para profissionais de saúde que buscam excelência, precisão e diferenciação em suas práticas clínicas.",
        howMapHelps: "Como o MAP ajuda:",
        notFound: "Não encontrou sua especialidade?",
        notFoundText:
          "O MAP é uma ferramenta versátil que se adapta a qualquer área da saúde. Se você trabalha com bem-estar, prevenção ou tratamento, o MAP pode potencializar seus resultados.",
        testFree: "Testar Gratuitamente",
        talkExpert: "Falar com Especialista",
        list: [
          {
            profession: "Nutricionistas",
            description:
              "Crie planos alimentares personalizados baseados em análise metabólica precisa e acompanhe a evolução dos pacientes em tempo real.",
            benefits: [
              "Planos alimentares direcionados",
              "Análise de deficiências nutricionais",
              "Protocolos de suplementação",
            ],
          },
          {
            profession: "Nutrólogos",
            description:
              "Integre dados metabólicos com prescrições médicas para tratamentos mais assertivos e baseados em evidências científicas.",
            benefits: [
              "Prescrições personalizadas",
              "Diagnósticos mais precisos",
              "Acompanhamento clínico avançado",
            ],
          },
          {
            profession: "Psicólogos e Terapeutas",
            description:
              "Compreenda a conexão mente-corpo através de biomarcadores que revelam o impacto do estresse e emoções no metabolismo.",
            benefits: [
              "Análise psicossomática",
              "Protocolos integrais",
              "Acompanhamento holístico",
            ],
          },
          {
            profession: "Fisioterapeutas",
            description:
              "Desenvolva programas de reabilitação considerando o perfil metabólico para otimizar a recuperação e performance.",
            benefits: [
              "Reabilitação personalizada",
              "Protocolos de recuperação",
              "Análise de performance",
            ],
          },
          {
            profession: "Educadores Físicos",
            description:
              "Crie treinos e programas de condicionamento baseados no perfil metabólico individual de cada aluno ou atleta.",
            benefits: [
              "Treinos personalizados",
              "Otimização de performance",
              "Prevenção de lesões",
            ],
          },
          {
            profession: "Consultores de Bem-Estar",
            description:
              "Ofereça consultorias completas integrando análise metabólica com estratégias de lifestyle e longevidade.",
            benefits: [
              "Consultorias premium",
              "Programas de longevidade",
              "Coaching de saúde",
            ],
          },
          {
            profession: "Biomédicos",
            description:
              "Correlacione exames laboratoriais com análise facial para interpretações mais completas e precisas.",
            benefits: [
              "Interpretação avançada",
              "Correlação de dados",
              "Laudos diferenciados",
            ],
          },
          {
            profession: "Médicos Generalistas",
            description:
              "Tenha uma ferramenta de triagem rápida para identificar riscos metabólicos e direcionar investigações.",
            benefits: [
              "Triagem eficiente",
              "Medicina preventiva",
              "Diagnóstico precoce",
            ],
          },
          {
            profession: "Terapeutas Integrativos",
            description:
              "Combine análise metabólica com terapias naturais para abordagens verdadeiramente personalizadas.",
            benefits: [
              "Terapias direcionadas",
              "Medicina integrativa",
              "Protocolos naturais",
            ],
          },
        ],
      },
      form: {
        title: "Comece Seu Cadastro e Receba o Guia",
        guideTitle: '"Guia de 7 dias para hábitos essenciais"',
        description:
          "Cadastre-se abaixo para acessar a ferramenta EssenciaLab MAP gratuitamente por 7 dias. Após seu primeiro login, você receberá o guia para transformar a saúde dos seus pacientes com hábitos baseados em evidências.",
        whatYouWillDiscover: "O que você vai descobrir:",
        items: [
          "7 hábitos fundamentais validados cientificamente",
          "Protocolo dia-a-dia para implementação",
          "Métricas para acompanhar resultados",
          "Cases reais de transformação",
          "Checklist de implementação prática",
        ],
        spamFree: "100% livre de spam",
        spamFreeText:
          "Respeitamos sua privacidade. Você pode cancelar a qualquer momento.",
        emailLabel: "Seu melhor email profissional",
        emailPlaceholder: "contato@mariluciorocha.com",
        specialtyLabel: "Sua especialidade",
        specialtyPlaceholder: "Selecione sua área",
        submit: "Cadastrar e Acessar a Ferramenta",
        joinText:
          "Junte-se a 2.347 profissionais que já transformaram suas práticas",
      },
      testimonials: {
        title: "Profissionais de Saúde Já Estão Transformando Suas Práticas",
        stats: [
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
        ],
        items: [
          {
            name: "Dr. H.C. Marilúcio Rocha",
            role: "Naturólogo",
            content:
              "Já usei vários sistemas para automatizar meu atendimentos, mas o MAP é, de longe, o mais eficaz. Ele me ajuda a entender melhor as necessidades dos meus pacientes e a personalizar os tratamentos. O melhor de tudo: acompanhamento altamente personalizado e eficiente.",
          },
          {
            name: "Prof. Carlos Santos",
            role: "Nutrólogo",
            content:
              "Como professor universitário, sempre busquei ferramentas baseadas em evidências. O MAP supera minhas expectativas - é ciência aplicada na prática clínica.",
          },
          {
            name: "Wellington C. Dias",
            role: "Terapeuta Iridólogo",
            content:
              "Sabe aquela sensação de estar sobrecarregado tentando montar um plano de tratamento certeiro, analisando exames por horas e mesmo assim às vezes não ver resultados que o paciente espera? Eu também vivia isso até conhecer o MAP do EssenciaLab. É como ter um copiloto clínico: a ferramenta me ajuda a interpretar exames com precisão, sugere condutas eficazes e ainda respeita o toque humano, posso ajustar conforme a individualidade de cada pessoa. Hoje meus atendimentos são mais rápidos, mais assertivos e com muito mais resultados.",
          },
        ],
      },
      faq: {
        title: "Perguntas Frequentes",
        subtitle:
          "Esclarecemos as principais dúvidas dos profissionais de saúde",
        stillQuestions: "Ainda tem dúvidas?",
        talkExpert: "Falar com Especialista",
        items: [
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
            question: "É realmente científico? Posso confiar nos resultados?",
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
        ],
      },
      finalCTA: {
        title: "Comece Sua Transformação Hoje",
        subtitle:
          "Não deixe seus concorrentes saírem na frente. A revolução da avaliação metabólica já começou, e você pode fazer parte dela agora mesmo.",
        trialTitle: "TRIAL GRATUITO 7 DIAS",
        features: [
          "Acesso completo à plataforma",
          "Análises ilimitadas",
          "Suporte técnico dedicado",
          "Material científico exclusivo",
          "Cadastro gratuito sem compromisso algum",
          "Não precisa colocar dados de cartão para testar a ferramenta",
        ],
        cta: "Garantir Minha Vaga Agora",
        guarantee:
          "Satisfação garantida ou seu dinheiro de volta • Vagas limitadas para o trial gratuito",
      },
    },
    en: {
      hero: {
        badge: "✓ Based on 728+ Scientific Citations",
        title1: "91% Accuracy",
        title2: "in Metabolic Risk Prediction",
        description:
          "The first tool that combines facial analysis with metabolic biomarkers, based on high-impact scientific studies. Transform how you assess your patients' health.",
        stats: [
          "17,000+ images analyzed",
          "Validated Nature Medicine",
          "728+ scientific citations",
          "Approved by professionals",
        ],
        cta1: "Immediate Access - 7 Days Free",
        cta2: "Watch Demo",
        materialsBtn: "📦 Marketing Kit",
        videoTitle: "Video: How MAP Works",
        videoSubtitle: "26:36 • Practical demonstration",
        videoIframeTitle: "MAP - Complete Demonstration",
        videoIframeTitle2: "How MAP Works - Demonstration",
      },
      demo: {
        selectTitle: "Choose Your Demo",
        selectDescription:
          "Select the type of demonstration that best suits your profile",
        videoTitle: "Video Demo",
        videoDescription: "Watch a complete demonstration of MAP in action",
        videoModalTitle: "Video Demo",
        videoModalDescription:
          "Watch a complete demonstration of MAP in operation",
        videoComplete:
          "Complete video showing MAP in real action with patients",
        videoCTA: "I Want to Test for Free",
        interactiveTitle: "Interactive Tour",
        interactiveDescription: "Explore the interface step by step",
        interactiveModalTitle: "Interactive Tour",
        interactiveModalDescription:
          "Step {step} of 6: Explore how MAP works in practice",
        caseStudyTitle: "Clinical Case",
        caseStudyDescription: "See a real analysis example",
        caseStudyModalTitle: "Real Clinical Case",
        caseStudyModalDescription: "See a real metabolic analysis example",
        step: "Step",
        of: "of",
        previous: "Previous",
        back: "Back",
        next: "Next",
        startTrial: "Start Free Trial",
        characteristics: "Features:",
        interfaceSimulation: "Interface Simulation",
      },
      interactiveSteps: [
        {
          title: "Image Capture",
          description:
            "The patient accesses the app and performs facial analysis",
          features: [
            "Mobile camera",
            "No special equipment",
            "Non-invasive process",
            "Cutting-edge technology with facial blood flow reading",
          ],
        },
        {
          title: "AI Processing",
          description:
            "Our artificial intelligence analyzes facial biomarkers in seconds",
          features: [
            "Algorithms trained on 17,000+ images",
            "Real-time analysis",
            "91% accuracy",
          ],
        },
        {
          title: "SOGI Report",
          description:
            "Automatic generation of report with the 4 metabolic pillars",
          features: [
            "Submethylation",
            "Oxidation",
            "Glycation",
            "Inflammation",
          ],
        },
        {
          title: "Recommendations",
          description: "Personalized action plan based on results",
          features: [
            "Personalized protocols",
            "Targeted supplementation",
            "Continuous monitoring",
          ],
        },
        {
          title: "Precise Monitoring",
          description: "Continuous monitoring of results and patient evolution",
          features: [
            "Automatic protocol adjustments",
            "Evolution comparison",
            "Metabolic deviation alerts",
          ],
        },
        {
          title: "Precise Analysis - Functional Network",
          description: "Complete mapping of metabolic interactions",
          features: [
            "Systemic health view",
            "Root cause identification",
            "Integrated protocols",
          ],
        },
      ],
      caseStudy: {
        patient: "Patient: Maria, 45 years old",
        request: "Nutritionist requested preventive metabolic analysis",
        analyzedPhoto: "Analyzed Photo:",
        facialAnalysis: "Patient Maria - Facial Analysis",
        facialImage: "Facial Image",
        analysisComplete: "Analysis Complete",
        sogiResults: "SOGI Results:",
        highRisk: "High Risk",
        moderate: "Moderate",
        low: "Low",
        recommendations: "Generated Recommendations:",
        rec1: "• Supplementation with B complex and folate",
        rec2: "• Personalized antioxidant protocol",
        rec3: "• 30-day follow-up",
        rec4: "• Specific nutritional adjustments",
        completeAnalysis: "Complete analysis performed in less than 30 seconds",
        analyzePatients: "Analyze My Patients",
      },
      security: {
        title: "Security and Compliance Guaranteed",
        description:
          "Your peace of mind and that of your patients is our priority. We strictly comply with all security and privacy regulations.",
        commitment: "Privacy Commitment",
        privacyText:
          "No images are stored. Processing is done in real-time and data is immediately discarded after analysis. Only metabolic results are kept, always with explicit consent from patient and professional.",
        seals: [
          {
            title: "LGPD Compliant",
            subtitle: "Brazil",
            description: "Full compliance with the General Data Protection Law",
          },
          {
            title: "HIPAA Compliant",
            subtitle: "USA",
            description: "Meets health privacy standards in the USA",
          },
          {
            title: "ISO 27001",
            subtitle: "Certified",
            description: "International standard for information security",
          },
          {
            title: "Encrypted Data",
            subtitle: "256-bit SSL",
            description: "Maximum protection in all transmissions",
          },
          {
            title: "Secure Servers",
            subtitle: "AWS/Azure",
            description: "Enterprise-level infrastructure",
          },
          {
            title: "External Audit",
            subtitle: "Annual",
            description: "Independent security verification",
          },
        ],
      },
      howItWorks: {
        title: "How MAP Transforms Seconds into Precise Insights",
        subtitle:
          "Simple and scientific process that revolutionizes metabolic assessment",
        steps: [
          {
            title: "CAPTURE",
            subtitle:
              "Patient performs facial analysis via video from wherever they are",
            description:
              "No images are recorded, follows LGPD Brazil and HIPAA USA laws - plethysmography technology (rPPG + MTC + observation of facial microexpressions invisible to the human eye)",
          },
          {
            title: "PROCESS",
            subtitle: "AI analyzes facial biomarkers",
            description: "Algorithms trained on thousands of cases",
          },
          {
            title: "ASSESS",
            subtitle: "Instant SOGI report",
            description: "4 metabolic pillars in real-time",
          },
          {
            title: "ACT",
            subtitle: "Personalized recommendations",
            description: "Evidence-based action plan",
          },
        ],
      },
      science: {
        title: "Science Validated by High-Impact Studies",
        subtitle:
          "MAP is not just technology - it's applied science. Our methodology is based on peer-reviewed research from the world's most renowned scientific publications.",
        discovery: "Finding:",
        application: "MAP Application:",
        studies: [
          {
            title: "Metabolic Functional Network Analysis",
            journal: "mSystems (2018)",
            citations: "85 citations",
            finding:
              "Microbiota metabolism is more conserved among human individuals than species composition",
            application:
              "Validation of the systemic analysis approach for metabolic prediction",
            linkText: "Metabolic functional network (mSystems, 2018)",
          },
          {
            title: "SOGI Biomarkers",
            journal: "Physiological Research (2014)",
            citations: "62 citations",
            finding:
              "AGEs were significantly higher in the +DC group compared to the -DC group",
            application:
              "Scientific evidence of the 4 metabolic pillars (Submethylation, Oxidation, Glycation, Inflammation)",
            linkText: "AGEs Biomarkers (~PLOS ONE, 2014)",
          },
          {
            title: "Predictive Facial Phenotyping",
            journal: "Nature Medicine (2019)",
            citations: "728 citations",
            finding: "91% top-10 accuracy in identifying the correct syndrome",
            application:
              "Validation of facial analysis as a reliable biomarker",
            linkText: "Facial phenotyping (Nature Medicine, 2019)",
          },
        ],
      },
      benefits: {
        title: "What You Achieve in the First 7 Days",
        subtitle: "Immediate results that transform your professional practice",
        items: [
          {
            title: "60% more efficient consultations",
            description:
              "Replace hours of laboratory tests with 30 seconds of analysis. Optimize your time and see more patients with the same quality.",
          },
          {
            title: "Increase your average revenue per patient by $300",
            description:
              "Charge more for differentiated consultations with cutting-edge technology. Our users report an average increase of $300 per consultation.",
          },
          {
            title: "Professional reports that impress",
            description:
              "Present visual and scientific analyses that demonstrate your expertise. Your patients will be impressed with the accuracy.",
          },
          {
            title: "Competitive differentiation in the market",
            description:
              "Be the first in your region to offer AI-powered metabolic analysis. Stand out from the competition with exclusive technology.",
          },
          {
            title: "Validated Scientific Accuracy",
            description:
              "91% accuracy based on Nature Medicine studies. Make clinical decisions with the confidence that only science can provide.",
          },
          {
            title: "Elevated Professional Credibility",
            description:
              "Base your recommendations on solid scientific data. Increase patient confidence in your treatment protocols.",
          },
        ],
      },
      professionals: {
        title: "Who is EssenciaLab's MAP System For?",
        subtitle:
          "Developed specifically for healthcare professionals seeking excellence, precision and differentiation in their clinical practices.",
        howMapHelps: "How MAP helps:",
        notFound: "Didn't find your specialty?",
        notFoundText:
          "MAP is a versatile tool that adapts to any area of health. If you work with wellness, prevention or treatment, MAP can enhance your results.",
        testFree: "Test for Free",
        talkExpert: "Talk to an Expert",
        list: [
          {
            profession: "Nutritionists",
            description:
              "Create personalized dietary plans based on precise metabolic analysis and monitor patient evolution in real-time.",
            benefits: [
              "Targeted dietary plans",
              "Nutritional deficiency analysis",
              "Supplementation protocols",
            ],
          },
          {
            profession: "Nutrologists",
            description:
              "Integrate metabolic data with medical prescriptions for more assertive and scientifically-based treatments.",
            benefits: [
              "Personalized prescriptions",
              "More precise diagnoses",
              "Advanced clinical follow-up",
            ],
          },
          {
            profession: "Psychologists and Therapists",
            description:
              "Understand the mind-body connection through biomarkers that reveal the impact of stress and emotions on metabolism.",
            benefits: [
              "Psychosomatic analysis",
              "Integral protocols",
              "Holistic follow-up",
            ],
          },
          {
            profession: "Physiotherapists",
            description:
              "Develop rehabilitation programs considering the metabolic profile to optimize recovery and performance.",
            benefits: [
              "Personalized rehabilitation",
              "Recovery protocols",
              "Performance analysis",
            ],
          },
          {
            profession: "Physical Educators",
            description:
              "Create training and conditioning programs based on the individual metabolic profile of each student or athlete.",
            benefits: [
              "Personalized training",
              "Performance optimization",
              "Injury prevention",
            ],
          },
          {
            profession: "Wellness Consultants",
            description:
              "Offer complete consultations integrating metabolic analysis with lifestyle and longevity strategies.",
            benefits: [
              "Premium consultations",
              "Longevity programs",
              "Health coaching",
            ],
          },
          {
            profession: "Biomedical Scientists",
            description:
              "Correlate laboratory exams with facial analysis for more complete and precise interpretations.",
            benefits: [
              "Advanced interpretation",
              "Data correlation",
              "Differentiated reports",
            ],
          },
          {
            profession: "General Practitioners",
            description:
              "Have a quick screening tool to identify metabolic risks and direct investigations.",
            benefits: [
              "Efficient screening",
              "Preventive medicine",
              "Early diagnosis",
            ],
          },
          {
            profession: "Integrative Therapists",
            description:
              "Combine metabolic analysis with natural therapies for truly personalized approaches.",
            benefits: [
              "Targeted therapies",
              "Integrative medicine",
              "Natural protocols",
            ],
          },
        ],
      },
      form: {
        title: "Start Your Registration and Receive the Guide",
        guideTitle: '"7-Day Guide to Essential Habits"',
        description:
          "Register below to access the EssenciaLab MAP tool free for 7 days. After your first login, you will receive the guide to transform your patients' health with evidence-based habits.",
        whatYouWillDiscover: "What you will discover:",
        items: [
          "7 scientifically validated fundamental habits",
          "Day-to-day implementation protocol",
          "Metrics to track results",
          "Real transformation cases",
          "Practical implementation checklist",
        ],
        spamFree: "100% spam-free",
        spamFreeText: "We respect your privacy. You can cancel at any time.",
        emailLabel: "Your best professional email",
        emailPlaceholder: "contact@mariluciorocha.com",
        specialtyLabel: "Your specialty",
        specialtyPlaceholder: "Select your area",
        submit: "Register and Access the Tool",
        joinText:
          "Join 2,347 professionals who have already transformed their practices",
      },
      testimonials: {
        title:
          "Healthcare Professionals Are Already Transforming Their Practices",
        stats: [
          {
            number: "1,347",
            label: "Analyses this week",
            sublabel: "Healthcare professionals using MAP",
          },
          {
            number: "94%",
            label: "User satisfaction",
            sublabel: "Would recommend to colleagues",
          },
          {
            number: "4.8/5",
            label: "Average rating",
            sublabel: "Based on 147 reviews",
          },
          {
            number: "310%",
            label: "Average ROI",
            sublabel: "In the first month of use",
          },
        ],
        items: [
          {
            name: "Dr. H.C. Marilúcio Rocha",
            role: "Naturopath",
            content:
              "I've used several systems to automate my appointments, but MAP is, by far, the most effective. It helps me better understand my patients' needs and personalize treatments. Best of all: highly personalized and efficient follow-up.",
          },
          {
            name: "Prof. Carlos Santos",
            role: "Nutrologist",
            content:
              "As a university professor, I always looked for evidence-based tools. MAP exceeds my expectations - it's science applied in clinical practice.",
          },
          {
            name: "Wellington C. Dias",
            role: "Iridology Therapist",
            content:
              "You know that feeling of being overwhelmed trying to put together a precise treatment plan, analyzing exams for hours and still sometimes not seeing the results the patient expects? I also experienced that until I discovered EssenciaLab's MAP. It's like having a clinical co-pilot: the tool helps me interpret exams with precision, suggests effective approaches, and still respects the human touch; I can adjust it according to each person's individuality. Today my appointments are faster, more assertive, and with much more results.",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "We clarify the main questions from healthcare professionals",
        stillQuestions: "Still have questions?",
        talkExpert: "Talk to an Expert",
        items: [
          {
            question: "Is it hard to use? Do I need technical knowledge?",
            answer:
              "Absolutely not! The interface is intuitive and was developed with healthcare professionals in mind. In just 5 minutes you'll master the tool completely. We offer complete training and dedicated technical support.",
          },
          {
            question: "Does it work in my specialty?",
            answer:
              "Yes! MAP is successfully used by nutritionists, nutrologists, holistic therapists, biomedical scientists, wellness consultants, doctors, nurses and other professionals. Metabolic analysis is universal and applicable to all areas of health.",
          },
          {
            question: "Is it really scientific? Can I trust the results?",
            answer:
              "Absolutely! Our methodology is based on 728+ scientific citations, including studies published in Nature Medicine. The 91% accuracy has been validated in hundreds of real cases.",
          },
          {
            question: "What if I don't like it? Can I cancel?",
            answer:
              "Of course! We offer a 7-day free trial with no commitment. You don't even need to enter card details. If you're not satisfied, you'll still have free access to pre-defined protocols. 100% satisfaction guarantee.",
          },
          {
            question: "How does support work? Will I be alone?",
            answer:
              "Never! We have dedicated technical support and personalized follow-up. You will never be alone on this journey.",
          },
        ],
      },
      finalCTA: {
        title: "Start Your Transformation Today",
        subtitle:
          "Don't let your competitors get ahead. The metabolic assessment revolution has already begun, and you can be part of it right now.",
        trialTitle: "7-DAY FREE TRIAL",
        features: [
          "Full platform access",
          "Unlimited analyses",
          "Dedicated technical support",
          "Exclusive scientific material",
          "Free registration with no commitment",
          "No need to enter card details to test the tool",
        ],
        cta: "Secure My Spot Now",
        guarantee:
          "Satisfaction guaranteed or your money back • Limited spots for the free trial",
      },
    },
    es: {
      hero: {
        badge: "✓ Basado en 728+ Citas Científicas",
        title1: "91% de Precisión",
        title2: "en la Predicción de Riesgos Metabólicos",
        description:
          "La primera herramienta que combina análisis facial con biomarcadores metabólicos, basada en estudios científicos de alto impacto. Transforma la forma en que evalúas la salud de tus pacientes.",
        stats: [
          "17.000+ imágenes analizadas",
          "Validado Nature Medicine",
          "728+ citas científicas",
          "Aprobado por profesionales",
        ],
        cta1: "Acceso Inmediato - 7 Días Gratis",
        cta2: "Ver Demostración",
        materialsBtn: "📦 Kit de Materiales",
        videoTitle: "Video: Cómo Funciona el MAP",
        videoSubtitle: "26:36 • Demostración práctica",
        videoIframeTitle: "MAP - Demostración Completa",
        videoIframeTitle2: "Cómo Funciona el MAP - Demostración",
      },
      demo: {
        selectTitle: "Elige Tu Demostración",
        selectDescription:
          "Selecciona el tipo de demostración que mejor se adapte a tu perfil",
        videoTitle: "Video Demostración",
        videoDescription: "Mira una demostración completa del MAP en acción",
        videoModalTitle: "Video Demostración",
        videoModalDescription:
          "Mira una demostración completa del MAP en funcionamiento",
        videoComplete:
          "Video completo mostrando el MAP en acción real con pacientes",
        videoCTA: "Quiero Probar Gratis",
        interactiveTitle: "Tour Interactivo",
        interactiveDescription: "Explora la interfaz paso a paso",
        interactiveModalTitle: "Tour Interactivo",
        interactiveModalDescription:
          "Paso {step} de 6: Explora cómo funciona el MAP en la práctica",
        caseStudyTitle: "Caso Clínico",
        caseStudyDescription: "Ve un ejemplo real de análisis",
        caseStudyModalTitle: "Caso Clínico Real",
        caseStudyModalDescription: "Ve un ejemplo real de análisis metabólico",
        step: "Paso",
        of: "de",
        previous: "Anterior",
        back: "Volver",
        next: "Siguiente",
        startTrial: "Comenzar Prueba Gratuita",
        characteristics: "Características:",
        interfaceSimulation: "Simulación de Interfaz",
      },
      interactiveSteps: [
        {
          title: "Captura de Imagen",
          description:
            "El paciente accede a la aplicación y realiza el análisis facial",
          features: [
            "Cámara del móvil",
            "Sin equipos especiales",
            "Proceso no invasivo",
            "Tecnología de vanguardia con lectura del flujo sanguíneo facial",
          ],
        },
        {
          title: "Procesamiento IA",
          description:
            "Nuestra inteligencia artificial analiza biomarcadores faciales en segundos",
          features: [
            "Algoritmos entrenados en 17.000+ imágenes",
            "Análisis en tiempo real",
            "Precisión del 91%",
          ],
        },
        {
          title: "Informe SOGI",
          description:
            "Generación automática del informe con los 4 pilares metabólicos",
          features: ["Submetilación", "Oxidación", "Glicación", "Inflamación"],
        },
        {
          title: "Recomendaciones",
          description: "Plan de acción personalizado basado en los resultados",
          features: [
            "Protocolos personalizados",
            "Suplementación dirigida",
            "Seguimiento continuo",
          ],
        },
        {
          title: "Seguimiento Preciso",
          description:
            "Monitoreo continuo de resultados y evolución del paciente",
          features: [
            "Ajustes automáticos en el protocolo",
            "Comparativo de evolución",
            "Alertas de desviaciones metabólicas",
          ],
        },
        {
          title: "Análisis Preciso - Red Funcional",
          description: "Mapeo completo de las interacciones metabólicas",
          features: [
            "Visión sistémica de la salud",
            "Identificación de causas raíz",
            "Protocolos integrados",
          ],
        },
      ],
      caseStudy: {
        patient: "Paciente: María, 45 años",
        request: "Nutricionista solicitó análisis metabólico preventivo",
        analyzedPhoto: "Foto Analizada:",
        facialAnalysis: "Paciente María - Análisis Facial",
        facialImage: "Imagen Facial",
        analysisComplete: "Análisis Completado",
        sogiResults: "Resultados SOGI:",
        highRisk: "Alto Riesgo",
        moderate: "Moderado",
        low: "Bajo",
        recommendations: "Recomendaciones Generadas:",
        rec1: "• Suplementación con complejo B y folato",
        rec2: "• Protocolo antioxidante personalizado",
        rec3: "• Seguimiento en 30 días",
        rec4: "• Ajustes nutricionales específicos",
        completeAnalysis: "Análisis completo realizado en menos de 30 segundos",
        analyzePatients: "Analizar Mis Pacientes",
      },
      security: {
        title: "Seguridad y Cumplimiento Garantizados",
        description:
          "Tu tranquilidad y la de tus pacientes es nuestra prioridad. Cumplimos estrictamente con todas las normas de seguridad y privacidad.",
        commitment: "Compromiso con la Privacidad",
        privacyText:
          "Ninguna imagen se almacena. El procesamiento se realiza en tiempo real y los datos se descartan inmediatamente después del análisis. Solo se mantienen los resultados metabólicos, siempre con consentimiento explícito del paciente y profesional.",
        seals: [
          {
            title: "LGPD Compliant",
            subtitle: "Brasil",
            description:
              "Cumplimiento total con la Ley General de Protección de Datos",
          },
          {
            title: "HIPAA Compliant",
            subtitle: "EE.UU.",
            description:
              "Cumple con los estándares de privacidad en salud de EE.UU.",
          },
          {
            title: "ISO 27001",
            subtitle: "Certificado",
            description:
              "Estándar internacional de seguridad de la información",
          },
          {
            title: "Datos Cifrados",
            subtitle: "256-bit SSL",
            description: "Máxima protección en todas las transmisiones",
          },
          {
            title: "Servidores Seguros",
            subtitle: "AWS/Azure",
            description: "Infraestructura de nivel empresarial",
          },
          {
            title: "Auditoría Externa",
            subtitle: "Anual",
            description: "Verificación independiente de seguridad",
          },
        ],
      },
      howItWorks: {
        title: "Cómo el MAP Transforma Segundos en Perspectivas Precisas",
        subtitle:
          "Proceso simple y científico que revoluciona la evaluación metabólica",
        steps: [
          {
            title: "CAPTURAR",
            subtitle:
              "El paciente realiza análisis facial por video desde donde esté",
            description:
              "No se graban imágenes, cumple con las leyes LGPD Brasil e HIPAA EE.UU. - tecnología de pletismografía (rPPG + MTC + observación de microexpresiones faciales invisibles al ojo humano)",
          },
          {
            title: "PROCESAR",
            subtitle: "IA analiza biomarcadores faciales",
            description: "Algoritmos entrenados en miles de casos",
          },
          {
            title: "EVALUAR",
            subtitle: "Informe SOGI instantáneo",
            description: "4 pilares metabólicos en tiempo real",
          },
          {
            title: "ACTUAR",
            subtitle: "Recomendaciones personalizadas",
            description: "Plan de acción basado en evidencia",
          },
        ],
      },
      science: {
        title: "Ciencia Validada por Estudios de Alto Impacto",
        subtitle:
          "El MAP no es solo tecnología - es ciencia aplicada. Nuestra metodología está fundamentada en investigaciones revisadas por pares de las publicaciones científicas más renombradas del mundo.",
        discovery: "Hallazgo:",
        application: "Aplicación MAP:",
        studies: [
          {
            title: "Análisis de Red Funcional Metabólica",
            journal: "mSystems (2018)",
            citations: "85 citas",
            finding:
              "El metabolismo de la microbiota es más conservado entre individuos humanos que la composición de especies",
            application:
              "Validación del enfoque de análisis sistémico para predicción metabólica",
            linkText: "Red funcional metabólica (mSystems, 2018)",
          },
          {
            title: "Biomarcadores SOGI",
            journal: "Physiological Research (2014)",
            citations: "62 citas",
            finding:
              "Los AGEs fueron significativamente mayores en el grupo +DC comparado con el -DC",
            application:
              "Evidencia científica de los 4 pilares metabólicos (Submetilación, Oxidación, Glicación, Inflamación)",
            linkText: "Biomarcadores AGEs (~PLOS ONE, 2014)",
          },
          {
            title: "Fenotipaje Facial Predictivo",
            journal: "Nature Medicine (2019)",
            citations: "728 citas",
            finding:
              "91% de precisión top-10 en la identificación del síndrome correcto",
            application:
              "Validación del análisis facial como biomarcador confiable",
            linkText: "Fenotipaje facial (Nature Medicine, 2019)",
          },
        ],
      },
      benefits: {
        title: "Lo Que Logras en los Primeros 7 Días",
        subtitle:
          "Resultados inmediatos que transforman tu práctica profesional",
        items: [
          {
            title: "Consultas 60% más eficientes",
            description:
              "Reemplaza horas de exámenes de laboratorio por 30 segundos de análisis. Optimiza tu tiempo y atiende más pacientes con la misma calidad.",
          },
          {
            title: "Aumenta tu ingreso promedio por paciente en $300",
            description:
              "Cobra más por consultas diferenciadas con tecnología de vanguardia. Nuestros usuarios reportan un aumento promedio de $300 por consulta.",
          },
          {
            title: "Informes profesionales que impresionan",
            description:
              "Presenta análisis visuales y científicos que demuestran tu experiencia. Tus pacientes quedarán impresionados con la precisión.",
          },
          {
            title: "Diferenciación competitiva en el mercado",
            description:
              "Sé el primero en tu región en ofrecer análisis metabólico por IA. Destácate de la competencia con tecnología exclusiva.",
          },
          {
            title: "Precisión Científica Validada",
            description:
              "91% de precisión basada en estudios de Nature Medicine. Toma decisiones clínicas con la confianza que solo la ciencia puede ofrecer.",
          },
          {
            title: "Credibilidad Profesional Elevada",
            description:
              "Basa tus recomendaciones en datos científicos sólidos. Aumenta la confianza de los pacientes en tus protocolos de tratamiento.",
          },
        ],
      },
      professionals: {
        title: "¿Para Quién es el Sistema MAP de EssenciaLab?",
        subtitle:
          "Desarrollado específicamente para profesionales de la salud que buscan excelencia, precisión y diferenciación en sus prácticas clínicas.",
        howMapHelps: "Cómo ayuda el MAP:",
        notFound: "¿No encontraste tu especialidad?",
        notFoundText:
          "El MAP es una herramienta versátil que se adapta a cualquier área de la salud. Si trabajas con bienestar, prevención o tratamiento, el MAP puede potenciar tus resultados.",
        testFree: "Probar Gratis",
        talkExpert: "Hablar con un Experto",
        list: [
          {
            profession: "Nutricionistas",
            description:
              "Crea planes alimentarios personalizados basados en análisis metabólico preciso y monitorea la evolución de los pacientes en tiempo real.",
            benefits: [
              "Planes alimentarios dirigidos",
              "Análisis de deficiencias nutricionales",
              "Protocolos de suplementación",
            ],
          },
          {
            profession: "Nutrólogos",
            description:
              "Integra datos metabólicos con prescripciones médicas para tratamientos más asertivos y basados en evidencia científica.",
            benefits: [
              "Prescripciones personalizadas",
              "Diagnósticos más precisos",
              "Seguimiento clínico avanzado",
            ],
          },
          {
            profession: "Psicólogos y Terapeutas",
            description:
              "Comprende la conexión mente-cuerpo a través de biomarcadores que revelan el impacto del estrés y las emociones en el metabolismo.",
            benefits: [
              "Análisis psicosomático",
              "Protocolos integrales",
              "Seguimiento holístico",
            ],
          },
          {
            profession: "Fisioterapeutas",
            description:
              "Desarrolla programas de rehabilitación considerando el perfil metabólico para optimizar la recuperación y el rendimiento.",
            benefits: [
              "Rehabilitación personalizada",
              "Protocolos de recuperación",
              "Análisis de rendimiento",
            ],
          },
          {
            profession: "Educadores Físicos",
            description:
              "Crea entrenamientos y programas de acondicionamiento basados en el perfil metabólico individual de cada alumno o atleta.",
            benefits: [
              "Entrenamientos personalizados",
              "Optimización de rendimiento",
              "Prevención de lesiones",
            ],
          },
          {
            profession: "Consultores de Bienestar",
            description:
              "Ofrece consultorías completas integrando análisis metabólico con estrategias de estilo de vida y longevidad.",
            benefits: [
              "Consultorías premium",
              "Programas de longevidad",
              "Coaching de salud",
            ],
          },
          {
            profession: "Biomédicos",
            description:
              "Correlaciona exámenes de laboratorio con análisis facial para interpretaciones más completas y precisas.",
            benefits: [
              "Interpretación avanzada",
              "Correlación de datos",
              "Informes diferenciados",
            ],
          },
          {
            profession: "Médicos Generalistas",
            description:
              "Ten una herramienta de triaje rápida para identificar riesgos metabólicos y dirigir investigaciones.",
            benefits: [
              "Triaje eficiente",
              "Medicina preventiva",
              "Diagnóstico temprano",
            ],
          },
          {
            profession: "Terapeutas Integrativos",
            description:
              "Combina análisis metabólico con terapias naturales para enfoques verdaderamente personalizados.",
            benefits: [
              "Terapias dirigidas",
              "Medicina integrativa",
              "Protocolos naturales",
            ],
          },
        ],
      },
      form: {
        title: "Comienza Tu Registro y Recibe la Guía",
        guideTitle: '"Guía de 7 días para hábitos esenciales"',
        description:
          "Regístrate abajo para acceder a la herramienta EssenciaLab MAP gratis por 7 días. Después de tu primer inicio de sesión, recibirás la guía para transformar la salud de tus pacientes con hábitos basados en evidencia.",
        whatYouWillDiscover: "Lo que descubrirás:",
        items: [
          "7 hábitos fundamentales validados científicamente",
          "Protocolo día a día para implementación",
          "Métricas para seguir resultados",
          "Casos reales de transformación",
          "Lista de verificación de implementación práctica",
        ],
        spamFree: "100% libre de spam",
        spamFreeText:
          "Respetamos tu privacidad. Puedes cancelar en cualquier momento.",
        emailLabel: "Tu mejor email profesional",
        emailPlaceholder: "contacto@mariluciorocha.com",
        specialtyLabel: "Tu especialidad",
        specialtyPlaceholder: "Selecciona tu área",
        submit: "Registrarse y Acceder a la Herramienta",
        joinText:
          "Únete a 2.347 profesionales que ya han transformado sus prácticas",
      },
      testimonials: {
        title: "Profesionales de la Salud Ya Están Transformando Sus Prácticas",
        stats: [
          {
            number: "1.347",
            label: "Análisis esta semana",
            sublabel: "Profesionales de salud usando el MAP",
          },
          {
            number: "94%",
            label: "Satisfacción de usuarios",
            sublabel: "Recomendarían a colegas",
          },
          {
            number: "4.8/5",
            label: "Calificación promedio",
            sublabel: "Basado en 147 reseñas",
          },
          {
            number: "310%",
            label: "ROI promedio",
            sublabel: "En el primer mes de uso",
          },
        ],
        items: [
          {
            name: "Dr. H.C. Marilúcio Rocha",
            role: "Naturópata",
            content:
              "Ya he usado varios sistemas para automatizar mis consultas, pero el MAP es, con mucho, el más eficaz. Me ayuda a entender mejor las necesidades de mis pacientes y a personalizar los tratamientos. Lo mejor de todo: seguimiento altamente personalizado y eficiente.",
          },
          {
            name: "Prof. Carlos Santos",
            role: "Nutrólogo",
            content:
              "Como profesor universitario, siempre busqué herramientas basadas en evidencia. El MAP supera mis expectativas - es ciencia aplicada en la práctica clínica.",
          },
          {
            name: "Wellington C. Dias",
            role: "Terapeuta Iridólogo",
            content:
              "¿Conoces esa sensación de estar abrumado intentando armar un plan de tratamiento preciso, analizando exámenes durante horas y aún así a veces no ver los resultados que el paciente espera? Yo también vivía eso hasta conocer el MAP de EssenciaLab. Es como tener un copiloto clínico: la herramienta me ayuda a interpretar exámenes con precisión, sugiere conductas efectivas y aún respeta el toque humano, puedo ajustarlo según la individualidad de cada persona. Hoy mis consultas son más rápidas, más asertivas y con muchos más resultados.",
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle:
          "Aclaramos las principales dudas de los profesionales de la salud",
        stillQuestions: "¿Aún tienes dudas?",
        talkExpert: "Hablar con un Experto",
        items: [
          {
            question: "¿Es difícil de usar? ¿Necesito conocimiento técnico?",
            answer:
              "¡Absolutamente no! La interfaz es intuitiva y fue desarrollada pensando en profesionales de la salud. En solo 5 minutos dominarás completamente la herramienta. Ofrecemos capacitación completa y soporte técnico dedicado.",
          },
          {
            question: "¿Funciona en mi especialidad?",
            answer:
              "¡Sí! El MAP es usado con éxito por nutricionistas, nutrólogos, terapeutas holísticos, biomédicos, consultores de bienestar, médicos, enfermeros y otros profesionales. El análisis metabólico es universal y aplicable a todas las áreas de la salud.",
          },
          {
            question:
              "¿Es realmente científico? ¿Puedo confiar en los resultados?",
            answer:
              "¡Totalmente! Nuestra metodología está basada en 728+ citas científicas, incluyendo estudios publicados en Nature Medicine. La precisión del 91% ha sido validada en cientos de casos reales.",
          },
          {
            question: "¿Y si no me gusta? ¿Puedo cancelar?",
            answer:
              "¡Por supuesto! Ofrecemos 7 días de prueba gratuita sin compromiso. Ni siquiera necesitas poner datos de tarjeta. Si no quedas satisfecho, aún así continuarás teniendo acceso gratuito a los protocolos predefinidos. Garantía de satisfacción 100%.",
          },
          {
            question: "¿Cómo funciona el soporte? ¿Quedaré solo?",
            answer:
              "¡Jamás! Tenemos soporte técnico dedicado y seguimiento personalizado. Nunca estarás solo en este viaje.",
          },
        ],
      },
      finalCTA: {
        title: "Comienza Tu Transformación Hoy",
        subtitle:
          "No dejes que tus competidores se adelanten. La revolución de la evaluación metabólica ya comenzó, y puedes ser parte de ella ahora mismo.",
        trialTitle: "PRUEBA GRATUITA 7 DÍAS",
        features: [
          "Acceso completo a la plataforma",
          "Análisis ilimitados",
          "Soporte técnico dedicado",
          "Material científico exclusivo",
          "Registro gratuito sin compromiso alguno",
          "No necesitas poner datos de tarjeta para probar la herramienta",
        ],
        cta: "Asegurar Mi Lugar Ahora",
        guarantee:
          "Satisfacción garantizada o tu dinero de vuelta • Plazas limitadas para la prueba gratuita",
      },
    },
  };

  const t = content[language] || content.pt;

  // Dados das demonstrações
  const demoTypes = [
    {
      id: "video",
      title: t.demo.videoTitle,
      description: t.demo.videoDescription,
      icon: Video,
      color: "from-red-500 to-red-600",
      duration: "26:36 min",
    },
    {
      id: "interactive",
      title: t.demo.interactiveTitle,
      description: t.demo.interactiveDescription,
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
      duration: "5-10 min",
    },
    {
      id: "case-study",
      title: t.demo.caseStudyTitle,
      description: t.demo.caseStudyDescription,
      icon: FileText,
      color: "from-green-500 to-green-600",
      duration: "3-5 min",
    },
  ];

  // Conteúdo dos passos da demonstração interativa
  const interactiveSteps = t.interactiveSteps.map((step) => ({
    ...step,
    image:
      step.title === "Captura da Imagem" ||
      step.title === "Image Capture" ||
      step.title === "Captura de Imagen"
        ? "/images/scanface.webp"
        : step.title === "Processamento IA" ||
          step.title === "AI Processing" ||
          step.title === "Procesamiento IA"
        ? "/images/iascaning.webp"
        : step.title === "Relatório SOGI" ||
          step.title === "SOGI Report" ||
          step.title === "Informe SOGI"
        ? "/images/sogi.webp"
        : step.title === "Recomendações" ||
          step.title === "Recommendations" ||
          step.title === "Recomendaciones"
        ? "/images/recomenda.webp"
        : step.title === "Acompanhamento Preciso" ||
          step.title === "Precise Monitoring" ||
          step.title === "Seguimiento Preciso"
        ? "/images/acompanha.webp"
        : "/images/teia.webp",
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header language={language} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {t.hero.badge}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {t.hero.title1}
                  </span>
                  <br />
                  {t.hero.title2}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.hero.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {t.hero.stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  onClick={scrollToForm}
                >
                  <span className="relative z-10">{t.hero.cta1}</span>
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Dialog
                  open={isDemoModalOpen}
                  onOpenChange={setIsDemoModalOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                      onClick={openDemoModal}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {t.hero.cta2}
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-2">
                        {!selectedDemoType
                          ? t.demo.selectTitle
                          : selectedDemoType === "video"
                          ? t.demo.videoModalTitle
                          : selectedDemoType === "interactive"
                          ? t.demo.interactiveModalTitle
                          : t.demo.caseStudyModalTitle}
                      </DialogTitle>
                      <DialogDescription className="text-center text-gray-600">
                        {!selectedDemoType
                          ? t.demo.selectDescription
                          : selectedDemoType === "video"
                          ? t.demo.videoModalDescription
                          : selectedDemoType === "interactive"
                          ? t.demo.interactiveModalDescription.replace(
                              "{step}",
                              demoStep
                            )
                          : t.demo.caseStudyModalDescription}
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
                              <div
                                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4`}
                              >
                                <demo.icon className="w-8 h-8 text-white" />
                              </div>
                              <CardTitle className="text-lg">
                                {demo.title}
                              </CardTitle>
                              <CardDescription>
                                {demo.description}
                              </CardDescription>
                              <Badge
                                variant="outline"
                                className="mt-2 w-fit mx-auto"
                              >
                                <Clock className="w-3 h-3 mr-1" />
                                {demo.duration}
                              </Badge>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Demonstração em Vídeo */}
                    {selectedDemoType === "video" && (
                      <div className="mt-6">
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/lzwZuZK_5Ao?rel=0&modestbranding=1&showinfo=0"
                            title={t.hero.videoIframeTitle}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-gray-600 mb-4">
                            {t.demo.videoComplete}
                          </p>
                          <Button
                            onClick={scrollToForm}
                            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                          >
                            {t.demo.videoCTA}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Tour Interativo */}
                    {selectedDemoType === "interactive" && (
                      <div className="mt-6">
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-2">
                              {[1, 2, 3, 4, 5, 6].map((step) => (
                                <div
                                  key={step}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    step <= demoStep
                                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white"
                                      : "bg-gray-200 text-gray-500"
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
                                      e.target.style.display = "none";
                                      e.target.nextSibling.style.display =
                                        "flex";
                                    }}
                                  />
                                  <div
                                    className="w-full h-full flex items-center justify-center text-center text-gray-500"
                                    style={{ display: "none" }}
                                  >
                                    <div>
                                      <Monitor className="w-12 h-12 mx-auto mb-2" />
                                      <p className="text-sm">
                                        {t.demo.interfaceSimulation}
                                      </p>
                                      <p className="text-xs">
                                        {t.demo.step} {demoStep}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-800">
                                    {t.demo.characteristics}
                                  </h4>
                                  {interactiveSteps[demoStep - 1].features.map(
                                    (feature, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center space-x-2"
                                      >
                                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                          {feature}
                                        </span>
                                      </div>
                                    )
                                  )}
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
                            {demoStep === 1 ? t.demo.back : t.demo.previous}
                          </Button>

                          {demoStep < 6 ? (
                            <Button
                              onClick={nextDemoStep}
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                            >
                              {t.demo.next}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          ) : (
                            <Button
                              onClick={scrollToForm}
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                            >
                              {t.demo.startTrial}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Caso Clínico */}
                    {selectedDemoType === "case-study" && (
                      <div className="mt-6">
                        <Card className="mb-6">
                          <CardHeader>
                            <CardTitle className="text-xl">
                              {t.caseStudy.patient}
                            </CardTitle>
                            <CardDescription>
                              {t.caseStudy.request}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">
                                  {t.caseStudy.analyzedPhoto}
                                </h4>
                                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                  <img
                                    src="/images/paciente.webp"
                                    alt={t.caseStudy.facialAnalysis}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.style.display = "none";
                                      e.target.nextSibling.style.display =
                                        "flex";
                                    }}
                                  />
                                  <div
                                    className="w-full h-full flex items-center justify-center text-center text-gray-500"
                                    style={{ display: "none" }}
                                  >
                                    <div>
                                      <Camera className="w-12 h-12 mx-auto mb-2" />
                                      <p className="text-sm">
                                        {t.caseStudy.facialImage}
                                      </p>
                                      <p className="text-xs">
                                        {t.caseStudy.analysisComplete}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-3">
                                  {t.caseStudy.sogiResults}
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                    <span className="text-sm font-medium">
                                      {t.interactiveSteps[2].features[0]}
                                    </span>
                                    <Badge variant="destructive">
                                      {t.caseStudy.highRisk}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                    <span className="text-sm font-medium">
                                      {t.interactiveSteps[2].features[1]}
                                    </span>
                                    <Badge className="bg-yellow-500">
                                      {t.caseStudy.moderate}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                                    <span className="text-sm font-medium">
                                      {t.interactiveSteps[2].features[2]}
                                    </span>
                                    <Badge className="bg-green-600">
                                      {t.caseStudy.low}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                                    <span className="text-sm font-medium">
                                      {t.interactiveSteps[2].features[3]}
                                    </span>
                                    <Badge className="bg-orange-500">
                                      {t.caseStudy.moderate}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">
                                {t.caseStudy.recommendations}
                              </h4>
                              <ul className="text-sm text-blue-700 space-y-1">
                                <li>{t.caseStudy.rec1}</li>
                                <li>{t.caseStudy.rec2}</li>
                                <li>{t.caseStudy.rec3}</li>
                                <li>{t.caseStudy.rec4}</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="text-center">
                          <p className="text-gray-600 mb-4">
                            {t.caseStudy.completeAnalysis}
                          </p>
                          <Button
                            onClick={scrollToForm}
                            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                          >
                            {t.caseStudy.analyzePatients}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                <a
                  href="/materiais/INDICE_MATERIAIS.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(102,126,234,0.3)] hover:shadow-[0_6px_20px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 transition-all duration-200 hover:text-white"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.materialsBtn}
                </a>
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
                          {t.hero.videoTitle}
                        </p>
                        <p className="text-sm text-gray-500">
                          {t.hero.videoSubtitle}
                        </p>
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/lzwZuZK_5Ao?autoplay=1&rel=0&modestbranding=1&showinfo=0"
                        title={t.hero.videoIframeTitle2}
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
              {t.security.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.security.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {t.security.seals.map((sealData, index) => {
              const icons = [
                Shield,
                Lock,
                FileCheck,
                UserCheck,
                Globe,
                CheckCircle,
              ];
              const colors = [
                "green",
                "blue",
                "purple",
                "orange",
                "indigo",
                "teal",
              ];
              const seal = {
                ...sealData,
                icon: icons[index],
                color: colors[index],
              };
              return (
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
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-800">
                  {t.security.commitment}
                </h3>
              </div>
              <p className="text-blue-700 text-sm leading-relaxed">
                {t.security.privacyText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((stepData, index) => {
              const icons = [Camera, Brain, BarChart3, Target];
              const colors = ["blue", "purple", "green", "orange"];
              const step = {
                ...stepData,
                icon: icons[index],
                color: colors[index],
              };
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Base Científica */}
      <section
        id="base-cientifica"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.science.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.science.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.science.studies.map((studyData, index) => {
              const images = [
                "/images/estudos/estudo-1-network-analysis-metabolic.jpeg",
                "/images/estudos/estudo-2-glycation-oxidation-inflammation.png",
                "/images/estudos/estudo-3-facial-phenotyping-deep-learning.png",
              ];
              const links = [
                "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5872302/",
                "https://pubmed.ncbi.nlm.nih.gov/27529340/",
                "https://pubmed.ncbi.nlm.nih.gov/30617323/",
              ];
              const study = {
                ...studyData,
                image: images[index],
                link: links[index],
              };
              return (
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
                        {t.science.discovery}
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        "{study.finding}"
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        {t.science.application}
                      </p>
                      <p className="text-sm text-gray-600">
                        {study.application}
                      </p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.benefits.title}</h2>
            <p className="text-xl text-gray-600">{t.benefits.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.items.map((benefitData, index) => {
              const icons = [Zap, TrendingUp, BarChart3, Award, Target, Shield];
              const colors = [
                "yellow",
                "orange",
                "indigo",
                "purple",
                "blue",
                "green",
              ];
              const benefit = {
                ...benefitData,
                icon: icons[index],
                color: colors[index],
              };
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Para quem é o sistema MAP */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.professionals.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.professionals.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.professionals.list.map((professionalData, index) => {
              const icons = [
                Stethoscope,
                GraduationCap,
                Heart,
                Activity,
                Dumbbell,
                Lightbulb,
                FileCheck,
                UserCheck,
                Shield,
              ];
              const colors = [
                "green",
                "blue",
                "purple",
                "orange",
                "red",
                "indigo",
                "teal",
                "cyan",
                "emerald",
              ];
              const professional = {
                ...professionalData,
                icon: icons[index],
                color: colors[index],
              };
              return (
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
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {t.professionals.howMapHelps}
                      </h4>
                      {professional.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t.professionals.notFound}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.professionals.notFoundText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  {t.professionals.testFree}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5543991246422?text=${encodeURIComponent(
                        language === "pt"
                          ? "Olá! Gostaria de saber como o MAP pode ajudar na minha especialidade."
                          : language === "en"
                          ? "Hello! I would like to know how MAP can help in my specialty."
                          : "¡Hola! Me gustaría saber cómo el MAP puede ayudar en mi especialidad."
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.professionals.talkExpert}
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
                  {t.form.title}
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  <strong>{t.form.guideTitle}</strong>
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {t.form.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {t.form.whatYouWillDiscover}
                  </h3>
                  <div className="space-y-3">
                    {t.form.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">{t.form.spamFree}</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      {t.form.spamFreeText}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="email-guia"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.form.emailLabel}
                      </label>
                      <Input
                        type="email"
                        id="email-guia"
                        name="email"
                        placeholder={t.form.emailPlaceholder}
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full"
                        disabled={formStatus === "loading" || formStatus === "success"}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="especialidade-guia"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {t.form.specialtyLabel}
                      </label>
                      <Select
                        value={formEspecialidade}
                        onValueChange={setFormEspecialidade}
                        disabled={formStatus === "loading" || formStatus === "success"}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={t.form.specialtyPlaceholder}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nutricionista">
                            Nutricionista
                          </SelectItem>
                          <SelectItem value="nutrologo">Nutrólogo</SelectItem>
                          <SelectItem value="biomedico">Biomédico</SelectItem>
                          <SelectItem value="medico">Médico</SelectItem>
                          <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                          <SelectItem value="fisioterapeuta">
                            Fisioterapeuta
                          </SelectItem>
                          <SelectItem value="psicologo">Psicólogo</SelectItem>
                          <SelectItem value="naturopata">Naturopata</SelectItem>
                          <SelectItem value="iridologo">Iridólogo</SelectItem>
                          <SelectItem value="aromaterapeuta">
                            Aromaterapeuta
                          </SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={formStatus === "loading" || formStatus === "success"}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                    >
                      {formStatus === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          {language === "es" ? "Enviando..." : language === "en" ? "Submitting..." : "Enviando..."}
                        </span>
                      ) : formStatus === "success" ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          {language === "es" ? "¡Registrado!" : language === "en" ? "Registered!" : "Cadastrado!"}
                        </span>
                      ) : (
                        t.form.submit
                      )}
                    </Button>

                    {formStatus === "error" && (
                      <p className="text-sm text-red-600 text-center">{formError}</p>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                      {t.form.joinText}
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
            <h2 className="text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.testimonials.items.map((testimonial, index) => (
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
                    {[...Array(5)].map((_, i) => (
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
            {t.testimonials.stats.map((stat, index) => (
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
            <h2 className="text-4xl font-bold mb-4">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-6">
            {t.faq.items.map((faq, index) => (
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
            <p className="text-gray-600 mb-4">{t.faq.stillQuestions}</p>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open(
                  `https://wa.me/5543991246422?text=${encodeURIComponent(
                    language === "pt"
                      ? "Olá! Tenho interesse no MAP e gostaria de falar com um especialista."
                      : language === "en"
                      ? "Hello! I am interested in MAP and would like to speak with an expert."
                      : "¡Hola! Tengo interés en el MAP y me gustaría hablar con un experto."
                  )}`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.faq.talkExpert}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.finalCTA.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.finalCTA.subtitle}</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">{t.finalCTA.trialTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {t.finalCTA.features.map((feature, index) => (
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
            <span className="relative z-10">{t.finalCTA.cta}</span>
            <ArrowRight className="w-6 h-6 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <p className="text-sm mt-6 opacity-75">{t.finalCTA.guarantee}</p>
        </div>
      </section>

      <Footer
        language={language}
        onOpenDemo={openDemoModal}
        onScrollToForm={scrollToForm}
        onScrollToScience={scrollToScience}
      />
    </div>
  );
}

export default MapLandingPage;
