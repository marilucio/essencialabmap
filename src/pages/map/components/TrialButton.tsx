import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { TRIAL_URL, TRIAL_GUARANTEE } from "../constants";
import { trackStartTrial } from "../tracking";
import { buildTrialUrl, getStoredPublico, refreshTrialHref } from "@/lib/audience";
import { trackEvent } from "@/lib/tracking";

type Props = {
  placement: string;
  label: string;
  showGuarantee?: boolean;
  className?: string;
  tone?: "dark" | "light";
};

// Único CTA de conversão da página. Todos os botões passam por aqui,
// então o destino (?src=map) e o evento StartTrial ficam em um só lugar.
export function TrialButton({
  placement,
  label,
  showGuarantee = true,
  className = "",
  tone = "dark",
}: Props) {
  const base =
    "map-trial inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";
  // O HTML do /map é pré-renderizado sem window: começa com o TRIAL_URL puro e,
  // no navegador, acrescenta publico (quando conhecido) e pagina=map.
  const [href, setHref] = useState(TRIAL_URL);
  useEffect(() => setHref(buildTrialUrl("map", getStoredPublico())), []);
  const styles =
    tone === "dark"
      ? "map-trial-dark bg-green-700 text-white hover:bg-green-800 focus-visible:ring-green-400 focus-visible:ring-offset-white"
      : "map-trial-light bg-white text-green-800 hover:bg-green-50 focus-visible:ring-white focus-visible:ring-offset-green-800";

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        onPointerDown={(e) => refreshTrialHref(e.currentTarget, "map", getStoredPublico())}
        onClick={(e) => {
          refreshTrialHref(e.currentTarget, "map", getStoredPublico());
          trackEvent("click_cta", { posicao: placement === "pricing" ? "planos" : placement });
          trackStartTrial(placement);
        }}
        className={`${base} ${styles}`}
      >
        {label}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </a>
      {showGuarantee && (
        <p
          className={`text-sm ${tone === "dark" ? "text-slate-600" : "text-green-50"}`}
        >
          {TRIAL_GUARANTEE}
        </p>
      )}
    </div>
  );
}
