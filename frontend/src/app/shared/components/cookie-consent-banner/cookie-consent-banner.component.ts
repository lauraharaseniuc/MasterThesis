import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../services/consent.service';

@Component({
  selector: 'app-cookie-consent-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent-banner.component.html',
  styleUrl: './cookie-consent-banner.component.scss'
})
export class CookieConsentBannerComponent implements OnInit {
  visible = false;

  constructor(private readonly consentService: ConsentService) {
  }

  ngOnInit(): void {
    this.visible = this.consentService.getStoredConsent() === null;
  }

  accept(): void {
    this.consentService.grant();
    this.visible = false;
  }

  refuse(): void {
    this.consentService.deny();
    this.visible = false;
  }
}
