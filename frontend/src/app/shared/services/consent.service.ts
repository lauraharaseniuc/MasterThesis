import { Injectable } from '@angular/core';

const CONSENT_STORAGE_KEY = 'levelupedu_cookie_consent';
const GA_MEASUREMENT_ID = 'G-8GBYRE91Z8';

export type ConsentStatus = 'granted' | 'denied' | null;

@Injectable({ providedIn: 'root' })
export class ConsentService {

  getStoredConsent(): ConsentStatus {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  }

  grant(): void {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');
    this.loadGoogleAnalytics();
  }

  deny(): void {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'denied');
  }

  resetConsent(): void {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    window.location.reload();
  }

  applyStoredConsent(): void {
    if (this.getStoredConsent() === 'granted') {
      this.loadGoogleAnalytics();
    }
  }

  private loadGoogleAnalytics(): void {
    const w = window as any;
    if (w.__gaLoaded) {
      return;
    }
    w.__gaLoaded = true;

    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    };
    w.gtag('js', new Date());
    w.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
}
