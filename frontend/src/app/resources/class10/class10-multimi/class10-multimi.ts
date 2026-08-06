import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityPaperModalComponent } from '../../../shared/components/activity-paper-modal/activity-paper-modal.component';

import {VideoEmbedComponent} from "../../../shared/components/video-embed/video-embed.component";

@Component({
  selector: 'app-class10-multimi',
  imports: [VideoEmbedComponent],
  templateUrl: './class10-multimi.html',
  styleUrl: './class10-multimi.scss',
})
export class Class10Multimi {
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
