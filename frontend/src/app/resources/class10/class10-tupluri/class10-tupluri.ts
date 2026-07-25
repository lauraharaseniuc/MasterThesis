import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-tupluri',
  imports: [RouterLink],
  templateUrl: './class10-tupluri.html',
  styleUrl: './class10-tupluri.scss',
})
export class Class10Tupluri {
  readonly subject: 'informatica' | 'tic' = 'informatica';
  showVideoOperatii = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
