import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

/**
 * Afișează un substitut static în locul videoclipului; iframe-ul YouTube este
 * creat abia la clic pe „Redă videoclipul".
 *
 * Motivul e juridic, nu estetic: un iframe încărcat odată cu pagina trimite
 * adresa IP a vizitatorului către Google înainte de orice interacțiune și fără
 * consimțământ. Nu readuce `src` direct pe iframe.
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

  /** Înălțimea originală a iframe-ului înlocuit. */
  @Input() height = 450;

  safeUrl: SafeResourceUrl | null = null;

  constructor(private readonly sanitizer: DomSanitizer) {
  }

  play(): void {
    // autoplay=1 pentru ca utilizatorul să nu fie nevoit să apese play de două ori.
    // rel=0 limitează recomandările de la final la același canal — contează când
    // materialul e proiectat în clasă.
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.videoId}?autoplay=1&rel=0`
    );
  }
}
