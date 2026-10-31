import { CheckCircle, Smartphone, Stethoscope, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { getPlatformLink } from '@/lib/utils';
import { TRIAL_URL } from './map/constants';
import "@/brand-theme.css";

// Preços vigentes (out/2026). Plano Pessoal: assinatura pelas lojas (App Store / Google Play).
// Plano Profissional: inclui o Sistema MAP.
const plans = [
  {
    id: 'pessoal',
    icon: Smartphone,
    name: 'Plano Análise Facial',
    audience: 'Para consultores de óleos essenciais e aromaterapeutas',
    monthly: 'R$ 29,90',
    yearly: 'R$ 299,90 por ano (equivale a R$ 24,99/mês)',
    features: [
      'Análise facial pelo celular, com a câmera frontal',
      'Mapa de bem-estar com sistemas do corpo e emoções',
      'Sugestões de óleos essenciais e cuidados',
      'Leitura de sinais pelo dedo e pelo rosto',
      'Relatório para salvar em PDF ou enviar como texto',
    ],
    note: 'Assinatura feita dentro do app, pela App Store ou Google Play.',
    cta: 'Baixar o app e testar 7 dias',
    href: null,
  },
  {
    id: 'profissional',
    icon: Stethoscope,
    name: 'Plano Profissional + Sistema MAP',
    audience: 'Para quem atende clientes ou pacientes',
    monthly: 'R$ 67',
    yearly: 'R$ 670 por ano (2 meses grátis)',
    highlight: true,
    features: [
      'Tudo do Plano Análise Facial',
      'Análise facial de clientes, com a câmera traseira',
      'Histórico e busca de clientes',
      'Sistema MAP: questionários por link, exames, Teia Funcional de 12 sistemas e acompanhamento dos retornos',
      'Protocolos editáveis e relatórios em PDF',
      'Treinamento em vídeo e suporte por e-mail e WhatsApp',
    ],
    note: 'Sem cartão para começar o teste.',
    cta: 'Começar o teste de 7 dias',
    href: TRIAL_URL,
  },
];

const faq = [
  {
    q: 'Como funciona o teste grátis?',
    a: 'Você usa todas as funções do plano por 7 dias, sem cartão de crédito. Depois do teste, você escolhe se quer assinar.',
  },
  {
    q: 'Posso trocar de plano depois?',
    a: 'Sim. Quem começa no Plano Análise Facial pode passar para o Profissional quando começar a atender clientes. A troca é feita no próprio app.',
  },
  {
    q: 'Tem fidelidade ou multa?',
    a: 'Não. As assinaturas mensais e anuais podem ser canceladas a qualquer momento, sem multa.',
  },
  {
    q: 'Qual plano escolher?',
    a: 'Se você usa a análise facial em você mesmo ou para abrir conversas com clientes, o Plano Análise Facial resolve. Se você atende clientes ou pacientes e quer registrar o histórico e acompanhar a evolução, escolha o Profissional, que inclui o Sistema MAP.',
  },
  {
    q: 'O EssenciaLab substitui uma avaliação médica?',
    a: 'Não. O EssenciaLab é uma ferramenta de apoio ao bem-estar e à organização do atendimento. Não faz diagnóstico e não substitui avaliação, acompanhamento ou tratamento médico.',
  },
];

export default function Precos() {
  const appLink = getPlatformLink();

  return (
    <div className="brand-theme min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Planos e preços do EssenciaLab</h1>
          <p className="mt-4 text-lg text-gray-600">
            Dois planos: um para quem usa a análise facial e outro para quem atende clientes e quer o Sistema MAP.
            Os dois começam com 7 dias grátis, sem cartão.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Planos">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.id}
                className={`rounded-2xl border p-6 md:p-8 flex flex-col ${plan.highlight ? 'border-emerald-600 shadow-md' : 'border-gray-200'}`}
              >
                <Icon className="h-8 w-8 text-emerald-700" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-1 text-sm text-gray-600">{plan.audience}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.monthly}</span>
                  <span className="text-gray-600">/mês</span>
                </p>
                <p className="mt-1 text-sm text-gray-600">ou {plan.yearly}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                  <a href={plan.href || appLink}>{plan.cta}</a>
                </Button>
                <p className="mt-3 text-xs text-gray-500 text-center">{plan.note}</p>
              </article>
            );
          })}
        </section>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Preços em reais, válidos para o Brasil. Cancele quando quiser, sem multa.
        </p>

        <section className="mt-16 max-w-3xl mx-auto" aria-labelledby="faq-precos">
          <h2 id="faq-precos" className="text-2xl font-bold text-gray-900 text-center">Perguntas sobre os planos</h2>
          <dl className="mt-8 divide-y divide-gray-200">
            {faq.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-2 text-gray-700 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-12 text-center text-gray-700">
          Atende pacientes? <a className="text-emerald-700 font-semibold underline" href="/map">Conheça o Sistema MAP em detalhe</a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
