import { useState } from 'react'
import { Globe, Menu } from 'lucide-react'
import BrandLogo from './BrandLogo'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

export default function Header({ language = 'pt', onLanguageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const content = {
    pt: {
      home: 'Início',
      features: 'Funcionalidades',
      faq: 'Dúvidas',
      map: 'Sistema MAP',
    },
    en: {
      home: 'Home',
      features: 'Features',
      faq: 'FAQ',
      map: 'MAP System',
    },
    es: {
      home: 'Inicio',
      features: 'Funcionalidades',
      faq: 'Preguntas',
      map: 'Sistema MAP',
    }
  };

  const t = content[language] || content.pt;
  
  // Helper para adicionar idioma aos links
  const addLangToUrl = (url) => {
    if (language === 'pt') return url;
    if (url.includes('?')) return `${url}&lang=${language}`;
    if (url.includes('#')) return url.replace('#', `?lang=${language}#`);
    return `${url}?lang=${language}`;
  };

  const handleLanguageChange = (newLang) => {
    // Atualiza a URL com o novo idioma
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
    
    // Chama o callback se fornecido
    if (onLanguageChange) {
      onLanguageChange(newLang);
    } else {
      // Recarrega a página para aplicar o novo idioma
      window.location.reload();
    }
  };

  const handleFaqClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Se não estiver na página principal, navega para lá primeiro
    if (window.location.pathname !== '/' && !window.location.pathname.includes('index')) {
      window.location.href = addLangToUrl('/#faq');
    } else {
      // Se já estiver na página principal, apenas faz scroll
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Se não encontrar, tenta navegar mesmo assim
        window.location.href = addLangToUrl('/#faq');
      }
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" aria-label="EssenciaLab" className="flex items-center hover:opacity-80 transition-opacity">
            <BrandLogo size={36} />
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href={addLangToUrl('/funcionalidades')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t.features}
            </a>
            <a 
              href={addLangToUrl('/#faq')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              onClick={(e) => {
                // Se não estiver na página principal, navega para lá primeiro
                if (window.location.pathname !== '/' && !window.location.pathname.includes('index')) {
                  e.preventDefault();
                  window.location.href = addLangToUrl('/#faq');
                } else {
                  // Se já estiver na página principal, apenas faz scroll
                  const faqSection = document.getElementById('faq');
                  if (faqSection) {
                    e.preventDefault();
                    faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
            >
              {t.faq}
            </a>
            <a 
              href={addLangToUrl('/map')}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              {t.map}
            </a>
          </nav>

          {/* Right Side - Language Selector + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector - Desktop */}
            <div className="hidden md:block">
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[100px] border-gray-300">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt">🇧🇷 PT</SelectItem>
                  <SelectItem value="en">🇺🇸 EN</SelectItem>
                  <SelectItem value="es">🇪🇸 ES</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                  <SheetDescription className="sr-only">
                    Menu de navegação principal com links para funcionalidades, dúvidas frequentes e sistema MAP
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Logo no Mobile Menu */}
                  <div className="flex items-center mb-8 pb-4 border-b">
                    <BrandLogo size={36} />
                  </div>

                  {/* Navigation Links - Mobile */}
                  <nav className="flex flex-col space-y-4 flex-1">
                    <a 
                      href={addLangToUrl('/funcionalidades')}
                      className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.features}
                    </a>
                    <a 
                      href={addLangToUrl('/#faq')}
                      className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg py-2"
                      onClick={handleFaqClick}
                    >
                      {t.faq}
                    </a>
                    <a 
                      href={addLangToUrl('/map')}
                      className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.map}
                    </a>
                  </nav>

                  {/* Language Selector - Mobile */}
                  <div className="pt-4 border-t">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Idioma / Language
                    </label>
                    <Select value={language} onValueChange={handleLanguageChange}>
                      <SelectTrigger className="w-full border-gray-300">
                        <Globe className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt">🇧🇷 PT</SelectItem>
                        <SelectItem value="en">🇺🇸 EN</SelectItem>
                        <SelectItem value="es">🇪🇸 ES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
