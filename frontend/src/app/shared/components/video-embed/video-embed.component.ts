import {Component, Input} from '@angular/core';

/**
 * Trimite utilizatorul pe YouTube într-o filă nouă, în loc să încorporeze playerul.
 *
 * Motivul e juridic, nu estetic: un player YouTube încorporat transmite adresa IP,
 * browserul, sistemul de operare și statistici de redare către Google. Cu link,
 * platforma nu transmite nicio dată către terți — vizitatorul decide singur să
 * plece. Nu reintroduce un iframe către youtube.com sau youtube-nocookie.com.
 */
@Component({
  selector: 'app-video-embed',
  standalone: true,
  imports: [],
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss'
})
export class VideoEmbedComponent {
  @Input({required: true}) videoId!: string;

  /** Colțurile rotunjite diferă de la o pagină la alta. */
  @Input() radius = '8px';

  get watchUrl(): string {
    return `https://www.youtube.com/watch?v=${this.videoId}`;
  }
}
