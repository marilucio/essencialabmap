/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RENAL_LEAD_ENDPOINT?: string;
  readonly VITE_RENAL_WHATSAPP_PHONE?: string;
  readonly VITE_RENAL_ADMIN_WHATSAPP_PHONE?: string;
  readonly VITE_RENAL_WEBINAR_SLUG?: string;
  readonly VITE_ESSENCIALAB_IOS_URL?: string;
  readonly VITE_ESSENCIALAB_ANDROID_URL?: string;
  readonly VITE_WEBINAR_YT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global type declarations for Facebook Pixel (compatível com snippet oficial)
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

declare var fbq: any;

export {};
