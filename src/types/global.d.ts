// Global type declarations for Facebook Pixel
declare global {
  interface Window {
    fbq: (action: string, eventName?: string, parameters?: any) => void;
    _fbq: any;
  }
}

// Facebook Pixel function type
declare function fbq(action: string, eventName?: string, parameters?: any): void;

export {};