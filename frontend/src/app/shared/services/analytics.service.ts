import { Injectable } from '@angular/core';
import posthog from 'posthog-js';

const POSTHOG_KEY = 'phc_rezA2DBjTU4XG93BHb2NVFkQsc9A3oWaJ3hX22ifuLna';
const POSTHOG_HOST = 'https://eu.i.posthog.com';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // `memory` = nu se scrie nimic pe dispozitivul utilizatorului (nici cookie,
      // nici localStorage), deci nu e nevoie de consimțământ pentru PostHog.
      // Nu schimba în 'localStorage' sau 'cookie' fără a reintroduce bannerul.
      persistence: 'memory',
      autocapture: false,
      capture_pageview: false,
      disable_session_recording: true,
      person_profiles: 'identified_only'
    });
  }

  trackDownload(fileUrl: string, fileName: string): void {
    posthog.capture('material_download', {
      file_name: fileName,
      file_url: fileUrl,
      page_path: window.location.hash ? window.location.hash.slice(1) : window.location.pathname
    });
  }
}
