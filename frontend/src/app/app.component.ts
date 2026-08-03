import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MatIconsRegistryService} from "./service/mat-icons-registry.service";
import {AnalyticsService} from "./shared/services/analytics.service";
import {ConsentService} from "./shared/services/consent.service";
import {GaService} from "./shared/services/ga.service";
import {CookieConsentBannerComponent} from "./shared/components/cookie-consent-banner/cookie-consent-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CookieConsentBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  showConsentBanner = false;

  constructor(
    private readonly matIconsRegistryService: MatIconsRegistryService,
    private readonly analyticsService: AnalyticsService,
    private readonly consentService: ConsentService,
    private readonly gaService: GaService
  ) {
  }

  ngOnInit() {
    this.matIconsRegistryService.loadCustomMatIcons();
    this.analyticsService.init();
    this.trackDownloads();

    const consent = this.consentService.getConsent();
    if (consent === 'granted') {
      this.gaService.load();
    } else if (consent === null) {
      this.showConsentBanner = true;
    }
  }

  onConsentAccepted(): void {
    this.consentService.setConsent('granted');
    this.showConsentBanner = false;
    this.gaService.load();
  }

  onConsentRejected(): void {
    this.consentService.setConsent('denied');
    this.showConsentBanner = false;
  }

  private trackDownloads(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[download]') as HTMLAnchorElement | null;
      if (!link) {
        return;
      }
      const fileUrl = link.getAttribute('href') || '';
      const fileName = decodeURIComponent(fileUrl.split('/').pop() || fileUrl);
      this.analyticsService.trackDownload(fileUrl, fileName);
    });
  }
}
