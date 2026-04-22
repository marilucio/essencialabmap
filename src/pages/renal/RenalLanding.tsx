import { useEffect, useMemo } from "react";
import { RenalHero } from "./components/RenalHero";
import { RenalStats } from "./components/RenalStats";
import { RenalPainSection } from "./components/RenalPainSection";
import { RenalBeliefBreak } from "./components/RenalBeliefBreak";
import { RenalBeforeAfter } from "./components/RenalBeforeAfter";
import { RenalLearnSection } from "./components/RenalLearnSection";
import { RenalForWho } from "./components/RenalForWho";
import { RenalObjections } from "./components/RenalObjections";
import { RenalFinalForm } from "./components/RenalFinalForm";
import { RenalFAQ } from "./components/RenalFAQ";
import { RenalStickyCTA } from "./components/RenalStickyCTA";
import { captureLead, parseUtmFromLocation, persistUtm, setSeoTags, track, type RenalUtm } from "./lib";

export default function RenalLanding() {
  const utm: RenalUtm = useMemo(() => parseUtmFromLocation(), []);

  useEffect(() => {
    setSeoTags({
      title: "Doença Renal Não Precisa Ser Uma Sentença — Aula Gratuita",
      description:
        "Aula online gratuita: descubra como ter mais clareza nas decisões de alimentação, líquidos e rotina com doença renal. Acesso pelo WhatsApp.",
      canonicalPath: "/renal",
      ogType: "website",
      robots: "index,follow",
    });

    persistUtm(utm);
    track("view_renal_landing", { page: "/renal" });
    captureLead({ page: "/renal", event: "view_renal_landing", ts: new Date().toISOString(), utm });
  }, [utm]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header minimalista — zero rotas de fuga */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-800/20 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
        <div className="container mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <span className="text-base font-bold text-emerald-400">Aula Gratuita</span>
          <button
            onClick={() => {
              track("click_register_renal_webinar", { placement: "header" });
              document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex h-8 items-center justify-center rounded-md bg-emerald-500 px-4 text-xs font-bold text-white transition-colors hover:bg-emerald-400"
          >
            Reservar vaga
          </button>
        </div>
      </header>

      <main>
        {/* 1. Hook emocional */}
        <RenalHero />

        {/* 2. Estatísticas de impacto */}
        <RenalStats />

        {/* 3. Agitar a dor */}
        <RenalPainSection />

        {/* 4. Quebrar crenças + carta emocional */}
        <RenalBeliefBreak />

        {/* 5. Antes vs Depois — prova visual */}
        <RenalBeforeAfter />

        {/* 6. O que vai aprender na aula */}
        <RenalLearnSection />

        {/* 7. Para quem é */}
        <RenalForWho />

        {/* 8. Tratar objeções */}
        <RenalObjections />

        {/* 9. Formulário principal */}
        <RenalFinalForm utm={utm} />

        {/* 10. FAQ */}
        <RenalFAQ />

        {/* 11. CTA final */}
        <section className="w-full bg-slate-900 py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Quantas vezes você já comeu a mesma coisa<br className="hidden md:block" /> por medo de errar?
            </p>
            <p className="mt-4 text-slate-400">
              Essa aula pode ser o primeiro passo para mudar isso. É gratuita, online e feita para você.
            </p>
            <button
              onClick={() => {
                track("click_register_renal_webinar", { placement: "final_cta" });
                document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="mt-8 inline-flex h-14 items-center justify-center rounded-md bg-emerald-500 px-10 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 hover:scale-[1.02]"
            >
              Quero reservar minha vaga gratuita
            </button>
            <p className="mt-4 text-xs text-slate-600">
              Conteúdo educativo. Não substitui acompanhamento médico ou nutricional.
            </p>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="w-full border-t border-gray-100 bg-white py-6">
        <div className="container mx-auto max-w-5xl px-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>

      <RenalStickyCTA />
    </div>
  );
}
