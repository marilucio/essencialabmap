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
    const w = window as any;
    if (!document.querySelector('script[data-meta-pixel-renal="1"]')) {
      const script = document.createElement("script");
      script.setAttribute("data-meta-pixel-renal", "1");
      script.text = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1176389559234307');
fbq('track', 'PageView');
window.__renalCompleteRegistration = function() { fbq('track', 'CompleteRegistration'); };
      `;
      document.head.appendChild(script);
    }

    if (!document.querySelector('noscript[data-meta-pixel-renal="1"]')) {
      const ns = document.createElement("noscript");
      ns.setAttribute("data-meta-pixel-renal", "1");
      ns.innerHTML =
        '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1176389559234307&ev=PageView&noscript=1" />';
      document.head.appendChild(ns);
    }

    w.__renalCompleteRegistration =
      w.__renalCompleteRegistration ||
      (() => {
        if (typeof w.fbq === "function") w.fbq("track", "CompleteRegistration");
      });

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
