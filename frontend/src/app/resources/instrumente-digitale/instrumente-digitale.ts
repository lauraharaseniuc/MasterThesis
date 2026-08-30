import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DigitalTool {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
}

@Component({
  selector: 'app-instrumente-digitale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrumente-digitale.html',
  styleUrl: './instrumente-digitale.scss',
})
export class InstrumenteDigitale {
  tools: DigitalTool[] = [
    {
      title: 'Dungeon Crawler — Python Quest',
      description: 'Joc educativ interactiv pentru exersarea conceptelor de programare Python. Elevii parcurg 4 etaje ale unui dungeon — Cripta Variabilelor, Labirintul Buclelor, Citadela Erorii și Sala Scriptorilor — rezolvând provocări despre variabile și tipuri, operatori, condiții, bucle, șiruri de caractere, liste, funcții, dicționare și tupluri.',
      url: 'https://dungeon-crawler-teal.vercel.app/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Clasa a XI-a', 'Python', 'Joc educativ'],
      icon: 'game',
    },
    {
      title: 'Python Tutor',
      description: 'Instrument de vizualizare a execuției codului Python, pas cu pas. Elevii pot vedea exact cum se modifică variabilele, stiva de apeluri și structurile de date la fiecare instrucțiune. Util pentru depanare și înțelegerea algoritmilor.',
      url: 'https://pythontutor.com/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Algoritmi', 'Vizualizare'],
      icon: 'visualize',
    },
    {
      title: 'VisuAlgo',
      description: 'Platformă de vizualizare a algoritmilor și structurilor de date: sortare, căutare binară, liste, stivă, coadă și mulți alții. Fiecare algoritm poate fi rulat pas cu pas, cu explicații pentru fiecare etapă.',
      url: 'https://visualgo.net/ro',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Algoritmi', 'Sortare', 'Structuri de date'],
      icon: 'visualize',
    },
    {
      title: 'CS50 — Harvard',
      description: 'Cel mai popular curs introductiv de informatică din lume, oferit de Universitatea Harvard. Acoperă algoritmi, structuri de date, programare în C și Python. Conținut video, exerciții practice și proiecte reale.',
      url: 'https://cs50.harvard.edu/x/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Algoritmi', 'Python', 'C++'],
      icon: 'course',
    },
    {
      title: 'Aventurierul și Inventarul Magic 🛡️',
      description: 'Joc educativ în Python (tkinter) despre liste și dicționare. Jucătorul explorează o pădure magică, gestionează un inventar de obiecte (liste), folosește o bază de date de obiecte (dicționare) și luptă cu goblini. Descarcă fișierul .py și rulează-l local cu Python 3.',
      url: '/fisere/Aventurierul_si_Inventarul_Magic.py',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Liste', 'Dicționare', 'Joc educativ', 'tkinter'],
      icon: 'game',
    },
    {
      title: 'Ghid de Instalare PyCharm',
      description: 'Ghid pas cu pas pentru instalarea PyCharm Community Edition pe Windows — IDE-ul recomandat pentru Python. Include capturi de ecran, sfaturi pentru elevi și comparație între ediția Community (gratuită) și Professional.',
      url: '/fisere/Ghid-de-Instalare-PyCharm.pdf',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Setup', 'PyCharm'],
      icon: 'code',
    },
    {
      title: 'Blockly Games',
      description: 'Jocuri educative create de Google pentru introducerea programării prin blocuri logice. Elevii rezolvă puzzle-uri de nivel crescând care acoperă concepte precum variabile, bucle, condiții și funcții — fără sintaxă de cod.',
      url: 'https://www.blockly.com/',
      tags: ['Clasa a IX-a', 'Programare vizuală', 'Algoritmi', 'Joc educativ'],
      icon: 'game',
    },
    {
      title: 'AlgoViz',
      description: 'Platformă românească de vizualizare interactivă a algoritmilor și structurilor de date, cu execuție pas cu pas. Utilă pentru înțelegerea vizuală a algoritmilor studiați la clasa a X-a.',
      url: 'https://www.algoviz.ro/',
      tags: ['Clasa a X-a', 'Algoritmi', 'Vizualizare', 'Structuri de date'],
      icon: 'visualize',
    },
    {
      title: 'Joc Kahoot — Informatică, clasa a IX-a',
      description: 'Joc interactiv de tip quiz pe platforma Kahoot, pentru recapitulare și evaluare rapidă la Informatică, clasa a IX-a.',
      url: 'https://create.kahoot.it/share/enter-kahoot-title/77640c1d-ef5c-4203-b6ec-a6187d025925?classId=5c6680f3-55d5-4c63-9acc-3fa7046fc6a4&assignmentId=b8af4aa7-2cfb-42ee-8a1f-23d02ee7b42d&submissionId=117e3bfc-bbac-6f78-8cf1-825d2e36274d',
      tags: ['Clasa a IX-a', 'Kahoot', 'Quiz', 'Joc educativ'],
      icon: 'quiz',
    },
    {
      title: 'Joc Kahoot 2 — Informatică, clasa a IX-a',
      description: 'Un alt joc interactiv de tip quiz pe platforma Kahoot, pentru recapitulare și evaluare rapidă la Informatică, clasa a IX-a.',
      url: 'https://create.kahoot.it/details/ade3d604-b4ff-4dd3-ad49-ebb77566adea?classId=5c6680f3-55d5-4c63-9acc-3fa7046fc6a4&assignmentId=b8af4aa7-2cfb-42ee-8a1f-23d02ee7b42d&submissionId=755df68c-aaab-c5e0-c1b2-231b5780347f',
      tags: ['Clasa a IX-a', 'Kahoot', 'Quiz', 'Joc educativ', 'Principii de elaborare a unui program'],
      icon: 'quiz',
    },
    {
      title: 'Cursa Listelor',
      description: 'Joc educativ cu timer în Python (tkinter) despre clasa list: metode (append(), pop(), insert(), sort(), reverse(), clear(), count()), operatori (+, *, in/not in), funcții predefinite (len(), min(), max(), sum()) și urmărire de cod. 15 întrebări cronometrate, sistem de punctaj cu bonus de viteză și streak, 3 vieți, ranguri finale. Descarcă fișierul .py și rulează-l local cu Python 3. Include și o notă pentru profesor cu detalii despre mecanica jocului și modul de utilizare la clasă.',
      url: '/fisere/Cursa_Listelor.py',
      secondaryUrl: '/fisere/Nota_Profesor_Cursa_Listelor.pdf',
      secondaryLabel: 'Notă pentru profesor',
      tags: ['Clasa a IX-a', 'Liste', 'Python', 'Joc educativ', 'tkinter'],
      icon: 'game',
    },
  ];
}
