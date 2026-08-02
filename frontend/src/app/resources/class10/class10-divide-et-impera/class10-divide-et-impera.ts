import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class10-divide-et-impera',
  imports: [],
  templateUrl: './class10-divide-et-impera.html',
  styleUrl: './class10-divide-et-impera.scss',
})
export class Class10DivideEtImpera {
  readonly subject: 'informatica' | 'tic' = 'informatica';
  showVideoHanoi = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
