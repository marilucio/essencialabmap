import { Camera, HeartPulse, Smile, Droplets, ClipboardList, FlaskConical, Network, LineChart, FileText, Brain, Wind, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { getPlatformLink } from '@/lib/utils';
import { TRIAL_URL } from './map/constants';
import "@/brand-theme.css";

// Funcionalidades disponíveis em out/2026. Ao remover ou lançar um recurso no app,
// atualize esta lista (ela é pré-renderizada e lida pelo Google).
const groups = [
  {
    id: 'analise-facial',
    title: 'Análise facial pelo celular',
    intro: 'Disponível no app para iOS e Android. A medição começa pela leitura do dedo na câmera e segue com a leitura do rosto.',
    plan: 'Plano Análise Facial e Plano Profissional',
    items: [
      { icon: HeartPulse, name: 'Sinais vitais estimados', text: 'Frequência cardíaca, frequência respiratória, variabilidade cardíaca (HRV), índice de estresse e estimativa de pressão arterial, a partir da câmera do celular.' },
      { icon: Camera, name: 'Relatório em três níveis', text: 'Resumo, sete sistemas do corpo (cardiovascular, respiratório, digestivo, hepático-renal, endócrino, imunológico e nervoso-emocional) e recomendações, com leitura simples.' },
      { icon: Smile, name: 'Emoções', text: 'As emoções que aparecem no rosto, com a explicação de como cada uma se manifesta e da relação entre as duas principais.' },
      { icon: Droplets, name: 'Pele e recomendações', text: 'Sinais da pele e sugestões de óleos essenciais e cuidados, que o consultor pode usar para abrir a conversa com o cliente.' },
      { icon: FileText, name: 'PDF e texto', text: 'O relatório pode ser salvo em PDF ou enviado como texto. Os dados da análise não são compartilhados por link.' },
    ],
  },
  {
    id: 'sistema-map',
    title: 'Sistema MAP para quem atende',
    intro: 'Para nutricionistas, naturopatas e terapeutas integrativos que acompanham pacientes.',
    plan: 'Plano Profissional',
    items: [
      { icon: ClipboardList, name: 'Questionários por link', text: 'O paciente responde antes da consulta, com consentimento para os dados de saúde, e você chega ao atendimento com o caso organizado.' },
      { icon: FlaskConical, name: 'Exames', text: 'Envie os laudos em PDF ou imagem e confira valores, unidades e referências junto com os relatos.' },
      { icon: Network, name: 'Teia Funcional de 12 sistemas', text: 'Organiza o que o paciente relatou por sistema do corpo, com pontos de atenção e perguntas para investigar na consulta.' },
      { icon: LineChart, name: 'Acompanhamento dos retornos', text: 'Compare avaliações e exames ao longo do tempo para conversar sobre a evolução com dados concretos.' },
      { icon: FileText, name: 'Protocolos e relatórios', text: 'Rascunhos de protocolo editáveis, que você revisa antes de entregar, e relatórios em PDF.' },
    ],
  },
  {
    id: 'autoconhecimento',
    title: 'Autoconhecimento e autocuidado',
    intro: 'Ferramentas do app que complementam a análise facial e alimentam o acompanhamento.',
    plan: 'Disponível no app',
    items: [
      { icon: Brain, name: 'Teste de personalidade Big Five', text: 'Avalia os cinco grandes fatores de personalidade, com histórico das respostas.' },
      { icon: Smile, name: 'Roda das emoções', text: 'Baseada no modelo de Plutchik, ajuda a nomear o que se sente.' },
      { icon: Wind, name: 'Protocolos de respiração', text: 'Exercícios guiados de respiração com animação visual.' },
      { icon: Headphones, name: 'Áudios neuroacústicos', text: 'Áudios para relaxamento e foco, para ouvir com fones.' },
    ],
  },
];

export default function Features() {
  const appLink = getPlatformLink();

  return (
    <div className="brand-theme min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <header className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Funcionalidades do EssenciaLab</h1>
          <p className="mt-4 text-lg text-gray-600">
            Análise facial pelo celular para consultores e aromaterapeutas, e o Sistema MAP para profissionais que acompanham pacientes.
          </p>
          <nav className="mt-6 flex flex-wrap justify-center gap-3 text-sm" aria-label="Seções">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full border border-emerald-600 px-4 py-1.5 text-emerald-800 hover:bg-emerald-50">
                {g.title}
              </a>
            ))}
          </nav>
        </header>

        {groups.map((group) => (
          <section key={group.id} id={group.id} className="mt-16 scroll-mt-24" aria-labelledby={`${group.id}-titulo`}>
            <h2 id={`${group.id}-titulo`} className="text-2xl font-bold text-gray-900">{group.title}</h2>
            <p className="mt-2 text-gray-600">{group.intro}</p>
            <p className="mt-1 text-sm font-medium text-emerald-800">{group.plan}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {group.items.map(({ icon: Icon, name, text }) => (
                <article key={name} className="rounded-xl border border-gray-200 p-5">
                  <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-gray-900">{name}</h3>
                  <p className="mt-1 text-gray-700 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16 rounded-2xl bg-emerald-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Teste por 7 dias, sem cartão</h2>
          <p className="mt-2 text-gray-700">
            Plano Análise Facial a partir de R$ 29,90/mês. Plano Profissional com Sistema MAP por R$ 67/mês.{' '}
            <a href="/precos" className="text-emerald-800 underline font-medium">Ver os planos</a>.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-emerald-700 hover:bg-emerald-800 text-white">
              <a href={appLink}>Baixar o app</a>
            </Button>
            <Button asChild variant="outline" className="border-emerald-700 text-emerald-800">
              <a href={TRIAL_URL}>Testar o Sistema MAP</a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            O EssenciaLab apoia o bem-estar e a organização do atendimento. As medidas pela câmera são estimativas. Não faz diagnóstico e não substitui avaliação ou tratamento médico.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
