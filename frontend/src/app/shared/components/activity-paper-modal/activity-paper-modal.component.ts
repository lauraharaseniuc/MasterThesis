import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivityGeneratorService } from '../../services/activity-generator.service';

export interface ActivityPaperDialogData {
  activityText: string;
  subject: 'informatica' | 'tic';
}

@Component({
  selector: 'app-activity-paper-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './activity-paper-modal.component.html',
  styleUrl: './activity-paper-modal.component.scss',
})
export class ActivityPaperModalComponent implements OnInit {
  loading = true;
  error = false;
  safeContent: SafeHtml = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActivityPaperDialogData,
    private dialogRef: MatDialogRef<ActivityPaperModalComponent>,
    private generator: ActivityGeneratorService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.generator.generate(this.data.activityText, this.data.subject).subscribe({
      next: text => {
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(
          this.markdownToHtml(text)
        );
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  close() {
    this.dialogRef.close();
  }

  private markdownToHtml(text: string): string {
    return text
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`{3}(?:python|cpp|c\+\+)?\n?([\s\S]*?)`{3}/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }
}
