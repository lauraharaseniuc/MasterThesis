import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-liste',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './class9-liste.component.html',
  styleUrl: './class9-liste.component.scss'
})
export class Class9ListeComponent {
  readonly subject: 'informatica' | 'tic' = 'informatica';
  showFisaStiva = false;
  showFisaListe = false;
  showFisaOperatiiListe = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
