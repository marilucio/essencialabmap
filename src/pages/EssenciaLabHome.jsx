import "../App.css";
import { useState, useEffect } from "react";
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
  Sparkles,
  Gift,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Moon,
  Leaf,
  Lightbulb,
  ExternalLink,
  Brain,
  Smile,
  Activity,
  FlaskConical,
  Clock,
} from "lucide-react";

function EssenciaLabHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('lang') || 'pt';

  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang });
  };

  // Inicializa a biblioteca de animações AOS
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

  // Conteúdo multilíngue
  const content = {
    pt: {
      nav: {
        features: "Como Funciona",
        benefits: "Benefícios",
        allFeatures: "Funcionalidades",
        faq: "Dúvidas",
        cta: "Começar Grátis",
      },
      hero: {
        badge: "🎁 Acesso Gratuito + Presente Exclusivo",
        title: "Dobre a venda de óleos essenciais",
        titleHighlight: "com inteligência artificial",
        subtitle:
          "Análise facial com IA que recomenda os óleos perfeitos para cada pessoa em segundos. Impressione seus clientes e aumente suas vendas naturalmente.",
        cta1: "Quero Começar Agora",
        cta2: "Ver Como Funciona",
        features: [
          "✨ Análise Facial Instantânea",
          "🎯 Recomendações Personalizadas",
          "💰 Aumente Suas Vendas",
          "🎁 Método CALMA de Presente",
        ],
        iphoneNote: "iPhone: Acesse pelo navegador Chrome - funciona perfeitamente!",
      },
      problem: {
        badge: "😰 Você Se Identifica?",
        title: "Você já passou por isso?",
        subtitle:
          "Se você é consultor doTERRA ou ama óleos essenciais, provavelmente já viveu essas situações...",
        pains: [
          {
            icon: "😓",
            title: "Dificuldade de Vender",
            description:
              "Você sabe que os óleos funcionam, mas tem dificuldade de explicar qual produto é ideal para cada pessoa.",
          },
          {
            icon: "🤔",
            title: "Falta de Autoridade",
            description:
              "Seus clientes pedem indicações, mas você fica inseguro sobre qual óleo recomendar para cada situação específica.",
          },
          {
            icon: "😔",
            title: "Vendas Inconsistentes",
            description:
              "Alguns meses você vende bem, outros nem tanto. Você gostaria de ter um método previsível para aumentar as vendas.",
          },
          {
            icon: "💔",
            title: "Falta de Diferenciação",
            description:
              "Há tantos consultores... Como se destacar da multidão e ser lembrado pelos clientes?",
          },
        ],
        conclusion: {
          text: "Se você se identificou com pelo menos 2 dessas situações,",
          highlight: "o EssenciaLab foi feito para você!",
        },
      },
      quickFaq: {
        title: "Tem dúvidas sobre como usar o EssenciaLab?",
        subtitle: "Veja as respostas para as perguntas mais comuns de consultores",
        button: "Ver Dúvidas Frequentes",
      },
      solution: {
        badge: "✨ A Solução",
        title: "Análise Facial com IA que Recomenda Óleos Essenciais",
        subtitle:
          "Tecnologia de ponta que analisa 478 pontos faciais e indica os óleos perfeitos para cada pessoa",
        description:
          "Com o EssenciaLab, você oferece uma experiência única: análise facial em segundos que mostra sinais de fadiga, stress, emoções e recomenda os óleos ideais. Seus clientes ficam impressionados e você vende com autoridade!",
        how: {
          title: "Como Funciona em 3 Passos Simples",
          steps: [
            {
              number: "1",
              icon: Camera,
              title: "Vídeo de 30 Segundos",
              description:
                "Captura ao vivo com o celular onde são realizadas 8 tipos de leitura diferentes em tempo real. É rápido e simples!",
            },
            {
              number: "2",
              icon: Brain,
              title: "IA Analisa Instantaneamente",
              description:
                "Nossa inteligência artificial analisa 478 pontos faciais e detecta sinais de stress, fadiga, emoções e desequilíbrios durante a captura.",
            },
            {
              number: "3",
              icon: Leaf,
              title: "Relatório Autoexplicativo",
              description:
                "É emitido um relatório completo com recomendações dos principais óleos essenciais e suplementos personalizados para aquela pessoa.",
            },
          ],
        },
        cta: "Quero Usar Análise Facial com IA",
      },
      benefits: {
        badge: "💰 Benefícios",
        title: "Por Que Consultores doTERRA Amam o EssenciaLab",
        subtitle:
          "Veja como a análise facial com IA transforma a forma de vender óleos essenciais",
        list: [
          {
            icon: Target,
            title: "Recomendações Precisas",
            description:
              "Nunca mais fique na dúvida sobre qual óleo indicar. A IA analisa e recomenda com base em dados científicos.",
          },
          {
            icon: TrendingUp,
            title: "Aumente Suas Vendas",
            description:
              "Clientes impressionados compram mais. O relatório personalizado cria desejo natural pelos produtos.",
          },
          {
            icon: Award,
            title: "Autoridade Profissional",
            description:
              "Destaque-se como um consultor diferenciado que usa tecnologia de ponta para atender melhor.",
          },
          {
            icon: Users,
            title: "Cliente Satisfeito",
            description:
              "Quando a pessoa recebe recomendações específicas para ela, a experiência é transformadora e ela volta!",
          },
          {
            icon: Zap,
            title: "Rápido e Prático",
            description:
              "Análise completa em segundos. Perfeito para encontros, palestras e atendimentos individuais.",
          },
          {
            icon: Heart,
            title: "Conexão Genuína",
            description:
              "Mostre que você se importa de verdade oferecendo uma análise personalizada única para cada pessoa.",
          },
        ],
      },
      gift: {
        badge: "🎁 Presente Exclusivo",
        title: "Ganhe o Método CALMA Grátis",
        subtitle:
          "Ao criar sua conta gratuita, você recebe de presente o Método CALMA - para você ou seus clientes",
        description:
          "Acorda de madrugada com o coração disparado? Sua mente não desliga à noite? O Método CALMA é um protocolo natural desenvolvido por naturopata para acalmar a ansiedade noturna e melhorar o sono em minutos.",
        features: [
          {
            icon: "📋",
            title: "Protocolo CALMA#",
            description: "Técnica de 5 passos para acalmar crises de ansiedade",
          },
          {
            icon: "✅",
            title: "Checklist 21 Dias",
            description: "Rotina anti-ansiedade dia a dia",
          },
          {
            icon: "🥗",
            title: "Guia Nutricional",
            description: "Alimentação que acalma naturalmente",
          },
        ],
        pains: [
          "Acordar de madrugada com coração disparado",
          "Mente que não desliga à noite",
          "Noites em claro sem conseguir dormir",
          "Sensação de que vai enlouquecer",
        ],
        cta: "Quero o Método CALMA Grátis",
      },
      forProfessionals: {
        badge: "🏥 Para Profissionais da Saúde",
        title: "Sistema MAP Completo",
        subtitle:
          "Aromaterapeutas e terapeutas: leve seu atendimento a outro nível",
        description:
          "Se você é aromaterapeuta, naturopata ou terapeuta holístico, o Sistema MAP oferece ferramentas profissionais completas para avaliação metabólica, protocolos terapêuticos avançados e acompanhamento detalhado de pacientes.",
        features: [
          "Avaliação metabólica completa (SOGI)",
          "Biblioteca de protocolos terapêuticos",
          "Teia funcional de sistemas corporais",
          "Gestão profissional de pacientes",
          "Relatórios detalhados em PDF",
        ],
        cta: "Conhecer o Sistema MAP Completo",
        link: "/map",
      },
      testimonials: {
        badge: "💚 Depoimentos",
        title: "O Que Consultores e Clientes Dizem",
        subtitle: "Veja como o EssenciaLab está transformando vidas",
        list: [
          {
            name: "Ana Costa",
            role: "Consultora doTERRA",
            location: "Belo Horizonte",
            text: "Minhas vendas triplicaram depois que comecei a usar a análise facial! Meus clientes ficam impressionados e me veem como uma profissional de verdade.",
            rating: 5,
          },
          {
            name: "Carlos Mendes",
            role: "Consultor Wellness",
            location: "São Paulo",
            text: "Finalmente encontrei uma forma de me diferenciar dos outros consultores. A análise facial é meu cartão de visitas agora!",
            rating: 5,
          },
          {
            name: "Juliana Silva",
            role: "Usuária de Óleos",
            location: "Rio de Janeiro",
            text: "Pela primeira vez recebi recomendações específicas para MIM! Foi incrível ver no relatório exatamente o que meu corpo precisava.",
            rating: 5,
          },
        ],
      },
      faq: {
        badge: "❓ Dúvidas Frequentes",
        title: "Respostas para Suas Principais Dúvidas",
        subtitle: "Consultores e amantes de óleos essenciais têm essas mesmas perguntas. Veja as respostas completas:",
        questions: [
          {
            q: "Eu não entendo nada de tecnologia, tenho medo de travar na hora",
            a: "O EssenciaLab foi feito exatamente para pessoas que têm receio de tecnologia — com fluxos simples, passo a passo, e apoio em português. Usar o EssenciaLab é como usar o Waze: você não precisa entender o mapa, só seguir o caminho. A Lúcia, de 53 anos, nunca tinha usado um app além do WhatsApp e hoje faz duas palestras por semana aumentando suas vendas em mais de 80%. Você já usa celular, WhatsApp e Instagram todos os dias — aqui a tecnologia está te fazendo ganhar dinheiro!",
          },
          {
            q: "Não tenho clientes para fazer esse tipo de apresentação",
            a: "Se você ainda não tem clientes, esse é o motivo perfeito para começar! Pesquisas mostram que 68% das primeiras vendas vêm do círculo de convivência: amigos, família, colegas, igreja, vizinhos. A Thaís começou sem clientes, marcou um encontro com 6 mulheres da igreja, e 4 saíram com kits comprados. Hoje ela tem 3 grupos por semana. Você não precisa de uma lista gigante — apenas 5 a 10 pessoas certas para ativar um efeito dominó. O que está faltando não é cliente, é convite com clareza!",
          },
          {
            q: "Tenho vergonha de falar em público",
            a: "Segundo pesquisas, 41% das pessoas têm medo de falar em público, mas quando têm um roteiro claro e apoio visual, esse medo cai drasticamente. Você não fala para multidões — são pequenos grupos de 5 a 10 pessoas. E o foco não está em você, está no relatório que cada pessoa recebe. A Daniela, do interior de MG, tremia só de pensar em apresentar. Começou com 3 amigas na sala de casa e hoje faz isso toda semana. Você já posta stories e grava reels — falar em grupo não é diferente, só tem uma estrutura que facilita tudo!",
          },
          {
            q: "Produtos personalizados realmente vendem mais?",
            a: "Sim! Pesquisas mostram que produtos personalizados têm até 300% mais chance de conversão do que recomendações genéricas. O EssenciaLab entrega clareza automaticamente — e quando o cliente percebe clareza no diagnóstico, ele compra mais. A Ana, consultora há 2 anos, sempre reclamava que não vendia. Depois de três encontros com análise facial, já tinha multiplicado por quatro seu investimento. É caro comparado a quê? Ao valor de continuar sem vender? Cada protocolo pode gerar venda imediata, recompra e indicação.",
          },
          {
            q: "Como a análise facial funciona?",
            a: "Usando a câmera do seu celular, nossa tecnologia de IA detecta 478 pontos faciais e analisa assimetrias, sinais de fadiga, stress e emoções. Com base nisso, recomenda os óleos essenciais mais adequados para cada pessoa. Tudo sem sensores físicos! A análise leva segundos e impressiona qualquer cliente.",
          },
          {
            q: "Funciona com qualquer marca de óleos?",
            a: "Sim! Embora muitos consultores doTERRA usem o EssenciaLab, as recomendações funcionam para qualquer marca de óleos essenciais terapêuticos de qualidade.",
          },
          {
            q: "Preciso saber muito sobre óleos para usar?",
            a: "Não! O EssenciaLab foi feito exatamente para facilitar sua vida. Mesmo se você está começando, a IA faz as recomendações baseadas em ciência. Você só precisa seguir as orientações. O app trabalha por você, não contra você!",
          },
          {
            q: "Posso usar em encontros e palestras?",
            a: "Com certeza! Muitos consultores usam a análise facial em encontros, palestras e eventos. É um diferencial incrível que atrai atenção e gera vendas naturalmente. Você transforma um encontro informal em uma máquina de atração e conversão!",
          },
          {
            q: "O que é o Método CALMA?",
            a: "É um protocolo natural desenvolvido por naturopata para acalmar crises de ansiedade noturna e melhorar o sono em minutos. Você ganha de presente ao criar sua conta - são 3 ebooks com técnicas validadas cientificamente: Protocolo CALMA#, Checklist 21 Dias e Guia Nutricional Anti-Ansiedade. Se você acorda de madrugada com coração disparado ou tem mente que não desliga à noite, esse presente é para você!",
          },
          {
            q: "O que acontece se eu continuar vendendo do jeito antigo?",
            a: "Se você continuar evitando tecnologia e não usar ferramentas modernas, vai continuar sendo 'mais um consultor' entre centenas. O mercado está mudando rápido — quem não acompanha, fica para trás. A procrastinação sempre custa mais caro que o investimento. Cada semana sem o método significa vendas perdidas e oportunidades desperdiçadas. A vergonha passa, mas o arrependimento de não ter começado fica!",
          },
        ],
      },
      cta: {
        badge: "🚀 Comece Agora",
        title: "Pronto para Dobrar Suas Vendas?",
        subtitle:
          "Junte-se a centenas de consultores que já transformaram seus negócios com análise facial de óleos essenciais",
        features: [
          "✨ Acesso gratuito",
          "🎁 Método CALMA de presente",
          "📱 Use em qualquer celular",
          "🇧🇷 Suporte em português",
        ],
        cta1: "Criar Minha Conta Grátis",
        cta2: "Ver Demonstração",
      },
    },
    en: {
      nav: {
        features: "How It Works",
        benefits: "Benefits",
        allFeatures: "Features",
        faq: "FAQ",
        cta: "Get Started Free",
      },
      hero: {
        badge: "🎁 Free Access + Exclusive Gift",
        title: "Double your essential oils sales",
        titleHighlight: "with artificial intelligence",
        subtitle:
          "AI-powered facial analysis that recommends the perfect oils for each person in seconds. Impress your clients and increase sales naturally.",
        cta1: "I Want to Start Now",
        cta2: "See How It Works",
        features: [
          "✨ Instant Facial Analysis",
          "🎯 Personalized Recommendations",
          "💰 Increase Your Sales",
          "🎁 CALM Method as Gift",
        ],
        iphoneNote: "iPhone: Access via Chrome browser - works perfectly!",
      },
      problem: {
        badge: "😰 Do You Identify?",
        title: "Have you been through this?",
        subtitle:
          "If you're a doTERRA consultant or love essential oils, you've probably experienced these situations...",
        pains: [
          {
            icon: "😓",
            title: "Difficulty Selling",
            description:
              "You know oils work, but struggle to explain which product is ideal for each person.",
          },
          {
            icon: "🤔",
            title: "Lack of Authority",
            description:
              "Your clients ask for recommendations, but you feel insecure about which oil to recommend for each specific situation.",
          },
          {
            icon: "😔",
            title: "Inconsistent Sales",
            description:
              "Some months you sell well, others not so much. You'd like to have a predictable method to increase sales.",
          },
          {
            icon: "💔",
            title: "Lack of Differentiation",
            description:
              "There are so many consultants... How to stand out from the crowd and be remembered by clients?",
          },
        ],
        conclusion: {
          text: "If you identified with at least 2 of these situations,",
          highlight: "EssenciaLab was made for you!",
        },
      },
      quickFaq: {
        title: "Have questions about how to use EssenciaLab?",
        subtitle: "See the answers to the most common questions from consultants",
        button: "View FAQ",
      },
      solution: {
        badge: "✨ The Solution",
        title: "AI Facial Analysis that Recommends Essential Oils",
        subtitle:
          "Cutting-edge technology that analyzes 478 facial points and indicates the perfect oils for each person",
        description:
          "With EssenciaLab, you offer a unique experience: facial analysis in seconds that shows signs of fatigue, stress, emotions and recommends ideal oils. Your clients are impressed and you sell with authority!",
        how: {
          title: "How It Works in 3 Simple Steps",
          steps: [
            {
              number: "1",
              icon: Camera,
              title: "30-Second Video",
              description:
                "Live capture with your phone where 8 different types of readings are performed in real-time. It's fast and simple!",
            },
            {
              number: "2",
              icon: Brain,
              title: "AI Analyzes Instantly",
              description:
                "Our artificial intelligence analyzes 478 facial points and detects signs of stress, fatigue, emotions and imbalances during capture.",
            },
            {
              number: "3",
              icon: Leaf,
              title: "Self-Explanatory Report",
              description:
                "A complete report is issued with recommendations of the main essential oils and personalized supplements for that person.",
            },
          ],
        },
        cta: "I Want to Use AI Facial Analysis",
      },
      benefits: {
        badge: "💰 Benefits",
        title: "Why doTERRA Consultants Love EssenciaLab",
        subtitle:
          "See how AI facial analysis transforms the way essential oils are sold",
        list: [
          {
            icon: Target,
            title: "Accurate Recommendations",
            description:
              "Never wonder again which oil to recommend. AI analyzes and recommends based on scientific data.",
          },
          {
            icon: TrendingUp,
            title: "Increase Your Sales",
            description:
              "Impressed clients buy more. The personalized report creates natural desire for products.",
          },
          {
            icon: Award,
            title: "Professional Authority",
            description:
              "Stand out as a differentiated consultant who uses cutting-edge technology to serve better.",
          },
          {
            icon: Users,
            title: "Satisfied Client",
            description:
              "When a person receives specific recommendations for them, the experience is transformative and they come back!",
          },
          {
            icon: Zap,
            title: "Fast and Practical",
            description:
              "Complete analysis in seconds. Perfect for meetings, presentations and individual consultations.",
          },
          {
            icon: Heart,
            title: "Genuine Connection",
            description:
              "Show you really care by offering a unique personalized analysis for each person.",
          },
        ],
      },
      gift: {
        badge: "🎁 Exclusive Gift",
        title: "Get the CALM Method for Free",
        subtitle:
          "When you create your free account, you receive the CALM Method as a gift - for you or your clients",
        description:
          "Wake up in the middle of the night with your heart racing? Your mind won't turn off at night? The CALM Method is a natural protocol developed by a naturopath to calm nighttime anxiety and improve sleep in minutes.",
        features: [
          {
            icon: "📋",
            title: "CALM# Protocol",
            description: "5-step technique to calm anxiety crises",
          },
          {
            icon: "✅",
            title: "21-Day Checklist",
            description: "Day-to-day anti-anxiety routine",
          },
          {
            icon: "🥗",
            title: "Nutritional Guide",
            description: "Food that naturally calms",
          },
        ],
        pains: [
          "Waking up in the middle of the night with racing heart",
          "Mind that won't turn off at night",
          "Sleepless nights without being able to sleep",
          "Feeling like you're going crazy",
        ],
        cta: "I Want the Free CALM Method",
      },
      forProfessionals: {
        badge: "🏥 For Health Professionals",
        title: "Complete MAP System",
        subtitle:
          "Aromatherapists and therapists: take your practice to the next level",
        description:
          "If you're an aromatherapist, naturopath or holistic therapist, the MAP System offers complete professional tools for metabolic assessment, advanced therapeutic protocols and detailed patient follow-up.",
        features: [
          "Complete metabolic assessment (SOGI)",
          "Library of therapeutic protocols",
          "Functional web of body systems",
          "Professional patient management",
          "Detailed PDF reports",
        ],
        cta: "Learn About the Complete MAP System",
        link: "/map",
      },
      testimonials: {
        badge: "💚 Testimonials",
        title: "What Consultants and Clients Say",
        subtitle: "See how EssenciaLab is transforming lives",
        list: [
          {
            name: "Ana Costa",
            role: "doTERRA Consultant",
            location: "Belo Horizonte",
            text: "My sales tripled after I started using facial analysis! My clients are impressed and see me as a real professional.",
            rating: 5,
          },
          {
            name: "Carlos Mendes",
            role: "Wellness Consultant",
            location: "São Paulo",
            text: "I finally found a way to stand out from other consultants. Facial analysis is my business card now!",
            rating: 5,
          },
          {
            name: "Juliana Silva",
            role: "Essential Oils User",
            location: "Rio de Janeiro",
            text: "For the first time I received specific recommendations for ME! It was amazing to see in the report exactly what my body needed.",
            rating: 5,
          },
        ],
      },
      faq: {
        badge: "❓ Frequently Asked Questions",
        title: "Answers to Your Main Questions",
        subtitle: "Consultants and essential oil lovers have these same questions. See the complete answers:",
        questions: [
          {
            q: "I don't understand technology, I'm afraid of getting stuck",
            a: "EssenciaLab was made exactly for people who are afraid of technology — with simple flows, step by step, and support in English. Using EssenciaLab is like using Waze: you don't need to understand the map, just follow the path. Lucia, 53, had never used an app besides WhatsApp and now does two presentations per week increasing her sales by over 80%. You already use your phone, WhatsApp and Instagram every day — here technology is making you money!",
          },
          {
            q: "I don't have clients for this type of presentation",
            a: "If you don't have clients yet, this is the perfect reason to start! Research shows that 68% of first sales come from your social circle: friends, family, colleagues, church, neighbors. Thais started without clients, scheduled a meeting with 6 women from church, and 4 left with purchased kits. Today she has 3 groups per week. You don't need a huge list — just 5 to 10 right people to activate a domino effect. What's missing isn't clients, it's a clear invitation!",
          },
          {
            q: "I'm embarrassed to speak in public",
            a: "According to research, 41% of people are afraid of public speaking, but when they have a clear script and visual support, this fear drops drastically. You don't speak to crowds — it's small groups of 5 to 10 people. And the focus isn't on you, it's on the report each person receives. Daniela, from the interior of MG, trembled just thinking about presenting. She started with 3 friends in her living room and now does this every week. You already post stories and record reels — speaking in a group is no different, it just has a structure that makes everything easier!",
          },
          {
            q: "Do personalized products really sell more?",
            a: "Yes! Research shows that personalized products have up to 300% more chance of conversion than generic recommendations. EssenciaLab delivers clarity automatically — and when the client perceives clarity in the diagnosis, they buy more. Ana, a consultant for 2 years, always complained she didn't sell. After three meetings with facial analysis, she had already multiplied her investment by four. Is it expensive compared to what? To the value of continuing without selling? Each protocol can generate immediate sale, repurchase and referral.",
          },
          {
            q: "How does facial analysis work?",
            a: "Using your phone's camera, our AI technology detects 478 facial points and analyzes asymmetries, signs of fatigue, stress and emotions. Based on this, it recommends the most suitable essential oils for each person. All without physical sensors! The analysis takes seconds and impresses any client.",
          },
          {
            q: "Does it work with any brand of oils?",
            a: "Yes! Although many doTERRA consultants use EssenciaLab, the recommendations work for any brand of quality therapeutic essential oils.",
          },
          {
            q: "Do I need to know a lot about oils to use it?",
            a: "No! EssenciaLab was made exactly to make your life easier. Even if you're just starting, AI makes recommendations based on science. You just need to follow the guidelines. The app works for you, not against you!",
          },
          {
            q: "Can I use it in meetings and presentations?",
            a: "Absolutely! Many consultants use facial analysis in meetings, presentations and events. It's an incredible differentiator that attracts attention and generates sales naturally. You transform an informal meeting into an attraction and conversion machine!",
          },
          {
            q: "What is the CALM Method?",
            a: "It's a natural protocol developed by a naturopath to calm nighttime anxiety crises and improve sleep in minutes. You get it as a gift when you create your account - 3 ebooks with scientifically validated techniques: CALM# Protocol, 21-Day Checklist and Anti-Anxiety Nutritional Guide. If you wake up in the middle of the night with racing heart or have a mind that won't turn off at night, this gift is for you!",
          },
          {
            q: "What happens if I keep selling the old way?",
            a: "If you keep avoiding technology and don't use modern tools, you'll continue being 'just another consultant' among hundreds. The market is changing fast — those who don't keep up, fall behind. Procrastination always costs more than investment. Each week without the method means lost sales and wasted opportunities. Shame passes, but regret for not starting stays!",
          },
        ],
      },
      cta: {
        badge: "🚀 Start Now",
        title: "Ready to Double Your Sales?",
        subtitle:
          "Join hundreds of consultants who have already transformed their businesses with essential oil facial analysis",
        features: [
          "✨ Free access",
          "🎁 CALM Method as gift",
          "📱 Use on any phone",
          "🇺🇸 English support",
        ],
        cta1: "Create My Free Account",
        cta2: "See Demonstration",
      },
    },
    es: {
      nav: {
        features: "Cómo Funciona",
        benefits: "Beneficios",
        allFeatures: "Funcionalidades",
        faq: "Preguntas",
        cta: "Comenzar Gratis",
      },
      hero: {
        badge: "🎁 Acceso Gratuito + Regalo Exclusivo",
        title: "Duplica tus ventas de aceites esenciales",
        titleHighlight: "con inteligencia artificial",
        subtitle:
          "Análisis facial con IA que recomienda los aceites perfectos para cada persona en segundos. Impresiona a tus clientes y aumenta tus ventas naturalmente.",
        cta1: "Quiero Comenzar Ahora",
        cta2: "Ver Cómo Funciona",
        features: [
          "✨ Análisis Facial Instantáneo",
          "🎯 Recomendaciones Personalizadas",
          "💰 Aumenta Tus Ventas",
          "🎁 Método CALMA de Regalo",
        ],
        iphoneNote: "iPhone: Accede por el navegador Chrome - ¡funciona perfectamente!",
      },
      problem: {
        badge: "😰 ¿Te Identificas?",
        title: "¿Ya has pasado por esto?",
        subtitle:
          "Si eres consultor doTERRA o amas los aceites esenciales, probablemente ya has vivido estas situaciones...",
        pains: [
          {
            icon: "😓",
            title: "Dificultad para Vender",
            description:
              "Sabes que los aceites funcionan, pero tienes dificultad para explicar qué producto es ideal para cada persona.",
          },
          {
            icon: "🤔",
            title: "Falta de Autoridad",
            description:
              "Tus clientes piden recomendaciones, pero te sientes inseguro sobre qué aceite recomendar para cada situación específica.",
          },
          {
            icon: "😔",
            title: "Ventas Inconsistentes",
            description:
              "Algunos meses vendes bien, otros no tanto. Te gustaría tener un método predecible para aumentar las ventas.",
          },
          {
            icon: "💔",
            title: "Falta de Diferenciación",
            description:
              "Hay tantos consultores... ¿Cómo destacarse de la multitud y ser recordado por los clientes?",
          },
        ],
        conclusion: {
          text: "Si te identificaste con al menos 2 de estas situaciones,",
          highlight: "¡EssenciaLab fue hecho para ti!",
        },
      },
      quickFaq: {
        title: "¿Tienes dudas sobre cómo usar EssenciaLab?",
        subtitle: "Ve las respuestas a las preguntas más comunes de consultores",
        button: "Ver Preguntas Frecuentes",
      },
      solution: {
        badge: "✨ La Solución",
        title: "Análisis Facial con IA que Recomienda Aceites Esenciales",
        subtitle:
          "Tecnología de punta que analiza 478 puntos faciales e indica los aceites perfectos para cada persona",
        description:
          "Con EssenciaLab, ofreces una experiencia única: análisis facial en segundos que muestra signos de fatiga, estrés, emociones y recomienda los aceites ideales. ¡Tus clientes quedan impresionados y tú vendes con autoridad!",
        how: {
          title: "Cómo Funciona en 3 Pasos Simples",
          steps: [
            {
              number: "1",
              icon: Camera,
              title: "Video de 30 Segundos",
              description:
                "Captura en vivo con tu celular donde se realizan 8 tipos de lectura diferentes en tiempo real. ¡Es rápido y simple!",
            },
            {
              number: "2",
              icon: Brain,
              title: "IA Analiza Instantáneamente",
              description:
                "Nuestra inteligencia artificial analiza 478 puntos faciales y detecta signos de estrés, fatiga, emociones y desequilibrios durante la captura.",
            },
            {
              number: "3",
              icon: Leaf,
              title: "Informe Autoexplicativo",
              description:
                "Se emite un informe completo con recomendaciones de los principales aceites esenciales y suplementos personalizados para esa persona.",
            },
          ],
        },
        cta: "Quiero Usar Análisis Facial con IA",
      },
      benefits: {
        badge: "💰 Beneficios",
        title: "Por Qué los Consultores doTERRA Aman EssenciaLab",
        subtitle:
          "Ve cómo el análisis facial con IA transforma la forma de vender aceites esenciales",
        list: [
          {
            icon: Target,
            title: "Recomendaciones Precisas",
            description:
              "Nunca más dudes sobre qué aceite indicar. La IA analiza y recomienda basándose en datos científicos.",
          },
          {
            icon: TrendingUp,
            title: "Aumenta Tus Ventas",
            description:
              "Los clientes impresionados compran más. El informe personalizado crea deseo natural por los productos.",
          },
          {
            icon: Award,
            title: "Autoridad Profesional",
            description:
              "Destácate como un consultor diferenciado que usa tecnología de punta para atender mejor.",
          },
          {
            icon: Users,
            title: "Cliente Satisfecho",
            description:
              "Cuando una persona recibe recomendaciones específicas para ella, la experiencia es transformadora y ¡vuelve!",
          },
          {
            icon: Zap,
            title: "Rápido y Práctico",
            description:
              "Análisis completo en segundos. Perfecto para encuentros, charlas y consultas individuales.",
          },
          {
            icon: Heart,
            title: "Conexión Genuina",
            description:
              "Muestra que realmente te importa ofreciendo un análisis personalizado único para cada persona.",
          },
        ],
      },
      gift: {
        badge: "🎁 Regalo Exclusivo",
        title: "Gana el Método CALMA Gratis",
        subtitle:
          "Al crear tu cuenta gratuita, recibes de regalo el Método CALMA - para ti o tus clientes",
        description:
          "¿Te despiertas de madrugada con el corazón acelerado? ¿Tu mente no se apaga por la noche? El Método CALMA es un protocolo natural desarrollado por un naturópata para calmar la ansiedad nocturna y mejorar el sueño en minutos.",
        features: [
          {
            icon: "📋",
            title: "Protocolo CALMA#",
            description: "Técnica de 5 pasos para calmar crisis de ansiedad",
          },
          {
            icon: "✅",
            title: "Checklist 21 Días",
            description: "Rutina anti-ansiedad día a día",
          },
          {
            icon: "🥗",
            title: "Guía Nutricional",
            description: "Alimentación que calma naturalmente",
          },
        ],
        pains: [
          "Despertarse de madrugada con corazón acelerado",
          "Mente que no se apaga por la noche",
          "Noches en vela sin poder dormir",
          "Sensación de que vas a enloquecer",
        ],
        cta: "Quiero el Método CALMA Gratis",
      },
      forProfessionals: {
        badge: "🏥 Para Profesionales de la Salud",
        title: "Sistema MAP Completo",
        subtitle:
          "Aromaterapeutas y terapeutas: lleva tu atención a otro nivel",
        description:
          "Si eres aromaterapeuta, naturópata o terapeuta holístico, el Sistema MAP ofrece herramientas profesionales completas para evaluación metabólica, protocolos terapéuticos avanzados y seguimiento detallado de pacientes.",
        features: [
          "Evaluación metabólica completa (SOGI)",
          "Biblioteca de protocolos terapéuticos",
          "Red funcional de sistemas corporales",
          "Gestión profesional de pacientes",
          "Informes detallados en PDF",
        ],
        cta: "Conocer el Sistema MAP Completo",
        link: "/map",
      },
      testimonials: {
        badge: "💚 Testimonios",
        title: "Lo Que Dicen Consultores y Clientes",
        subtitle: "Ve cómo EssenciaLab está transformando vidas",
        list: [
          {
            name: "Ana Costa",
            role: "Consultora doTERRA",
            location: "Belo Horizonte",
            text: "¡Mis ventas se triplicaron después de comenzar a usar el análisis facial! Mis clientes quedan impresionados y me ven como una profesional de verdad.",
            rating: 5,
          },
          {
            name: "Carlos Mendes",
            role: "Consultor Wellness",
            location: "São Paulo",
            text: "¡Finalmente encontré una forma de destacarme de otros consultores. El análisis facial es mi tarjeta de presentación ahora!",
            rating: 5,
          },
          {
            name: "Juliana Silva",
            role: "Usuaria de Aceites",
            location: "Rio de Janeiro",
            text: "¡Por primera vez recibí recomendaciones específicas para MÍ! Fue increíble ver en el informe exactamente lo que mi cuerpo necesitaba.",
            rating: 5,
          },
        ],
      },
      faq: {
        badge: "❓ Preguntas Frecuentes",
        title: "Respuestas a Tus Principales Dudas",
        subtitle: "Los consultores y amantes de aceites esenciales tienen estas mismas preguntas. Ve las respuestas completas:",
        questions: [
          {
            q: "No entiendo nada de tecnología, tengo miedo de quedarme trabado",
            a: "EssenciaLab fue hecho exactamente para personas que tienen miedo de la tecnología — con flujos simples, paso a paso, y apoyo en español. Usar EssenciaLab es como usar Waze: no necesitas entender el mapa, solo seguir el camino. Lucía, de 53 años, nunca había usado una app además de WhatsApp y hoy hace dos charlas por semana aumentando sus ventas en más del 80%. Ya usas celular, WhatsApp e Instagram todos los días — ¡aquí la tecnología te está haciendo ganar dinero!",
          },
          {
            q: "No tengo clientes para este tipo de presentación",
            a: "¡Si aún no tienes clientes, esta es la razón perfecta para comenzar! Las investigaciones muestran que el 68% de las primeras ventas vienen del círculo de convivencia: amigos, familia, colegas, iglesia, vecinos. Thaís comenzó sin clientes, marcó un encuentro con 6 mujeres de la iglesia, y 4 salieron con kits comprados. Hoy tiene 3 grupos por semana. No necesitas una lista gigante — solo 5 a 10 personas correctas para activar un efecto dominó. ¡Lo que falta no es cliente, es invitación con claridad!",
          },
          {
            q: "Tengo vergüenza de hablar en público",
            a: "Según investigaciones, el 41% de las personas tienen miedo de hablar en público, pero cuando tienen un guion claro y apoyo visual, ese miedo cae drásticamente. No hablas para multitudes — son pequeños grupos de 5 a 10 personas. Y el foco no está en ti, está en el informe que cada persona recibe. Daniela, del interior de MG, temblaba solo de pensar en presentar. Comenzó con 3 amigas en la sala de casa y hoy hace esto toda la semana. Ya publicas stories y grabas reels — hablar en grupo no es diferente, ¡solo tiene una estructura que facilita todo!",
          },
          {
            q: "¿Los productos personalizados realmente venden más?",
            a: "¡Sí! Las investigaciones muestran que los productos personalizados tienen hasta 300% más probabilidad de conversión que las recomendaciones genéricas. EssenciaLab entrega claridad automáticamente — y cuando el cliente percibe claridad en el diagnóstico, compra más. Ana, consultora hace 2 años, siempre se quejaba de que no vendía. Después de tres encuentros con análisis facial, ya había multiplicado su inversión por cuatro. ¿Es caro comparado con qué? ¿Con el valor de continuar sin vender? Cada protocolo puede generar venta inmediata, recompra e indicación.",
          },
          {
            q: "¿Cómo funciona el análisis facial?",
            a: "Usando la cámara de tu celular, nuestra tecnología de IA detecta 478 puntos faciales y analiza asimetrías, signos de fatiga, estrés y emociones. Basándose en esto, recomienda los aceites esenciales más adecuados para cada persona. ¡Todo sin sensores físicos! El análisis toma segundos e impresiona a cualquier cliente.",
          },
          {
            q: "¿Funciona con cualquier marca de aceites?",
            a: "¡Sí! Aunque muchos consultores doTERRA usan EssenciaLab, las recomendaciones funcionan para cualquier marca de aceites esenciales terapéuticos de calidad.",
          },
          {
            q: "¿Necesito saber mucho sobre aceites para usar?",
            a: "¡No! EssenciaLab fue hecho exactamente para facilitar tu vida. Incluso si estás comenzando, la IA hace las recomendaciones basadas en ciencia. Solo necesitas seguir las orientaciones. ¡La app trabaja por ti, no contra ti!",
          },
          {
            q: "¿Puedo usar en encuentros y charlas?",
            a: "¡Por supuesto! Muchos consultores usan el análisis facial en encuentros, charlas y eventos. Es un diferencial increíble que atrae atención y genera ventas naturalmente. ¡Transformas un encuentro informal en una máquina de atracción y conversión!",
          },
          {
            q: "¿Qué es el Método CALMA?",
            a: "Es un protocolo natural desarrollado por un naturópata para calmar crisis de ansiedad nocturna y mejorar el sueño en minutos. Lo obtienes de regalo al crear tu cuenta - son 3 ebooks con técnicas validadas científicamente: Protocolo CALMA#, Checklist 21 Días y Guía Nutricional Anti-Ansiedad. ¡Si te despiertas de madrugada con corazón acelerado o tienes mente que no se apaga por la noche, este regalo es para ti!",
          },
          {
            q: "¿Qué pasa si sigo vendiendo del modo antiguo?",
            a: "Si sigues evitando la tecnología y no usas herramientas modernas, seguirás siendo 'otro consultor más' entre cientos. El mercado está cambiando rápido — quien no acompaña, se queda atrás. La procrastinación siempre cuesta más caro que la inversión. Cada semana sin el método significa ventas perdidas y oportunidades desperdiciadas. ¡La vergüenza pasa, pero el arrepentimiento de no haber comenzado se queda!",
          },
        ],
      },
      cta: {
        badge: "🚀 Comienza Ahora",
        title: "¿Listo para Duplicar Tus Ventas?",
        subtitle:
          "Únete a cientos de consultores que ya transformaron sus negocios con análisis facial de aceites esenciales",
        features: [
          "✨ Acceso gratuito",
          "🎁 Método CALMA de regalo",
          "📱 Usa en cualquier celular",
          "🇪🇸 Soporte en español",
        ],
        cta1: "Crear Mi Cuenta Gratuita",
        cta2: "Ver Demostración",
      },
    },
  };

  const t = content[language] || content.pt;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      <Header language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className="text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Badge className="mb-6 text-sm px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 border-0 hover:from-green-600 hover:to-emerald-700">
                {t.hero.badge}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t.hero.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                {t.hero.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col gap-4 items-center lg:items-start max-w-md">
                <a
                  href="https://play.google.com/store/apps/details?id=site.essencialab.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Disponível na</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center lg:text-left w-full">
                  <p className="text-sm text-gray-700">
                    <span className="text-2xl mr-2">📱</span>
                    <span dangerouslySetInnerHTML={{
                      __html: t.hero.iphoneNote
                        .replace(/(iPhone:)/gi, '<strong class="text-blue-700">$1</strong>')
                        .replace(/(Chrome)/gi, '<strong class="text-blue-700">$1</strong>')
                    }} />
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Camera className="h-24 w-24 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-2">
                      Análise Facial com IA
                    </h3>
                    <p className="text-green-100">
                      Recomendações de óleos em segundos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access to FAQ */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.quickFaq.title}
              </h3>
              <p className="text-gray-600">
                {t.quickFaq.subtitle}
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg whitespace-nowrap"
              onClick={() => scrollToSection("faq")}
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              {t.quickFaq.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section - Identification */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">
              {t.problem.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.problem.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.problem.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.problem.pains.map((pain, index) => (
              <Card
                key={index}
                className="border-l-4 border-red-400 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{pain.icon}</div>
                  <CardTitle className="text-xl">{pain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{pain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-lg text-gray-700 font-medium">
              {t.problem.conclusion.text}{" "}
              <span className="text-green-600 font-bold">
                {t.problem.conclusion.highlight}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              {t.solution.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.solution.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {t.solution.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.solution.description}
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="mb-16">
            <h3
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              {t.solution.how.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {t.solution.how.steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <Card className="border-2 border-green-200 hover:border-green-400 transition-all h-full">
                      <CardHeader className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                          <IconComponent className="h-10 w-10 text-white" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {step.number}
                          </div>
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-center leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
              onClick={() =>
                window.open("https://app.essencialab.site", "_blank")
              }
            >
              {t.solution.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              {t.benefits.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.benefits.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.list.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
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

      {/* Gift Section - Método CALMA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 bg-white text-purple-700 hover:bg-purple-50">
              {t.gift.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.gift.title}
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {t.gift.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Description */}
            <div data-aos="fade-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <Moon className="h-16 w-16 mb-6 text-purple-200" />
                <h3 className="text-2xl font-bold mb-4">
                  Acorda de Madrugada com Coração Disparado?
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  {t.gift.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-purple-200">
                    Se você já passou por:
                  </p>
                  {t.gift.pains.map((pain, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - What's Included */}
            <div data-aos="fade-left" data-aos-delay="200">
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Gift className="h-8 w-8 text-purple-600" />
                    <CardTitle className="text-2xl">
                      O Que Você Recebe:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {t.gift.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg"
                      >
                        <div className="text-3xl">{feature.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                    onClick={() =>
                      window.open("https://app.essencialab.site", "_blank")
                    }
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    {t.gift.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Professionals Section - Sistema MAP */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              {t.forProfessionals.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.forProfessionals.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.forProfessionals.subtitle}
            </p>
          </div>

          <Card
            className="overflow-hidden border-0 shadow-2xl"
            data-aos="zoom-in"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
                <FlaskConical className="h-12 w-12 mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4">Sistema MAP</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {t.forProfessionals.description}
                </p>
                <ul className="space-y-4">
                  {t.forProfessionals.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                <Activity className="h-16 w-16 text-blue-600 mb-6" />
                <h4 className="text-2xl font-bold mb-4 text-gray-900">
                  Ferramentas Profissionais Completas
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ideal para aromaterapeutas e terapeutas que desejam oferecer
                  um atendimento diferenciado com avaliação metabólica completa
                  e protocolos avançados.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg text-base"
                  onClick={() =>
                    (window.location.href = t.forProfessionals.link)
                  }
                >
                  {t.forProfessionals.cta}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              {t.testimonials.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.list.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>
                        {testimonial.role} • {testimonial.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              {t.faq.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.faq.title}
            </h2>
            {t.faq.subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t.faq.subtitle}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-green-500 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{item.q}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed pl-8">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center" data-aos="zoom-in">
            <Badge className="mb-6 bg-white text-green-700 hover:bg-green-50 text-sm px-4 py-2">
              {t.cta.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {t.cta.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white justify-center md:justify-start"
                >
                  <CheckCircle className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-white text-green-700 hover:bg-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() =>
                  window.open("https://app.essencialab.site", "_blank")
                }
              >
                <Sparkles className="mr-2 h-6 w-6" />
                {t.cta.cta1}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default EssenciaLabHome;
