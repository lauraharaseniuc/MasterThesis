import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-comunicare',
  imports: [RouterLink],
  templateUrl: './class9-comunicare.html',
  styleUrl: './class9-comunicare.scss',
})
export class Class9Comunicare {
  readonly subject: 'informatica' | 'tic' = 'tic';

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
