import { MapHeader } from "./components/MapHeader";
import Footer from "@/components/Footer";
import { legalNotice } from "./content";
import { HeroSection } from "./components/HeroSection";
import { SecondConsultSection } from "./components/SecondConsultSection";
import { FlowSection } from "./components/FlowSection";
import { NotDoSection } from "./components/NotDoSection";
import { HormonalSection } from "./components/HormonalSection";
import { AuthorSection } from "./components/AuthorSection";
import { DataSecuritySection } from "./components/DataSecuritySection";
import { FitSection } from "./components/FitSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";

type Props = { language?: string };

// Landing do EssenciaLab MAP (rota /map). Copy somente em português;
// o idioma recebido só afeta os rótulos do footer compartilhado.
export default function MapLanding({ language = "pt" }: Props) {
  return (
    <div id="topo" className="min-h-screen bg-white text-slate-900">
      <MapHeader />
      <main>
        <HeroSection />
        <SecondConsultSection />
        <FlowSection />
        <NotDoSection />
        <HormonalSection />
        <AuthorSection />
        <DataSecuritySection />
        <FitSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer language={language} legalNotice={legalNotice} />
    </div>
  );
}
