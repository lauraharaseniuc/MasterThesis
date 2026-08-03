import {Component} from '@angular/core';
import {ConsentService} from '../../shared/services/consent.service';

@Component({
  selector: 'app-termeni-si-conditii',
  standalone: true,
  imports: [],
  templateUrl: './termeni-si-conditii.html',
  styleUrl: './termeni-si-conditii.scss'
})
export class TermeniSiConditii {
  constructor(private readonly consentService: ConsentService) {
  }

  retrageConsimtamantul(): void {
    this.consentService.clearConsent();
    window.location.reload();
  }
}
