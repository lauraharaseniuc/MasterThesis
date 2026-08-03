import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-class9-programa-tic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class9-programa-tic.html',
  styleUrl: './class9-programa-tic.scss',
})
export class Class9ProgramaTic {
  showPreview = false;
  readonly url = 'https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2025/programe_scolare_cons_pub/Tehnologia_informatiei_si_a_comunicatiilor_TC_IX.pdf';
  readonly safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.url}#toolbar=0`);
  }
}
