import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileNavOpen = false;

  constructor(router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.closeMobileNav());
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    document.body.style.overflow = this.mobileNavOpen ? 'hidden' : '';
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
    document.body.style.overflow = '';
  }

  continuturiInformatica = [
    {label: '1. Principii de elaborare a unui program', route: '/clasa9a/principii-de-elaborare-a-unui-program'},
    {label: '2. Subprograme', route: '/clasa9a/subprograme'},
    {label: '3. Prelucrări ale numerelor', route: '/clasa9a/prelucrari-ale-numerelor'},
    {label: '4. Liste', route: '/clasa9a/liste'},
    {label: '5. Fișiere text', route: '/clasa9a/fisiere-text'},
    {label: '6. Generarea elementelor unei liste', route: '/clasa9a/generarea-elementelor-unei-liste'},
    {label: '7. Metode de sortare a elementelor unei liste', route: '/clasa9a/metode-de-sortare-a-elementelor-unei-liste'},
    {label: '8. Introducere în programarea orientată pe obiecte în Python', route: '/clasa9a/introducere-in-programarea-orientata-pe-obiecte-in-python'},
    {label: '9. Interfețe grafice', route: '/clasa9a/interfete-grafice'}
  ];
  continuturiInformatica10a = [
    {label: '1. Mulțimi', route: '/clasa10a/multimi'},
    {label: '2. Dicționare', route: '/clasa10a/dictionare'},
    {label: '3. Tupluri', route: '/clasa10a/tupluri'},
    {label: '4. Șiruri de caractere în Python', route: '/clasa10a/siruri-de-caractere-in-python'},
    {label: '5. Metode simple de criptare a șirurilor de caractere și verificare a integrității datelor', route: '/clasa10a/metode-simple-de-criptare'},
    {label: '6. Modelul conceptual mixt în Python', route: '/clasa10a/modelul-conceptual-mixt-in-python'},
    {label: '7. Tablouri bidimensionale în C++', route: '/clasa10a/tablouri-bidimensionale-in-cpp'},
    {label: '8. Șiruri de caractere în C++', route: '/clasa10a/siruri-de-caractere-in-cpp'},
    {label: '9. Structuri de date în C++ pentru memorarea datelor neomogene (înregistrări)', route: '/clasa10a/structuri-de-date-in-cpp'},
    {label: '10. Subprograme recursive', route: '/clasa10a/subprograme-recursive'},
    {label: '11. Metoda Divide et impera', route: '/clasa10a/metoda-divide-et-impera'},
    {label: '12. Metode de prelucrare a listelor sortate', route: '/clasa10a/metode-de-prelucrare-a-listelor-sortate'},
    {label: '13. Algoritmi de umplere', route: '/clasa10a/algoritmi-de-umplere'},
    {label: '14. Metoda Greedy', route: '/clasa10a/metoda-greedy'}
  ];
  continuturiTIC10a = [
    {label: '1. Securitate cibernetică și etică în spațiul digital', route: '/clasa10a/securitate-cibernetica'},
    {label: '2. Navigare avansată pe web', route: '/clasa10a/navigare-avansata-pe-web'},
    {label: '3. Pagini web', route: '/clasa10a/pagini-web'},
    {label: '4. Birotică. Calcul tabelar', route: '/clasa10a/calcul-tabelar'},
    {label: '5. Imagini digitale', route: '/clasa10a/imagini-digitale'},
    {label: '6. Întreținere a unui sistem de calcul și depanare la nivel elementar a unor disfuncționalități frecvente', route: '/clasa10a/intretinere-sistem-de-calcul'}
  ];
  continuturiTIC = [
    {label: '1. Comunicare și colaborare digitală', route: '/clasa9a/comunicare-si-colaborare-digitala'},
    {label: '2. Aplicații și platforme care sprijină învățarea', route: '/clasa9a/aplicatii-si-platforme-care-sprijina-invatarea'},
    {label: '3. Introducere în inteligența artificială', route: '/clasa9a/introducere-in-inteligenta-artificiala'},
    {label: '4. Introducere în tehnologii emergente', route: '/clasa9a/introducere-in-tehnologii-emergente'},
    {label: '5. Birotică. Documente digitale', route: '/clasa9a/documente-digitale'},
    {label: '6. Birotică. Prezentări digitale', route: '/clasa9a/prezentari-digitale'},
    {label: '7. Componenta hardware a unui sistem de calcul', route: '/clasa9a/componenta-hardware-a-unui-sistem-de-calcul'},
    {label: '8. Componenta software a unui sistem de calcul', route: '/clasa9a/componenta-software-a-unui-sistem-de-calcul'}
  ];
}
