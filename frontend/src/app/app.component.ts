import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs/operators';
import {HeaderComponent} from "./header/header.component";
import {MatIconsRegistryService} from "./service/mat-icons-registry.service";
import {ConsentService} from "./shared/services/consent.service";
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

  constructor(
    private readonly matIconsRegistryService: MatIconsRegistryService,
    private readonly consentService: ConsentService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.matIconsRegistryService.loadCustomMatIcons();
    this.consentService.applyStoredConsent();
    this.trackPageViews();
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const gtagFn = (window as any).gtag;
        if (typeof gtagFn === 'function') {
          gtagFn('event', 'page_view', {
            page_path: event.urlAfterRedirects,
            page_location: window.location.href,
            page_title: document.title
          });
        }
      });
  }
}
