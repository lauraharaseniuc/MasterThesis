import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DigitalTool {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
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
      description: 'Instrument gratuit de vizualizare a execuției codului Python, pas cu pas. Elevii pot vedea exact cum se modifică variabilele, stiva de apeluri și structurile de date la fiecare instrucțiune. Util pentru depanare și înțelegerea algoritmilor.',
      url: 'https://pythontutor.com/',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Algoritmi', 'Vizualizare'],
      icon: 'visualize',
    },
    {
      title: 'VisuAlgo',
      description: 'Platformă gratuită de vizualizare a algoritmilor și structurilor de date: sortare, căutare binară, liste, stivă, coadă și mulți alții. Fiecare algoritm poate fi rulat pas cu pas, cu explicații pentru fiecare etapă.',
      url: 'https://visualgo.net/ro',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Algoritmi', 'Sortare', 'Structuri de date'],
      icon: 'visualize',
    },
    {
      title: 'CS50 — Harvard (gratuit)',
      description: 'Cel mai popular curs introductiv de informatică din lume, oferit gratuit de Universitatea Harvard. Acoperă algoritmi, structuri de date, programare în C și Python. Conținut video, exerciții practice și proiecte reale.',
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
      description: 'Ghid pas cu pas pentru instalarea PyCharm Community Edition pe Windows — IDE-ul gratuit recomandat pentru Python. Include capturi de ecran, sfaturi pentru elevi și comparație între ediția Community (gratuită) și Professional.',
      url: '/fisere/Ghid-de-Instalare-PyCharm.pdf',
      tags: ['Clasa a IX-a', 'Clasa a X-a', 'Python', 'Setup', 'PyCharm'],
      icon: 'code',
    },
    {
      title: 'Blockly Games',
      description: 'Jocuri educative gratuite create de Google pentru introducerea programării prin blocuri logice. Elevii rezolvă puzzle-uri de nivel crescând care acoperă concepte precum variabile, bucle, condiții și funcții — fără sintaxă de cod.',
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
      title: 'Liste în Python — Site interactiv',
      description: 'Site educativ interactiv despre liste în Python: teorie explicată pas cu pas și exerciții interactive pentru fixarea noțiunilor, potrivit pentru recapitulare individuală sau la clasă.',
      url: 'https://home-scrub-61191829.figma.site/',
      tags: ['Clasa a IX-a', 'Liste', 'Python', 'Teorie', 'Exerciții interactive'],
      icon: 'course',
    },
    {
      title: 'Recapitulare Liste în Python — Pagină interactivă',
      description: 'Pagină web interactivă cu teorie explicată pas cu pas și exerciții aplicate despre liste în Python — utilă pentru recapitulare individuală sau ca material de lucru la clasă.',
      url: '/fisere/site_educativ_liste.html',
      tags: ['Clasa a IX-a', 'Liste', 'Python', 'Teorie', 'Exerciții interactive'],
      icon: 'course',
    },
    {
      title: 'Joc quiz — Subprograme în Python',
      description: 'Joc interactiv de tip quiz pentru recapitularea noțiunilor despre subprograme (funcții) în Python: definire, parametri, valoare returnată, variabile locale și globale.',
      url: '/fisere/Joc-quiz-Subprograme.html',
      tags: ['Clasa a IX-a', 'Subprograme', 'Python', 'Quiz', 'Joc educativ'],
      icon: 'quiz',
    },
    {
      title: 'Joc Kahoot — Informatică, clasa a IX-a',
      description: 'Joc interactiv de tip quiz pe platforma Kahoot, pentru recapitulare și evaluare rapidă la Informatică, clasa a IX-a.',
      url: 'https://create.kahoot.it/share/enter-kahoot-title/77640c1d-ef5c-4203-b6ec-a6187d025925?classId=5c6680f3-55d5-4c63-9acc-3fa7046fc6a4&assignmentId=b8af4aa7-2cfb-42ee-8a1f-23d02ee7b42d&submissionId=117e3bfc-bbac-6f78-8cf1-825d2e36274d',
      tags: ['Clasa a IX-a', 'Kahoot', 'Quiz', 'Joc educativ'],
      icon: 'quiz',
    },
    {
      title: 'Subprograme în Python — Platformă interactivă de învățare',
      description: 'Platformă interactivă dedicată subprogramelor (funcțiilor) în Python: definire, parametri, valoare returnată, variabile locale și globale. Include lecții teoretice, probleme rezolvate, o secțiune despre greșeli frecvente (SyntaxError, TypeError, NameError, UnboundLocalError), un ghid rapid de sintaxă și un quiz cu 20 de întrebări.',
      url: 'https://subprograme-python-g39g9psy5-mirunas-projects-d263c8d3.vercel.app/',
      tags: ['Clasa a IX-a', 'Subprograme', 'Python', 'Quiz'],
      icon: 'course',
    },
    {
      title: 'Metode de sortare — Pagină interactivă cu vizualizator',
      description: 'Pagină interactivă despre metodele de sortare a unei liste (selecția minimului, metoda bulelor, sortare cu listă de frecvențe): teorie, cod Python, un vizualizator animat al fiecărui algoritm pas cu pas, secțiune despre complexitate și exerciții de fixare.',
      url: '/fisere/sortari.html',
      tags: ['Clasa a IX-a', 'Sortare', 'Python', 'Vizualizare', 'Exerciții interactive'],
      icon: 'course',
    },
    {
      title: 'Stive și Cozi (LIFO / FIFO) — Pagină interactivă cu laborator',
      description: 'Pagină interactivă despre stive și cozi: teorie, cod Python și un laborator vizual în care elevii pot adăuga și elimina elemente pentru a observa direct comportamentul LIFO (stivă) și FIFO (coadă), plus recomandări de utilizare și exerciții.',
      url: '/fisere/stive_cozi.html',
      tags: ['Clasa a IX-a', 'Stivă', 'Coadă', 'Python', 'Exerciții interactive'],
      icon: 'course',
    },
  ];
}
