import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O método realmente funciona às 3h da madrugada?",
      answer: "Sim! O Protocolo 3h da Madrugada foi criado especificamente para momentos de despertar noturno. Das 1.847 pessoas testadas, 94% conseguiram voltar a dormir em menos de 10 minutos na primeira tentativa."
    },
    {
      question: "Preciso de experiência prévia com meditação ou relaxamento?",
      answer: "Não! O Método CALMA# foi desenvolvido para pessoas que nunca fizeram nenhum tipo de técnica de relaxamento. É simples, direto e funciona mesmo para cérebros acelerados que 'não conseguem parar'."
    },
    {
      question: "Quanto tempo leva para ver resultados?", 
      answer: "A maioria das pessoas sente alívio já na primeira aplicação. Em 7 dias de prática, 87% relataram redução significativa da ansiedade noturna. O método foi criado para resultados imediatos."
    },
    {
      question: "Funciona para diferentes tipos de ansiedade?",
      answer: "Sim. O protocolo foi testado com pessoas que sofrem de ansiedade generalizada, ansiedade social, preocupações financeiras, estresse do trabalho e pensamentos repetitivos. O método se adapta ao seu tipo específico de ansiedade."
    },
    {
      question: "E se eu não conseguir baixar ou acessar o material?",
      answer: "Você recebe acesso imediato após a compra por email. Se tiver qualquer problema técnico, nossa equipe resolve em até 2 horas. Também oferecemos suporte completo por 30 dias."
    },
    {
      question: "A garantia é real mesmo?",
      answer: "Absolutamente. Se você não conseguir parar seus pensamentos acelerados em 30 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. É só enviar um email."
    },
    {
      question: "Por que só R$ 19,90 se o valor real é R$ 208?",
      answer: "Esta é uma oferta de lançamento limitada. Queremos que o máximo de brasileiros tenham acesso ao método. Depois desta semana, o preço volta ao valor normal de R$ 97,00."
    },
    {
      question: "Posso usar o método durante o dia também?",
      answer: "Claro! Além do protocolo noturno, você recebe versões adaptadas para usar antes de reuniões, apresentações, ou discretamente em locais públicos. É uma solução completa para sua ansiedade."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-calm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ❓ Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Todas as dúvidas que você pode ter sobre o Método CALMA#
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco:
          </p>
          <a 
            href="mailto:suporte@essencialab.com" 
            className="text-primary hover:underline font-semibold"
          >
            📧 suporte@essencialab.com
          </a>
        </div>
      </div>
    </section>
  );
};