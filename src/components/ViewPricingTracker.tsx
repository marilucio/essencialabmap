import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";
import type { Publico } from "@/lib/audience";

type Props = { publico?: Publico | null };

// Marcador invisível dentro da seção de planos: observa o bloco que o contém
// (o conteúdo da seção) e dispara view_pricing uma vez por página, quando
// qualquer parte dele entra na tela.
export function ViewPricingTracker({ publico }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        trackEvent("view_pricing", {}, publico);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [publico]);

  return <div ref={ref} aria-hidden="true" />;
}
