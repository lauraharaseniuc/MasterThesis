import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-tic-pagini-web',
  imports: [RouterLink],
  templateUrl: './class10-tic-pagini-web.html',
  styleUrl: './class10-tic-pagini-web.scss',
})
export class Class10TicPaginiWeb {
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
