import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProofSection } from "./components/ProofSection";
import { OfferSection } from "./components/OfferSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { FooterCTA } from "./components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;