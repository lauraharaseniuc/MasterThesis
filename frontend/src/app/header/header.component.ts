import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

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
  subMenuItems = [
    {label: '1. Principii de elaborare a unui program', route: '/clasa9a/principii-de-elaborare-a-unui-program'},
    {label: '2. Subprograme', route: '/clasa9a/subprograme'},
    {label: '3. Prelucrări ale numerelor', route: '/clasa9a/prelucrari-ale-numerelor'},
    {label: '4. Liste', route: '/clasa9a/liste'},
    {label: '5. Fișiere text', route: '/clasa9a/fisiere-text'},
    {label: '6. Generarea elementelor unei liste', route: '/clasa9a/generarea-elementelor-unei-liste'},
    {label: '7. Metode de sortare a elementelor unei liste', route: '/clasa9a/metode-de-sortare-a-elementelor-unei-liste'},
    {label: '8. Introducere în programarea orientată pe obiecte în Python', route: '/clasa9a/introducere-in-programarea-orientata-pe-obiecte-in-python'},
    {label: '9. Interfețe grafice', route: '/clasa9a/interfețe-grafice'}
  ];
}
