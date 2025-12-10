/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

declare function fbq(...args: unknown[]): void;
