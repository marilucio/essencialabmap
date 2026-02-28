
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm border-green-200 text-green-700 font-semibold shadow-md flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">
              {languages.find(l => l.code === language)?.label}
            </span>
            <span className="sm:hidden">
              {languages.find(l => l.code === language)?.flag}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-green-100">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as any)}
              className={`cursor-pointer flex items-center gap-2 ${language === lang.code ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-700'}`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
