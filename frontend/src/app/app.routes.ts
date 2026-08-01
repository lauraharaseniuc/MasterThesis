import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {Class9PrincipiiComponent} from "./resources/class9/class9-principii/class9-principii.component";
import {Class9SubprogrameComponent} from "./resources/class9/class9-subprograme/class9-subprograme.component";
import {Class9PrelucrariComponent} from "./resources/class9/class9-prelucrari/class9-prelucrari.component";
import {Class9PrelucrariOglindit} from "./resources/class9/class9-prelucrari-oglindit/class9-prelucrari-oglindit";
import {Class9ListeComponent} from "./resources/class9/class9-liste/class9-liste.component";
import {Class9ListeFise} from "./resources/class9/class9-liste-fise/class9-liste-fise";
import {Class9ListeMutabilitate} from "./resources/class9/class9-liste-mutabilitate/class9-liste-mutabilitate";
import {Class9FisiereComponent} from "./resources/class9/class9-fisiere/class9-fisiere.component";
import {Class9FisiereFise} from "./resources/class9/class9-fisiere-fise/class9-fisiere-fise";
import {Class9SubprogrameFise} from "./resources/class9/class9-subprograme-fise/class9-subprograme-fise";
import {Class9GenerareComponent} from "./resources/class9/class9-generare/class9-generare.component";
import {Class9SortareComponent} from "./resources/class9/class9-sortare/class9-sortare.component";
import {Class9SortareFise} from "./resources/class9/class9-sortare-fise/class9-sortare-fise";
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
import {Class10Multimi} from "./resources/class10/class10-multimi/class10-multimi";
import {Class10Dictionare} from "./resources/class10/class10-dictionare/class10-dictionare";
import {Class10Tupluri} from "./resources/class10/class10-tupluri/class10-tupluri";
import {Class10TupluriFise} from "./resources/class10/class10-tupluri-fise/class10-tupluri-fise";
import {Class10SiruriPython} from "./resources/class10/class10-siruri-python/class10-siruri-python";
import {Class10SiruriFise} from "./resources/class10/class10-siruri-fise/class10-siruri-fise";
import {Class10MetodeCriptare} from "./resources/class10/class10-metode-criptare/class10-metode-criptare";
import {Class10ModelConceptual} from "./resources/class10/class10-model-conceptual/class10-model-conceptual";
import {Class10TablouriCpp} from "./resources/class10/class10-tablouri-cpp/class10-tablouri-cpp";
import {Class10SiruriCpp} from "./resources/class10/class10-siruri-cpp/class10-siruri-cpp";
import {Class10StructuriCpp} from "./resources/class10/class10-structuri-cpp/class10-structuri-cpp";
import {Class10SubprogrameRecursive} from "./resources/class10/class10-subprograme-recursive/class10-subprograme-recursive";
import {Class10DivideEtImpera} from "./resources/class10/class10-divide-et-impera/class10-divide-et-impera";
import {Class10MetodePrelucrare} from "./resources/class10/class10-metode-prelucrare/class10-metode-prelucrare";
import {Class10AlgoritmiUmplere} from "./resources/class10/class10-algoritmi-umplere/class10-algoritmi-umplere";
import {Class10Greedy} from "./resources/class10/class10-greedy/class10-greedy";
import {Class10TicSecuritate} from "./resources/class10/class10-tic-securitate/class10-tic-securitate";
import {Class10TicNavigare} from "./resources/class10/class10-tic-navigare/class10-tic-navigare";
import {Class10TicPaginiWeb} from "./resources/class10/class10-tic-pagini-web/class10-tic-pagini-web";
import {Class10TicCalculTabelar} from "./resources/class10/class10-tic-calcul-tabelar/class10-tic-calcul-tabelar";
import {Class10TicImageniDigitale} from "./resources/class10/class10-tic-imagini-digitale/class10-tic-imagini-digitale";
import {Class10TicIntretinere} from "./resources/class10/class10-tic-intretinere/class10-tic-intretinere";
import {Class9ProgramaInformatica} from "./resources/class9/class9-programa-informatica/class9-programa-informatica";
import {Class10ProgramaInformatica} from "./resources/class10/class10-programa-informatica/class10-programa-informatica";
import {Class9ProgramaTic} from "./resources/class9/class9-programa-tic/class9-programa-tic";
import {Class10ProgramaTic} from "./resources/class10/class10-programa-tic/class10-programa-tic";
import {InstrumenteDigitale} from "./resources/instrumente-digitale/instrumente-digitale";
import {InstrumenteDigitaleTic} from "./resources/instrumente-digitale-tic/instrumente-digitale-tic";
import {Class9PlanificareTic} from "./resources/class9/class9-planificare-tic/class9-planificare-tic";
import {Class9PlanificareInfoStiinte} from "./resources/class9/class9-planificare-info-stiinte/class9-planificare-info-stiinte";
import {Class9PrincipiiFise} from "./resources/class9/class9-principii-fise/class9-principii-fise";
import {Class10PlanificareTic} from "./resources/class10/class10-planificare-tic/class10-planificare-tic";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  { path: 'clasa9a/programa-informatica', component: Class9ProgramaInformatica },
  { path: 'clasa10a/programa-informatica', component: Class10ProgramaInformatica },
  { path: 'clasa9a/programa-tic', component: Class9ProgramaTic },
  { path: 'clasa10a/programa-tic', component: Class10ProgramaTic },
  { path: 'instrumente-digitale', component: InstrumenteDigitale },
  { path: 'instrumente-digitale-tic', component: InstrumenteDigitaleTic },
  { path: 'clasa9a/planificare-tic', component: Class9PlanificareTic },
  { path: 'clasa9a/planificare-informatica-stiinte-ale-naturii', component: Class9PlanificareInfoStiinte },
  { path: 'clasa9a/principii-fise', component: Class9PrincipiiFise },
  { path: 'clasa10a/planificare-tic', component: Class10PlanificareTic },
  { path: 'clasa9a/principii-de-elaborare-a-unui-program', component: Class9PrincipiiComponent },
  { path: 'clasa9a/subprograme', component: Class9SubprogrameComponent },
  { path: 'clasa9a/subprograme-fise', component: Class9SubprogrameFise },
  { path: 'clasa9a/prelucrari-ale-numerelor', component: Class9PrelucrariComponent },
  { path: 'clasa9a/prelucrari-oglindit', component: Class9PrelucrariOglindit },
  { path: 'clasa9a/liste', component: Class9ListeComponent },
  { path: 'clasa9a/liste-fise', component: Class9ListeFise },
  { path: 'clasa9a/liste-mutabilitate', component: Class9ListeMutabilitate },
  { path: 'clasa9a/fisiere-text', component: Class9FisiereComponent },
  { path: 'clasa9a/fisiere-text-fise', component: Class9FisiereFise },
  { path: 'clasa9a/generarea-elementelor-unei-liste', component: Class9GenerareComponent },
  { path: 'clasa9a/metode-de-sortare-a-elementelor-unei-liste', component: Class9SortareComponent },
  { path: 'clasa9a/sortare-fise', component: Class9SortareFise },
  { path: 'clasa9a/introducere-in-programarea-orientata-pe-obiecte-in-python', component: Class9OopComponent },
  { path: 'clasa9a/interfete-grafice', component: Class9InterfeteComponent },
  { path: 'clasa9a/comunicare-si-colaborare-digitala', component: Class9Comunicare },
  { path: 'clasa9a/aplicatii-si-platforme-care-sprijina-invatarea', component: Class9Aplicatii },
  { path: 'clasa9a/introducere-in-inteligenta-artificiala', component: Class9IntroducereAi },
  { path: 'clasa9a/introducere-in-tehnologii-emergente', component: Class9IntroducereTehnologii },
  { path: 'clasa9a/documente-digitale', component: Class9DocumenteDigitale },
  { path: 'clasa9a/prezentari-digitale', component: Class9PrezentariDigitale },
  { path: 'clasa9a/componenta-hardware-a-unui-sistem-de-calcul', component: Class9ComponentaHardware },
  { path: 'clasa9a/componenta-software-a-unui-sistem-de-calcul', component: Class9ComponentaSoftware },
  { path: 'clasa10a/multimi', component: Class10Multimi },
  { path: 'clasa10a/dictionare', component: Class10Dictionare },
  { path: 'clasa10a/tupluri', component: Class10Tupluri },
  { path: 'clasa10a/tupluri-fise', component: Class10TupluriFise },
  { path: 'clasa10a/siruri-de-caractere-in-python', component: Class10SiruriPython },
  { path: 'clasa10a/siruri-fise', component: Class10SiruriFise },
  { path: 'clasa10a/metode-simple-de-criptare', component: Class10MetodeCriptare },
  { path: 'clasa10a/modelul-conceptual-mixt-in-python', component: Class10ModelConceptual },
  { path: 'clasa10a/tablouri-bidimensionale-in-cpp', component: Class10TablouriCpp },
  { path: 'clasa10a/siruri-de-caractere-in-cpp', component: Class10SiruriCpp },
  { path: 'clasa10a/structuri-de-date-in-cpp', component: Class10StructuriCpp },
  { path: 'clasa10a/subprograme-recursive', component: Class10SubprogrameRecursive },
  { path: 'clasa10a/metoda-divide-et-impera', component: Class10DivideEtImpera },
  { path: 'clasa10a/metode-de-prelucrare-a-listelor-sortate', component: Class10MetodePrelucrare },
  { path: 'clasa10a/algoritmi-de-umplere', component: Class10AlgoritmiUmplere },
  { path: 'clasa10a/metoda-greedy', component: Class10Greedy },
  { path: 'clasa10a/securitate-cibernetica', component: Class10TicSecuritate },
  { path: 'clasa10a/navigare-avansata-pe-web', component: Class10TicNavigare },
  { path: 'clasa10a/pagini-web', component: Class10TicPaginiWeb },
  { path: 'clasa10a/calcul-tabelar', component: Class10TicCalculTabelar },
  { path: 'clasa10a/imagini-digitale', component: Class10TicImageniDigitale },
  { path: 'clasa10a/intretinere-sistem-de-calcul', component: Class10TicIntretinere }
];
