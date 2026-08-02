import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs/operators';
import {HeaderComponent} from "./header/header.component";
import {MatIconsRegistryService} from "./service/mat-icons-registry.service";

declare const gtag: (...args: unknown[]) => void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private readonly matIconsRegistryService: MatIconsRegistryService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.matIconsRegistryService.loadCustomMatIcons();
    this.trackPageViews();
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (typeof gtag === 'function') {
          gtag('event', 'page_view', {
            page_path: event.urlAfterRedirects,
            page_location: window.location.href,
            page_title: document.title
          });
        }
      });
  }
}
