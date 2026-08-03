import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-class10-programa-tic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class10-programa-tic.html',
  styleUrl: './class10-programa-tic.scss',
})
export class Class10ProgramaTic {
  showPreview = false;
  readonly url = 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_41_Tehnologia_informa%C8%9Biei_%C8%99i_a_comunica%C8%9Biilor_X_TC.pdf';
  readonly safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.url}#toolbar=0`);
  }
}
