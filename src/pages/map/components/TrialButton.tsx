import { ArrowRight } from "lucide-react";
import { TRIAL_URL, TRIAL_GUARANTEE } from "../constants";
import { trackStartTrial } from "../tracking";

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
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";
  const styles =
    tone === "dark"
      ? "bg-green-700 text-white hover:bg-green-800 focus-visible:ring-green-400 focus-visible:ring-offset-white"
      : "bg-white text-green-800 hover:bg-green-50 focus-visible:ring-white focus-visible:ring-offset-green-800";

  return (
    <div className={`flex flex-col items-start gap-3 ${className}`}>
      <a
        href={TRIAL_URL}
        target="_blank"
        rel="noopener"
        onClick={() => trackStartTrial(placement)}
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
