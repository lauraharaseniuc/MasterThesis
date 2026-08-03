import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-8GBYRE91Z8';

@Injectable({ providedIn: 'root' })
export class GaService {
  private loaded = false;

  load(): void {
    if (this.loaded) {
      return;
    }
    this.loaded = true;

    window.dataLayer = window.dataLayer || [];
    // gtag.js recunoaște comenzile doar dacă sunt puse în dataLayer ca obiect
    // `arguments`, nu ca array — deci trebuie să rămână funcție clasică, nu arrow.
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
  }
}
