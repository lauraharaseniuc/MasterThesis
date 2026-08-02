import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-componenta-hardware',
  imports: [RouterLink],
  templateUrl: './class9-componenta-hardware.html',
  styleUrl: './class9-componenta-hardware.scss',
})
export class Class9ComponentaHardware {
  readonly subject: 'informatica' | 'tic' = 'tic';
  showFisaHardware = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
