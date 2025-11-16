import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  Shield, 
  CheckCircle, 
  User, 
  FileText, 
  Settings, 
  Zap,
  Heart,
  Brain,
  Camera,
  Download,
  Play,
  Lock,
  Globe,
  Leaf
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CentralDeAjuda() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('lang') || 'pt';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLanguageChange = (newLang) => {
    setSearchParams({ lang: newLang });
  };

  const content = {
    pt: {
      title: 'Central de Ajuda',
      subtitle: 'EssenciaLab',
      description: 'Encontre respostas para suas dúvidas sobre o EssenciaLab, desde os primeiros passos até funcionalidades avançadas.',
      badge: '💚 Suporte Especializado',
      searchPlaceholder: 'Buscar por palavra-chave...',
      categories: [
        { id: 'all', name: 'Todas' },
        { id: 'getting-started', name: 'Primeiros Passos' },
        { id: 'technical', name: 'Técnico' },
        { id: 'features', name: 'Funcionalidades' },
        { id: 'account', name: 'Conta' }
      ],
      benefitsTitle: 'O Que o EssenciaLab Oferece Gratuitamente',
      benefitsSubtitle: 'Acesso completo a ferramentas de bem-estar e autoconhecimento',
      benefits: [
        {
          title: 'Análise Facial com IA',
          description: 'Tecnologia MediaPipe do Google com 478 pontos faciais detectados. Recomendações personalizadas de óleos essenciais.'
        },
        {
          title: 'Monitoramento de Saúde',
          description: 'Frequência cardíaca, HRV, pressão arterial e sinais vitais medidos pela câmera - sem sensores!'
        },
        {
          title: 'Autoconhecimento Profundo',
          description: 'Teste Big Five, Roda das Emoções, análise de desenvolvimento pessoal e perfil hormonal feminino.'
        },
        {
          title: 'Protocolos de Óleos Essenciais',
          description: 'Biblioteca completa de protocolos naturais de Aromaterapia e Naturopatia para diversas condições.'
        },
        {
          title: 'Cursos de Aromaterapia',
          description: 'Aprenda com Marilúcio Rocha (20+ anos). Certificados incluídos em todos os cursos.'
        },
        {
          title: 'Upload de Exames',
          description: 'Digitalize e interprete seus exames médicos com IA. Entenda seus números em linguagem clara.'
        }
      ],
      benefitsCTA: 'Começar Grátis Agora',
      faqTitle: 'Perguntas Frequentes',
      faqCount: (n) => `${n} ${n === 1 ? 'pergunta encontrada' : 'perguntas encontradas'}`,
      noResults: 'Nenhuma pergunta encontrada',
      noResultsDesc: 'Tente usar outros termos de busca ou entre em contato conosco',
      contactTitle: 'Ainda Precisa de Ajuda?',
      contactSubtitle: 'Nossa equipe especializada está pronta para atender você',
      email: 'Email',
      emailResponse: 'Resposta em até 24 horas',
      emailDesc: 'Para dúvidas técnicas, suporte ou questões sobre sua conta',
      phone: 'Telefone',
      phoneResponse: 'Atendimento direto',
      phoneDesc: 'Para suporte imediato e orientações personalizadas',
      whatsapp: 'WhatsApp',
      whatsappResponse: 'Chat em tempo real',
      whatsappDesc: 'Para conversas rápidas e esclarecimentos instantâneos',
      whatsappAction: 'Abrir WhatsApp',
      techTitle: 'Informações Técnicas',
      techSubtitle: 'Detalhes importantes sobre o funcionamento do EssenciaLab',
      techItems: [
        {
          title: 'Compatibilidade',
          description: 'Funciona em desktop e celular através de navegador web. App Android na Google Play. Compatível com todos os navegadores modernos.'
        },
        {
          title: 'Segurança',
          description: 'Conformidade LGPD e GDPR. Criptografia E2E. Nenhuma imagem é armazenada. Processamento em tempo real com descarte imediato.'
        },
        {
          title: 'Multilíngue',
          description: 'Disponível em Português (BR), Inglês (USA) e Espanhol (ES). Troque de idioma a qualquer momento nas configurações.'
        },
        {
          title: 'Gratuito',
          description: 'Acesso gratuito a análise facial, cursos de Aromaterapia e Método CALMA. Sem cartão de crédito necessário.'
        }
      ],
      ctaTitle: 'Pronto para Começar?',
      ctaSubtitle: 'Crie sua conta gratuita no EssenciaLab e ganhe o Método CALMA de presente!',
      ctaBoxTitle: '✨ ACESSO GRATUITO',
      ctaFeatures: [
        'Análise facial com IA ilimitada',
        'Recomendações de óleos essenciais',
        'Método CALMA de presente',
        'Cursos de Aromaterapia',
        'Monitoramento de saúde',
        'Suporte em português'
      ],
      ctaButton: 'Criar Conta Gratuita',
      ctaFooter: '💚 Cuidando de quem cuida de pessoas',
      faqs: [
        {
          category: 'getting-started',
          question: 'O EssenciaLab é realmente gratuito?',
          answer: 'Sim! O acesso ao EssenciaLab é 100% gratuito. Você pode usar a análise facial com IA, receber recomendações personalizadas de óleos essenciais, acessar cursos de Aromaterapia e ganhar o Método CALMA sem pagar nada. Algumas funcionalidades avançadas para profissionais de saúde podem ter custo adicional, mas o essencial é totalmente gratuito.'
        },
        {
          category: 'getting-started',
          question: 'Preciso instalar algum software?',
          answer: 'Não! O EssenciaLab é um aplicativo web (PWA) que funciona diretamente no seu navegador. Também está disponível como app nativo para Android na Google Play Store. Para iPhone, basta acessar pelo navegador Chrome que funciona perfeitamente. É compatível com desktop e celular, totalmente funcional e intuitivo.'
        },
        {
          category: 'getting-started',
          question: 'Como faço meu primeiro cadastro?',
          answer: 'O cadastro é simples e gratuito! Basta criar sua conta com email e senha. Após o cadastro, você terá acesso imediato a todas as funcionalidades gratuitas, incluindo o Método CALMA de presente. O processo leva menos de 2 minutos.'
        },
        {
          category: 'technical',
          question: 'O EssenciaLab funciona em celular e desktop?',
          answer: 'Sim! O EssenciaLab funciona perfeitamente em ambos. No Android, você pode baixar o app nativo da Google Play Store. No iPhone, use o navegador Chrome para a melhor experiência. No desktop, funciona em qualquer navegador moderno. A interface se adapta automaticamente ao tamanho da tela.'
        },
        {
          category: 'technical',
          question: 'Quais navegadores são suportados?',
          answer: 'O EssenciaLab funciona em todos os navegadores modernos: Chrome (recomendado), Firefox, Safari, Edge. Recomendamos manter seu navegador sempre atualizado. A análise facial funciona através da câmera do dispositivo usando tecnologia MediaPipe do Google.'
        },
        {
          category: 'features',
          question: 'Como funciona a análise facial com IA?',
          answer: 'Nossa tecnologia detecta 478 pontos faciais usando MediaPipe do Google e analisa assimetrias, sinais de fadiga, stress e emoções em tempo real. O processo leva 30 segundos, onde são realizadas 8 tipos de leitura diferentes. Ao final, você recebe um relatório autoexplicativo com recomendações personalizadas de óleos essenciais e suplementos. Nenhuma imagem é armazenada!'
        },
        {
          category: 'features',
          question: 'O que é o Método CALMA?',
          answer: 'O Método CALMA é um protocolo natural desenvolvido por naturopata para acalmar crises de ansiedade noturna e melhorar o sono. São 3 ebooks exclusivos: Protocolo CALMA# (técnica de 5 passos), Checklist 21 Dias (rotina anti-ansiedade) e Guia Nutricional Anti-Ansiedade. Você ganha de presente ao criar sua conta gratuita!'
        },
        {
          category: 'features',
          question: 'Quais cursos estão disponíveis?',
          answer: 'O EssenciaLab oferece diversos cursos criados pelo Naturopata Ortomolecular Marilúcio Rocha (20+ anos de experiência): Aromaterapia Completa, Código da Saúde, Decisões Inteligentes, Solução TDAH, e cursos de Saúde Mental & Emocional. Todos com certificados, player de vídeo e materiais complementares.'
        },
        {
          category: 'features',
          question: 'O que é análise de sinais vitais pela câmera (rPPG)?',
          answer: 'É uma tecnologia incrível que mede sua frequência cardíaca, variabilidade cardíaca (HRV), estimativa de pressão arterial e taxa respiratória usando apenas a câmera do celular ou computador - sem sensores físicos! Funciona através da detecção de mudanças sutis na cor da pele causadas pelo fluxo sanguíneo.'
        },
        {
          category: 'features',
          question: 'Posso usar para recomendar óleos aos meus clientes?',
          answer: 'Sim! Muitos consultores doTERRA e terapeutas usam o EssenciaLab exatamente para isso. A análise facial gera um relatório personalizado com recomendações específicas de óleos essenciais para cada pessoa. É um diferencial incrível que impressiona clientes e aumenta vendas naturalmente.'
        },
        {
          category: 'features',
          question: 'O que é o Dashboard de Saúde Inteligente?',
          answer: 'É uma tela que monitora sua saúde em tempo real com análises cardiovasculares, de stress, energia, sono e nutrição. Você recebe alertas inteligentes antes que pequenos desequilíbrios se tornem problemas maiores. É saúde preventiva de verdade!'
        },
        {
          category: 'features',
          question: 'Posso fazer upload de exames médicos?',
          answer: 'Sim! O EssenciaLab tem tecnologia OCR avançada que digitaliza automaticamente seus exames médicos e os interpreta em linguagem clara usando IA (GPT-4). Você entende o que seus números significam de forma simples e pode compartilhar com profissionais de saúde.'
        },
        {
          category: 'technical',
          question: 'Os dados são seguros e privados?',
          answer: 'Absolutamente! Seguimos rigorosamente as leis LGPD (Brasil) e GDPR (Europa). Todas as suas informações são criptografadas (E2E). Nenhuma imagem facial é armazenada - o processamento é feito em tempo real e as imagens são descartadas imediatamente. Você tem controle total dos seus dados.'
        },
        {
          category: 'technical',
          question: 'Preciso de internet para usar?',
          answer: 'Para a maioria das funcionalidades, sim. No entanto, o EssenciaLab é um PWA que funciona parcialmente offline - você pode acessar conteúdos já visualizados e cursos baixados mesmo sem conexão. A análise facial requer internet para processamento em tempo real.'
        },
        {
          category: 'features',
          question: 'Quantas análises faciais posso fazer?',
          answer: 'Não há limite! Você pode realizar quantas análises faciais quiser, seja para você mesmo ou para clientes. Isso permite acompanhar a evolução ao longo do tempo e fazer recomendações personalizadas sem restrições.'
        },
        {
          category: 'features',
          question: 'O que são Terapias de Som?',
          answer: 'O EssenciaLab oferece um Player de Áudio Neuroacústico com frequências binaurais, sons isocrônicos e ondas cerebrais (Alpha, Beta, Theta, Delta). Essas frequências específicas podem acalmar, aumentar o foco ou facilitar o sono. Som é medicina!'
        },
        {
          category: 'features',
          question: 'Como funciona a gamificação?',
          answer: 'O EssenciaLab tem um sistema de recompensas onde você ganha pontos por ações de autocuidado. Há streaks (sequências), conquistas, badges e níveis para te manter motivado. Cuidar de si deveria ser prazeroso - celebrar vitórias te mantém engajado!'
        },
        {
          category: 'features',
          question: 'O EssenciaLab substitui consultas médicas?',
          answer: 'Não. O EssenciaLab é uma ferramenta complementar de autoconhecimento, bem-estar preventivo e recomendações de óleos essenciais. Não substitui diagnósticos ou tratamentos médicos. Sempre consulte profissionais de saúde qualificados para questões médicas.'
        },
        {
          category: 'account',
          question: 'Como altero meus dados de cadastro?',
          answer: 'Você pode alterar seus dados diretamente nas configurações da sua conta dentro do aplicativo. Isso inclui email, senha, preferências de idioma (PT/EN/ES) e configurações de notificações.'
        },
        {
          category: 'account',
          question: 'Esqueci minha senha, como recuperar?',
          answer: 'Na tela de login, clique em "Esqueci minha senha" e siga as instruções enviadas para seu email. O processo é seguro e você receberá um link para criar uma nova senha. Se não receber o email, verifique a pasta de spam.'
        },
        {
          category: 'features',
          question: 'O que é a Roda das Emoções?',
          answer: 'É uma ferramenta interativa baseada no modelo de Plutchik que mostra 8 emoções primárias, 16 secundárias e 32 terciárias. Ajuda você a identificar e nomear suas emoções com precisão. Alfabetização emocional é uma das habilidades mais importantes para viver bem!'
        }
      ]
    },
    en: {
      title: 'Help Center',
      subtitle: 'EssenciaLab',
      description: 'Find answers to your questions about EssenciaLab, from getting started to advanced features.',
      badge: '💚 Specialized Support',
      searchPlaceholder: 'Search by keyword...',
      categories: [
        { id: 'all', name: 'All' },
        { id: 'getting-started', name: 'Getting Started' },
        { id: 'technical', name: 'Technical' },
        { id: 'features', name: 'Features' },
        { id: 'account', name: 'Account' }
      ],
      benefitsTitle: 'What EssenciaLab Offers for Free',
      benefitsSubtitle: 'Complete access to wellness and self-awareness tools',
      benefits: [
        {
          title: 'AI Facial Analysis',
          description: 'Google MediaPipe technology detecting 478 facial points. Personalized essential oil recommendations.'
        },
        {
          title: 'Health Monitoring',
          description: 'Heart rate, HRV, blood pressure and vital signs measured by camera - no sensors required!'
        },
        {
          title: 'Deep Self-Knowledge',
          description: 'Big Five Test, Emotion Wheel, personal development analysis and female hormonal profile.'
        },
        {
          title: 'Essential Oil Protocols',
          description: 'Complete library of natural Aromatherapy and Naturopathy protocols for various conditions.'
        },
        {
          title: 'Aromatherapy Courses',
          description: 'Learn from Marilúcio Rocha (20+ years). Certificates included in all courses.'
        },
        {
          title: 'Medical Reports Upload',
          description: 'Digitize and interpret your medical reports with AI. Understand your numbers in plain language.'
        }
      ],
      benefitsCTA: 'Start Free Now',
      faqTitle: 'Frequently Asked Questions',
      faqCount: (n) => `${n} ${n === 1 ? 'question found' : 'questions found'}`,
      noResults: 'No questions found',
      noResultsDesc: 'Try using different search terms or contact us',
      contactTitle: 'Still Need Help?',
      contactSubtitle: 'Our specialized team is ready to assist you',
      email: 'Email',
      emailResponse: 'Response within 24 hours',
      emailDesc: 'For technical questions, support or account issues',
      phone: 'Phone',
      phoneResponse: 'Direct support',
      phoneDesc: 'For immediate support and personalized guidance',
      whatsapp: 'WhatsApp',
      whatsappResponse: 'Real-time chat',
      whatsappDesc: 'For quick conversations and instant clarifications',
      whatsappAction: 'Open WhatsApp',
      techTitle: 'Technical Information',
      techSubtitle: 'Important details about how EssenciaLab works',
      techItems: [
        {
          title: 'Compatibility',
          description: 'Works on desktop and mobile through web browser. Android app on Google Play. Compatible with all modern browsers.'
        },
        {
          title: 'Security',
          description: 'LGPD and GDPR compliance. E2E encryption. No images stored. Real-time processing with immediate disposal.'
        },
        {
          title: 'Multilingual',
          description: 'Available in Portuguese (BR), English (USA) and Spanish (ES). Change language anytime in settings.'
        },
        {
          title: 'Free',
          description: 'Free access to facial analysis, Aromatherapy courses and CALMA Method. No credit card required.'
        }
      ],
      ctaTitle: 'Ready to Get Started?',
      ctaSubtitle: 'Create your free EssenciaLab account and get the CALMA Method as a gift!',
      ctaBoxTitle: '✨ FREE ACCESS',
      ctaFeatures: [
        'Unlimited AI facial analysis',
        'Essential oil recommendations',
        'CALMA Method as gift',
        'Aromatherapy courses',
        'Health monitoring',
        'English support'
      ],
      ctaButton: 'Create Free Account',
      ctaFooter: '💚 Caring for those who care for people',
      faqs: [
        {
          category: 'getting-started',
          question: 'Is EssenciaLab really free?',
          answer: 'Yes! Access to EssenciaLab is 100% free. You can use AI facial analysis, receive personalized essential oil recommendations, access Aromatherapy courses and get the CALMA Method without paying anything. Some advanced features for health professionals may have additional costs, but the essentials are completely free.'
        },
        {
          category: 'getting-started',
          question: 'Do I need to install any software?',
          answer: 'No! EssenciaLab is a web app (PWA) that works directly in your browser. It\'s also available as a native Android app on Google Play Store. For iPhone, just access through Chrome browser and it works perfectly. It\'s compatible with desktop and mobile, fully functional and intuitive.'
        },
        {
          category: 'getting-started',
          question: 'How do I register?',
          answer: 'Registration is simple and free! Just create your account with email and password. After registration, you\'ll have immediate access to all free features, including the CALMA Method as a gift. The process takes less than 2 minutes.'
        },
        {
          category: 'technical',
          question: 'Does EssenciaLab work on mobile and desktop?',
          answer: 'Yes! EssenciaLab works perfectly on both. On Android, you can download the native app from Google Play Store. On iPhone, use Chrome browser for the best experience. On desktop, it works in any modern browser. The interface automatically adapts to screen size.'
        },
        {
          category: 'technical',
          question: 'Which browsers are supported?',
          answer: 'EssenciaLab works in all modern browsers: Chrome (recommended), Firefox, Safari, Edge. We recommend keeping your browser always updated. Facial analysis works through the device camera using Google MediaPipe technology.'
        },
        {
          category: 'features',
          question: 'How does AI facial analysis work?',
          answer: 'Our technology detects 478 facial points using Google MediaPipe and analyzes asymmetries, signs of fatigue, stress and emotions in real-time. The process takes 30 seconds, performing 8 different types of readings. At the end, you receive a self-explanatory report with personalized essential oil and supplement recommendations. No images are stored!'
        },
        {
          category: 'features',
          question: 'What is the CALMA Method?',
          answer: 'The CALMA Method is a natural protocol developed by a naturopath to calm nighttime anxiety crises and improve sleep. It includes 3 exclusive ebooks: CALMA# Protocol (5-step technique), 21-Day Checklist (anti-anxiety routine) and Anti-Anxiety Nutritional Guide. You get it as a gift when you create your free account!'
        },
        {
          category: 'features',
          question: 'What courses are available?',
          answer: 'EssenciaLab offers various courses created by Orthomolecular Naturopath Marilúcio Rocha (20+ years experience): Complete Aromatherapy, Health Code, Smart Decisions, ADHD Solution, and Mental & Emotional Health courses. All with certificates, video player and complementary materials.'
        },
        {
          category: 'features',
          question: 'What is camera-based vital signs analysis (rPPG)?',
          answer: 'It\'s an amazing technology that measures your heart rate, heart rate variability (HRV), blood pressure estimate and respiratory rate using only your phone or computer camera - no physical sensors! It works by detecting subtle color changes in the skin caused by blood flow.'
        },
        {
          category: 'features',
          question: 'Can I use it to recommend oils to my clients?',
          answer: 'Yes! Many doTERRA consultants and therapists use EssenciaLab exactly for that. Facial analysis generates a personalized report with specific essential oil recommendations for each person. It\'s an incredible differentiator that impresses clients and naturally increases sales.'
        },
        {
          category: 'features',
          question: 'What is the Smart Health Dashboard?',
          answer: 'It\'s a screen that monitors your health in real-time with cardiovascular, stress, energy, sleep and nutrition analyses. You receive smart alerts before small imbalances become bigger problems. It\'s real preventive health!'
        },
        {
          category: 'features',
          question: 'Can I upload medical reports?',
          answer: 'Yes! EssenciaLab has advanced OCR technology that automatically digitizes your medical reports and interprets them in plain language using AI (GPT-4). You understand what your numbers mean simply and can share with healthcare professionals.'
        },
        {
          category: 'technical',
          question: 'Is my data secure and private?',
          answer: 'Absolutely! We strictly follow LGPD (Brazil) and GDPR (Europe) laws. All your information is encrypted (E2E). No facial images are stored - processing is done in real-time and images are immediately discarded. You have complete control of your data.'
        },
        {
          category: 'technical',
          question: 'Do I need internet to use it?',
          answer: 'For most features, yes. However, EssenciaLab is a PWA that works partially offline - you can access previously viewed content and downloaded courses even without connection. Facial analysis requires internet for real-time processing.'
        },
        {
          category: 'features',
          question: 'How many facial analyses can I do?',
          answer: 'Unlimited! You can perform as many facial analyses as you want, whether for yourself or clients. This allows tracking evolution over time and making personalized recommendations without restrictions.'
        },
        {
          category: 'features',
          question: 'What are Sound Therapies?',
          answer: 'EssenciaLab offers a Neuroacoustic Audio Player with binaural frequencies, isochronic tones and brain waves (Alpha, Beta, Theta, Delta). These specific frequencies can calm, increase focus or facilitate sleep. Sound is medicine!'
        },
        {
          category: 'features',
          question: 'How does gamification work?',
          answer: 'EssenciaLab has a rewards system where you earn points for self-care actions. There are streaks, achievements, badges and levels to keep you motivated. Self-care should be enjoyable - celebrating wins keeps you engaged!'
        },
        {
          category: 'features',
          question: 'Does EssenciaLab replace medical consultations?',
          answer: 'No. EssenciaLab is a complementary tool for self-knowledge, preventive wellness and essential oil recommendations. It doesn\'t replace medical diagnoses or treatments. Always consult qualified healthcare professionals for medical issues.'
        },
        {
          category: 'account',
          question: 'How do I change my registration data?',
          answer: 'You can change your data directly in your account settings within the app. This includes email, password, language preferences (PT/EN/ES) and notification settings.'
        },
        {
          category: 'account',
          question: 'I forgot my password, how do I recover it?',
          answer: 'On the login screen, click "Forgot my password" and follow the instructions sent to your registered email. The process is secure and you\'ll receive a link to create a new password. If you don\'t receive the email, check your spam folder.'
        },
        {
          category: 'features',
          question: 'What is the Emotion Wheel?',
          answer: 'It\'s an interactive tool based on Plutchik\'s model showing 8 primary emotions, 16 secondary and 32 tertiary. It helps you identify and name your emotions accurately. Emotional literacy is one of the most important skills for living well!'
        }
      ]
    },
    es: {
      title: 'Centro de Ayuda',
      subtitle: 'EssenciaLab',
      description: 'Encuentre respuestas a sus preguntas sobre EssenciaLab, desde los primeros pasos hasta funciones avanzadas.',
      badge: '💚 Soporte Especializado',
      searchPlaceholder: 'Buscar por palabra clave...',
      categories: [
        { id: 'all', name: 'Todas' },
        { id: 'getting-started', name: 'Primeros Pasos' },
        { id: 'technical', name: 'Técnico' },
        { id: 'features', name: 'Funcionalidades' },
        { id: 'account', name: 'Cuenta' }
      ],
      benefitsTitle: 'Lo Que EssenciaLab Ofrece Gratuitamente',
      benefitsSubtitle: 'Acceso completo a herramientas de bienestar y autoconocimiento',
      benefits: [
        {
          title: 'Análisis Facial con IA',
          description: 'Tecnología MediaPipe de Google detectando 478 puntos faciales. Recomendaciones personalizadas de aceites esenciales.'
        },
        {
          title: 'Monitoreo de Salud',
          description: 'Frecuencia cardíaca, HRV, presión arterial y signos vitales medidos por cámara - ¡sin sensores!'
        },
        {
          title: 'Autoconocimiento Profundo',
          description: 'Test Big Five, Rueda de las Emociones, análisis de desarrollo personal y perfil hormonal femenino.'
        },
        {
          title: 'Protocolos de Aceites Esenciales',
          description: 'Biblioteca completa de protocolos naturales de Aromaterapia y Naturopatía para diversas condiciones.'
        },
        {
          title: 'Cursos de Aromaterapia',
          description: 'Aprenda con Marilúcio Rocha (20+ años). Certificados incluidos en todos los cursos.'
        },
        {
          title: 'Subida de Exámenes',
          description: 'Digitalice e interprete sus exámenes médicos con IA. Entienda sus números en lenguaje claro.'
        }
      ],
      benefitsCTA: 'Comenzar Gratis Ahora',
      faqTitle: 'Preguntas Frecuentes',
      faqCount: (n) => `${n} ${n === 1 ? 'pregunta encontrada' : 'preguntas encontradas'}`,
      noResults: 'No se encontraron preguntas',
      noResultsDesc: 'Intente usar otros términos de búsqueda o contáctenos',
      contactTitle: '¿Todavía Necesita Ayuda?',
      contactSubtitle: 'Nuestro equipo especializado está listo para atenderlo',
      email: 'Email',
      emailResponse: 'Respuesta en hasta 24 horas',
      emailDesc: 'Para dudas técnicas, soporte o cuestiones sobre su cuenta',
      phone: 'Teléfono',
      phoneResponse: 'Atención directa',
      phoneDesc: 'Para soporte inmediato y orientaciones personalizadas',
      whatsapp: 'WhatsApp',
      whatsappResponse: 'Chat en tiempo real',
      whatsappDesc: 'Para conversaciones rápidas y aclaraciones instantáneas',
      whatsappAction: 'Abrir WhatsApp',
      techTitle: 'Información Técnica',
      techSubtitle: 'Detalles importantes sobre el funcionamiento de EssenciaLab',
      techItems: [
        {
          title: 'Compatibilidad',
          description: 'Funciona en desktop y móvil a través del navegador web. App Android en Google Play. Compatible con todos los navegadores modernos.'
        },
        {
          title: 'Seguridad',
          description: 'Cumplimiento LGPD y GDPR. Encriptación E2E. Ninguna imagen almacenada. Procesamiento en tiempo real con descarte inmediato.'
        },
        {
          title: 'Multilingüe',
          description: 'Disponible en Portugués (BR), Inglés (USA) y Español (ES). Cambie de idioma en cualquier momento en la configuración.'
        },
        {
          title: 'Gratuito',
          description: 'Acceso gratuito a análisis facial, cursos de Aromaterapia y Método CALMA. Sin tarjeta de crédito necesaria.'
        }
      ],
      ctaTitle: '¿Listo para Comenzar?',
      ctaSubtitle: '¡Cree su cuenta gratuita en EssenciaLab y obtenga el Método CALMA de regalo!',
      ctaBoxTitle: '✨ ACCESO GRATUITO',
      ctaFeatures: [
        'Análisis facial con IA ilimitado',
        'Recomendaciones de aceites esenciales',
        'Método CALMA de regalo',
        'Cursos de Aromaterapia',
        'Monitoreo de salud',
        'Soporte en español'
      ],
      ctaButton: 'Crear Cuenta Gratuita',
      ctaFooter: '💚 Cuidando a quienes cuidan de las personas',
      faqs: [
        {
          category: 'getting-started',
          question: '¿EssenciaLab es realmente gratuito?',
          answer: '¡Sí! El acceso a EssenciaLab es 100% gratuito. Puede usar el análisis facial con IA, recibir recomendaciones personalizadas de aceites esenciales, acceder a cursos de Aromaterapia y obtener el Método CALMA sin pagar nada. Algunas funcionalidades avanzadas para profesionales de salud pueden tener costo adicional, pero lo esencial es totalmente gratuito.'
        },
        {
          category: 'getting-started',
          question: '¿Necesito instalar algún software?',
          answer: '¡No! EssenciaLab es una aplicación web (PWA) que funciona directamente en su navegador. También está disponible como app nativa para Android en Google Play Store. Para iPhone, solo acceda por el navegador Chrome y funciona perfectamente. Es compatible con desktop y móvil, totalmente funcional e intuitivo.'
        },
        {
          category: 'getting-started',
          question: '¿Cómo me registro?',
          answer: '¡El registro es simple y gratuito! Solo cree su cuenta con email y contraseña. Después del registro, tendrá acceso inmediato a todas las funcionalidades gratuitas, incluyendo el Método CALMA de regalo. El proceso toma menos de 2 minutos.'
        },
        {
          category: 'technical',
          question: '¿EssenciaLab funciona en móvil y desktop?',
          answer: '¡Sí! EssenciaLab funciona perfectamente en ambos. En Android, puede descargar la app nativa de Google Play Store. En iPhone, use el navegador Chrome para la mejor experiencia. En desktop, funciona en cualquier navegador moderno. La interfaz se adapta automáticamente al tamaño de pantalla.'
        },
        {
          category: 'technical',
          question: '¿Qué navegadores son compatibles?',
          answer: 'EssenciaLab funciona en todos los navegadores modernos: Chrome (recomendado), Firefox, Safari, Edge. Recomendamos mantener su navegador siempre actualizado. El análisis facial funciona a través de la cámara del dispositivo usando tecnología MediaPipe de Google.'
        },
        {
          category: 'features',
          question: '¿Cómo funciona el análisis facial con IA?',
          answer: 'Nuestra tecnología detecta 478 puntos faciales usando MediaPipe de Google y analiza asimetrías, signos de fatiga, estrés y emociones en tiempo real. El proceso toma 30 segundos, realizando 8 tipos diferentes de lecturas. Al final, recibe un informe autoexplicativo con recomendaciones personalizadas de aceites esenciales y suplementos. ¡Ninguna imagen es almacenada!'
        },
        {
          category: 'features',
          question: '¿Qué es el Método CALMA?',
          answer: 'El Método CALMA es un protocolo natural desarrollado por un naturópata para calmar crisis de ansiedad nocturna y mejorar el sueño. Son 3 ebooks exclusivos: Protocolo CALMA# (técnica de 5 pasos), Checklist 21 Días (rutina anti-ansiedad) y Guía Nutricional Anti-Ansiedad. ¡Lo obtiene de regalo al crear su cuenta gratuita!'
        },
        {
          category: 'features',
          question: '¿Qué cursos están disponibles?',
          answer: 'EssenciaLab ofrece diversos cursos creados por el Naturópata Ortomolecular Marilúcio Rocha (20+ años de experiencia): Aromaterapia Completa, Código de la Salud, Decisiones Inteligentes, Solución TDAH, y cursos de Salud Mental & Emocional. Todos con certificados, reproductor de video y materiales complementarios.'
        },
        {
          category: 'features',
          question: '¿Qué es el análisis de signos vitales por cámara (rPPG)?',
          answer: '¡Es una tecnología increíble que mide su frecuencia cardíaca, variabilidad cardíaca (HRV), estimación de presión arterial y tasa respiratoria usando solo la cámara del móvil o computadora - sin sensores físicos! Funciona detectando cambios sutiles en el color de la piel causados por el flujo sanguíneo.'
        },
        {
          category: 'features',
          question: '¿Puedo usarlo para recomendar aceites a mis clientes?',
          answer: '¡Sí! Muchos consultores doTERRA y terapeutas usan EssenciaLab exactamente para eso. El análisis facial genera un informe personalizado con recomendaciones específicas de aceites esenciales para cada persona. ¡Es un diferencial increíble que impresiona a los clientes y aumenta las ventas naturalmente!'
        },
        {
          category: 'features',
          question: '¿Qué es el Dashboard de Salud Inteligente?',
          answer: '¡Es una pantalla que monitorea su salud en tiempo real con análisis cardiovasculares, de estrés, energía, sueño y nutrición. Recibe alertas inteligentes antes de que pequeños desequilibrios se conviertan en problemas mayores. Es salud preventiva de verdad!'
        },
        {
          category: 'features',
          question: '¿Puedo subir exámenes médicos?',
          answer: '¡Sí! EssenciaLab tiene tecnología OCR avanzada que digitaliza automáticamente sus exámenes médicos y los interpreta en lenguaje claro usando IA (GPT-4). Entiende lo que significan sus números de forma simple y puede compartir con profesionales de salud.'
        },
        {
          category: 'technical',
          question: '¿Los datos son seguros y privados?',
          answer: '¡Absolutamente! Seguimos rigurosamente las leyes LGPD (Brasil) y GDPR (Europa). Toda su información está encriptada (E2E). Ninguna imagen facial es almacenada - el procesamiento se hace en tiempo real y las imágenes se descartan inmediatamente. Tiene control total de sus datos.'
        },
        {
          category: 'technical',
          question: '¿Necesito internet para usar?',
          answer: 'Para la mayoría de las funcionalidades, sí. Sin embargo, EssenciaLab es un PWA que funciona parcialmente offline - puede acceder a contenidos ya visualizados y cursos descargados incluso sin conexión. El análisis facial requiere internet para procesamiento en tiempo real.'
        },
        {
          category: 'features',
          question: '¿Cuántos análisis faciales puedo hacer?',
          answer: '¡Ilimitados! Puede realizar tantos análisis faciales como quiera, sea para usted mismo o para clientes. Esto permite acompañar la evolución a lo largo del tiempo y hacer recomendaciones personalizadas sin restricciones.'
        },
        {
          category: 'features',
          question: '¿Qué son las Terapias de Sonido?',
          answer: 'EssenciaLab ofrece un Reproductor de Audio Neuroacústico con frecuencias binaurales, tonos isocrónicos y ondas cerebrales (Alpha, Beta, Theta, Delta). Estas frecuencias específicas pueden calmar, aumentar el foco o facilitar el sueño. ¡El sonido es medicina!'
        },
        {
          category: 'features',
          question: '¿Cómo funciona la gamificación?',
          answer: 'EssenciaLab tiene un sistema de recompensas donde gana puntos por acciones de autocuidado. Hay rachas, logros, insignias y niveles para mantenerlo motivado. Cuidarse debería ser placentero - ¡celebrar victorias lo mantiene comprometido!'
        },
        {
          category: 'features',
          question: '¿EssenciaLab reemplaza las consultas médicas?',
          answer: 'No. EssenciaLab es una herramienta complementaria de autoconocimiento, bienestar preventivo y recomendaciones de aceites esenciales. No reemplaza diagnósticos o tratamientos médicos. Siempre consulte profesionales de salud calificados para cuestiones médicas.'
        },
        {
          category: 'account',
          question: '¿Cómo cambio mis datos de registro?',
          answer: 'Puede cambiar sus datos directamente en la configuración de su cuenta dentro de la aplicación. Esto incluye email, contraseña, preferencias de idioma (PT/EN/ES) y configuraciones de notificaciones.'
        },
        {
          category: 'account',
          question: 'Olvidé mi contraseña, ¿cómo la recupero?',
          answer: 'En la pantalla de inicio de sesión, haga clic en "Olvidé mi contraseña" y siga las instrucciones enviadas a su email registrado. El proceso es seguro y recibirá un enlace para crear una nueva contraseña. Si no recibe el email, verifique su carpeta de spam.'
        },
        {
          category: 'features',
          question: '¿Qué es la Rueda de las Emociones?',
          answer: '¡Es una herramienta interactiva basada en el modelo de Plutchik que muestra 8 emociones primarias, 16 secundarias y 32 terciarias. Le ayuda a identificar y nombrar sus emociones con precisión. La alfabetización emocional es una de las habilidades más importantes para vivir bien!'
        }
      ]
    }
  };

  const t = content[language] || content.pt;

  const categoryIcons = {
    'all': HelpCircle,
    'getting-started': Play,
    'technical': Settings,
    'features': Zap,
    'account': User
  };

  const benefitIcons = [Camera, Heart, Brain, Leaf, Download, FileText];
  const techIcons = [Monitor, Shield, Globe, Lock];

  const filteredFaqs = t.faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
            {t.badge}
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t.title}
            </span>
            <br />
            {t.subtitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.description}
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
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.categories.map((category) => {
              const IconComponent = categoryIcons[category.id];
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'hover:border-green-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.benefitsTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.benefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.map((benefit, index) => {
              const IconComponent = benefitIcons[index];
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
              onClick={() => window.open('https://app.essencialab.site', '_blank')}
            >
              {t.benefitsCTA}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.faqTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.faqCount(filteredFaqs.length)}
            </p>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 text-left">
                        {faq.question}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {t.categories.find(cat => cat.id === faq.category)?.name}
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
                {t.noResults}
              </h3>
              <p className="text-gray-500">
                {t.noResultsDesc}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.email}</CardTitle>
                <CardDescription>{t.emailResponse}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t.emailDesc}
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
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.phone}</CardTitle>
                <CardDescription>{t.phoneResponse}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t.phoneDesc}
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
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.whatsapp}</CardTitle>
                <CardDescription>{t.whatsappResponse}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t.whatsappDesc}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5543991343807?text=Olá! Preciso de ajuda com o EssenciaLab.', '_blank')}
                >
                  {t.whatsappAction}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.techTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.techSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.techItems.map((item, index) => {
              const IconComponent = techIcons[index];
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <IconComponent className="w-12 h-12 mx-auto text-green-600 mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaSubtitle}
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">{t.ctaBoxTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {t.ctaFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://app.essencialab.site', '_blank')}
          >
            {t.ctaButton}
          </Button>

          <p className="text-sm mt-6 opacity-75">
            {t.ctaFooter}
          </p>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
