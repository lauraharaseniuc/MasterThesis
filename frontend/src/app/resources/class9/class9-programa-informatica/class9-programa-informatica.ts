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
  selector: 'app-class9-programa-informatica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class9-programa-informatica.html',
  styleUrl: './class9-programa-informatica.scss',
})
export class Class9ProgramaInformatica {
  profiles: ProgramaProfile[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      {
        title: 'Matematică-Informatică',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea matematică-informatică',
        url: 'https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2025/programe_scolare_cons_pub/Informatica_CS_IX_Real_Matematica_informatica.pdf',
      },
      {
        title: 'Matematică-Informatică, intensiv informatică',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea matematică-informatică, clase cu predarea disciplinei informatică în regim intensiv',
        url: 'https://rocnee.eu/images/rocnee/fisiere/curriculum/programe-scolare-liceu-transparenta-02-23-2026/Anexa_nr_49_Informatic%C4%83_IX_CS_MI_INT.pdf',
      },
      {
        title: 'Matematică-Informatică Militară',
        subtitle: 'Filiera vocațională · Profilul militar · Specializarea matematică-informatică militară',
        url: 'https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2025/programe_scolare_cons_pub/Informatica_CS_IX_Militar_Matematica_informatica_militara.pdf',
      },
      {
        title: 'Științe ale Naturii',
        subtitle: 'Filiera teoretică · Profilul real · Specializarea științe ale naturii',
        url: 'https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2025/programe_scolare_cons_pub/Informatica_CS_IX_Real_Stiinte_ale_naturii.pdf',
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
