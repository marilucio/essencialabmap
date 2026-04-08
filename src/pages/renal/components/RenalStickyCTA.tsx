import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { track } from "../lib";

export function RenalStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <div className="hidden sm:block min-w-0">
          <div className="text-sm font-semibold text-gray-900">Aula gratuita — Rotina Renal</div>
          <div className="text-xs text-gray-500">Vagas limitadas • Acesso pelo WhatsApp</div>
        </div>
        <Button
          className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 font-bold shadow-md"
          onClick={() => {
            track("click_register_renal_webinar", { placement: "sticky" });
            document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Reservar vaga gratuita
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
