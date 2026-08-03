import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ProgramaProfile {
  title: string;
  subtitle: string;
  url: string;
  safeUrl: SafeResourceUrl;
  showPreview: boolean;
}

@Component({
  selector: 'app-class10-programa-informatica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class10-programa-informatica.html',
  styleUrl: './class10-programa-informatica.scss',
})
export class Class10ProgramaInformatica {
  profiles: ProgramaProfile[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      {
        title: 'Matematică-Informatică',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea matematică-informatică',
        url: 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_44_Informatic%C4%83_X_CS_MI.pdf',
      },
      {
        title: 'Matematică-Informatică, intensiv informatică',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea matematică-informatică, clase cu predarea disciplinei informatică în regim intensiv',
        url: 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_50_Informatic%C4%83_X_CS_MI_INT.pdf',
      },
      {
        title: 'Matematică-Informatică Militară',
        subtitle: 'Filiera vocațională · Profilul militar · Specializarea matematică-informatică militară',
        url: 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_45_Informatic%C4%83_X_CS_MI_MLT.pdf',
      },
      {
        title: 'Științe ale Naturii',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea științe ale naturii',
        url: 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_53_Informatic%C4%83_X_CS_SN.pdf',
      },
    ];
    this.profiles = raw.map(p => ({
      ...p,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`${p.url}#toolbar=0`),
      showPreview: false,
    }));
  }

  togglePreview(profile: ProgramaProfile): void {
    profile.showPreview = !profile.showPreview;
  }
}
