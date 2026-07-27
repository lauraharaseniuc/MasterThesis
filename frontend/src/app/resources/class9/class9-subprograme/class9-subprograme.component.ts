import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivityPaperModalComponent,
} from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

@Component({
  selector: 'app-class9-subprograme',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './class9-subprograme.component.html',
  styleUrl: './class9-subprograme.component.scss',
})
export class Class9SubprogrameComponent {
  readonly subject: 'informatica' | 'tic' = 'informatica';
  showFisaSubprograme = false;
  showVideoSubprograme = false;
  showFisaGhidFunctii = false;

  constructor(private dialog: MatDialog) {}

  generateActivity(activityText: string) {
    this.dialog.open(ActivityPaperModalComponent, {
      data: { activityText, subject: this.subject },
      width: '760px',
      maxWidth: '95vw',
    });
  }
}
