import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import IdentificationSection from './components/IdentificationSection';
import UnderstandingSection from './components/UnderstandingSection';
import QuemSouSection from './components/QuemSouSection';
import SolutionSection from './components/SolutionSection';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import FooterCTA from './components/FooterCTA';

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags para a versão espanhola
    document.title = "Método CALMA# - Supera la Ansiedad Naturalmente | Kit SOS Ansiedad";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Transforma tu ansiedad en calma con el Método CALMA# del Dr. Marilúcio. Kit completo con audios neuroacústicos, técnicas probadas y garantía de 30 días. ¡Resultados desde la primera semana!'
      );
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'ansiedad, pánico, método calma, audios neuroacústicos, superar ansiedad, técnicas relajación, Dr Marilúcio, kit sos ansiedad, tratamiento natural ansiedad, España, México, Argentina, Colombia'
      );
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 
        'Método CALMA# - Supera la Ansiedad Naturalmente | Resultados en 7 días'
      );
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Descubre el método revolucionario que ya ayudó a más de 15.000 personas a superar la ansiedad. Audios neuroacústicos + técnicas probadas + garantía total.'
      );
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/metodocalmabes');
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = window.location.origin + '/metodocalmabes';
      document.head.appendChild(newCanonical);
    }

    // Hreflang tags para SEO internacional
    const hreflangEs = document.querySelector('link[hreflang="es"]');
    if (!hreflangEs) {
      const newHreflangEs = document.createElement('link');
      newHreflangEs.rel = 'alternate';
      newHreflangEs.hreflang = 'es';
      newHreflangEs.href = window.location.origin + '/metodocalmabes';
      document.head.appendChild(newHreflangEs);
    }

    const hreflangPt = document.querySelector('link[hreflang="pt-BR"]');
    if (!hreflangPt) {
      const newHreflangPt = document.createElement('link');
      newHreflangPt.rel = 'alternate';
      newHreflangPt.hreflang = 'pt-BR';
      newHreflangPt.href = window.location.origin + '/metodocalmab';
      document.head.appendChild(newHreflangPt);
    }

    // Schema.org structured data para melhor SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Método CALMA# - Kit SOS Ansiedad",
      "description": "Sistema completo para superar la ansiedad naturalmente con audios neuroacústicos y técnicas probadas",
      "brand": {
        "@type": "Brand",
        "name": "Dr. Marilúcio"
      },
      "offers": {
        "@type": "Offer",
        "price": "5.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "priceValidUntil": new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "15000"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Marilúcio",
        "jobTitle": "Especialista en Ansiedad y Neurociencia"
      }
    });
    document.head.appendChild(schemaScript);

    // Carregar o script de localização de preços
    const priceScript = document.createElement('script');
    priceScript.src = '/js/price-localizer.js';
    priceScript.async = true;
    document.head.appendChild(priceScript);

    // Carregar o script de contador de escassez
    const scarcityScript = document.createElement('script');
    scarcityScript.src = '/js/scarcity-counter.js';
    scarcityScript.async = true;
    document.head.appendChild(scarcityScript);

    // Carregar o script de atualização de barra de progresso
    const progressScript = document.createElement('script');
    progressScript.src = '/js/progress-bar-updater.js';
    progressScript.async = true;
    document.head.appendChild(progressScript);

    // Cleanup function
    return () => {
      // Remove schema script on unmount
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
      if (priceScript.parentNode) {
        priceScript.parentNode.removeChild(priceScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Seções da landing page em ordem */}
      <HeroSection />
      <IdentificationSection />
      <UnderstandingSection />
      <QuemSouSection />
      <SolutionSection />
      <BonusSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterCTA />
      
      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511999999999?text=Hola,%20tengo%20dudas%20sobre%20el%20Método%20CALMA%23"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Contactar por WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Pixel de tracking (placeholder) */}
      <div style={{ display: 'none' }}>
        <img 
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          height="1" 
          width="1" 
          alt=""
        />
      </div>
    </div>
  );
};

export default Index;