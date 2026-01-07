import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconsRegistryService {
  constructor(private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer) {
  }

  public loadCustomMatIcons(): void {
    const icons: SvgIcon[] = [
      {iconName: 'right-arrow', filePath: 'right-arrow-icon.svg'}
    ];

    icons.forEach(icon => this.matIconRegistry.addSvgIcon(
      icon.iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon.filePath}`)
    ));
  }
}

interface SvgIcon {
  iconName: string;
  filePath: string;
}
