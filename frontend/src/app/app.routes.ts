import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {Class9PrincipiiComponent} from "./resources/class9/class9-principii/class9-principii.component";
import {Class9SubprogrameComponent} from "./resources/class9/class9-subprograme/class9-subprograme.component";
import {Class9PrelucrariComponent} from "./resources/class9/class9-prelucrari/class9-prelucrari.component";
import {Class9ListeComponent} from "./resources/class9/class9-liste/class9-liste.component";
import {Class9FisiereComponent} from "./resources/class9/class9-fisiere/class9-fisiere.component";
import {Class9GenerareComponent} from "./resources/class9/class9-generare/class9-generare.component";
import {Class9SortareComponent} from "./resources/class9/class9-sortare/class9-sortare.component";
import {Class9OopComponent} from "./resources/class9/class9-oop/class9-oop.component";
import {Class9InterfeteComponent} from "./resources/class9/class9-interfete/class9-interfete.component";
import {Class9Comunicare} from "./resources/class9/class9-comunicare/class9-comunicare";
import {Class9Aplicatii} from "./resources/class9/class9-aplicatii/class9-aplicatii";
import {Class9IntroducereAi} from "./resources/class9/class9-introducere-ai/class9-introducere-ai";
import {
  Class9IntroducereTehnologii
} from "./resources/class9/class9-introducere-tehnologii/class9-introducere-tehnologii";
import {Class9DocumenteDigitale} from "./resources/class9/class9-documente-digitale/class9-documente-digitale";
import {Class9PrezentariDigitale} from "./resources/class9/class9-prezentari-digitale/class9-prezentari-digitale";
import {Class9ComponentaHardware} from "./resources/class9/class9-componenta-hardware/class9-componenta-hardware";
import {Class9ComponentaSoftware} from "./resources/class9/class9-componenta-software/class9-componenta-software";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  { path: 'clasa9a/principii-de-elaborare-a-unui-program', component: Class9PrincipiiComponent },
  { path: 'clasa9a/subprograme', component: Class9SubprogrameComponent },
  { path: 'clasa9a/prelucrari-ale-numerelor', component: Class9PrelucrariComponent },
  { path: 'clasa9a/liste', component: Class9ListeComponent },
  { path: 'clasa9a/fisiere-text', component: Class9FisiereComponent },
  { path: 'clasa9a/generarea-elementelor-unei-liste', component: Class9GenerareComponent },
  { path: 'clasa9a/metode-de-sortare-a-elementelor-unei-liste', component: Class9SortareComponent },
  { path: 'clasa9a/introducere-in-programarea-orientata-pe-obiecte-in-python', component: Class9OopComponent },
  { path: 'clasa9a/interfete-grafice', component: Class9InterfeteComponent },
  { path: 'clasa9a/comunicare-si-colaborare-digitala', component: Class9Comunicare },
  { path: 'clasa9a/aplicatii-si-platforme-care-sprijina-invatarea', component: Class9Aplicatii },
  { path: 'clasa9a/introducere-in-inteligenta-artificiala', component: Class9IntroducereAi },
  { path: 'clasa9a/introducere-in-tehnologii-emergente', component: Class9IntroducereTehnologii },
  { path: 'clasa9a/documente-digitale', component: Class9DocumenteDigitale },
  { path: 'clasa9a/prezentari-digitale', component: Class9PrezentariDigitale },
  { path: 'clasa9a/componenta-hardware-a-unui-sistem-de-calcul', component: Class9ComponentaHardware },
  { path: 'clasa9a/componenta-software-a-unui-sistem-de-calcul', component: Class9ComponentaSoftware }
];
