// Tipos mínimos para os componentes compartilhados em JSX usados por páginas TSX.
declare module "@/components/Header" {
  import type { FC } from "react";
  const Header: FC<{ language?: string; onLanguageChange?: (lang: string) => void }>;
  export default Header;
}

declare module "@/components/Footer" {
  import type { FC } from "react";
  const Footer: FC<{ language?: string; legalNotice?: string }>;
  export default Footer;
}

declare module "*/pages/MapWrapper.jsx" {
  import type { FC } from "react";
  const MapWrapper: FC;
  export default MapWrapper;
}
