import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-fisiere',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './class9-fisiere.component.html',
  styleUrl: './class9-fisiere.component.scss'
})
export class Class9FisiereComponent {
  readonly subject: 'informatica' | 'tic' = 'informatica';
  showVideoSfarsitFisier = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
