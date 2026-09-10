import { MessageCircle } from "lucide-react";
import { finalCta } from "../content";
import { WHATSAPP_URL } from "../constants";
import { trackWhatsAppContact } from "../tracking";
import { TrialButton } from "./TrialButton";

export function FinalCTASection() {
  return (
    <section className="bg-green-800 px-4 py-16 text-white md:py-24">
      <div className="container mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">{finalCta.title}</h2>
        <TrialButton
          placement="final"
          label={finalCta.cta}
          tone="light"
          className="mt-10 items-center"
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          onClick={trackWhatsAppContact}
          className="mt-8 inline-flex items-center gap-2 rounded-md font-medium text-green-50 underline underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {finalCta.whatsapp}
        </a>
      </div>
    </section>
  );
}
