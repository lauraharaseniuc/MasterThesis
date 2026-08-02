import { Injectable } from '@angular/core';
import posthog from 'posthog-js';

const POSTHOG_KEY = 'phc_nhhscq4UQh6Nkt3zUSSF2DBBdCQfmWiz33ifN47ZThFt';
const POSTHOG_HOST = 'https://us.i.posthog.com';

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
      autocapture: false,
      capture_pageview: false
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
