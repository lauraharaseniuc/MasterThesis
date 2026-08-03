import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-consent-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-consent-banner.component.html',
  styleUrl: './cookie-consent-banner.component.scss'
})
export class CookieConsentBannerComponent {
  @Output() accepted = new EventEmitter<void>();
  @Output() rejected = new EventEmitter<void>();
}
