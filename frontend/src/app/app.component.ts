import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MatIconsRegistryService} from "./service/mat-icons-registry.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private readonly matIconsRegistryService: MatIconsRegistryService) {

  }

  ngOnInit() {
    this.matIconsRegistryService.loadCustomMatIcons();
  }
}
