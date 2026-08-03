import { Injectable } from '@angular/core';

export type ConsentStatus = 'granted' | 'denied';

const CONSENT_KEY = 'levelupedu_cookie_consent';

@Injectable({ providedIn: 'root' })
export class ConsentService {
  getConsent(): ConsentStatus | null {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  }

  setConsent(status: ConsentStatus): void {
    localStorage.setItem(CONSENT_KEY, status);
  }

  clearConsent(): void {
    localStorage.removeItem(CONSENT_KEY);
  }
}
