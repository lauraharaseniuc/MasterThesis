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
  selector: 'app-instrumente-digitale-tic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrumente-digitale-tic.html',
  styleUrl: './instrumente-digitale-tic.scss',
})
export class InstrumenteDigitaleTic {
  tools: DigitalTool[] = [
    {
      title: 'Canva',
      description: 'Platformă de design digital pentru realizarea de prezentări, afișe, documente și infografice. Interfață intuitivă, sute de șabloane gata de utilizat. Ideal pentru activitățile de birotică și comunicare vizuală.',
      url: 'https://www.canva.com/',
      tags: ['Prezentări digitale', 'Documente digitale', 'Birotică', 'Clasa a IX-a', 'Clasa a X-a'],
      icon: 'design',
    },
    {
      title: 'Google Workspace for Education',
      description: 'Suită completă de aplicații (Docs, Sheets, Slides, Forms, Drive) disponibilă pentru elevi și profesori. Acoperă integral conținuturile de birotică: documente digitale, calcul tabelar, prezentări și formulare online.',
      url: 'https://workspace.google.com/products/gmail/go-google/',
      tags: ['Birotică', 'Calcul tabelar', 'Colaborare digitală', 'Clasa a IX-a', 'Clasa a X-a'],
      icon: 'workspace',
    },
    {
      title: 'W3Schools',
      description: 'Platformă de învățare a tehnologiilor web: HTML, CSS și JavaScript. Fiecare lecție conține teorie, exemple interactive și un editor online în care elevii pot testa codul direct în browser.',
      url: 'https://www.w3schools.com/',
      tags: ['Pagini web', 'HTML', 'CSS', 'JavaScript', 'Clasa a X-a'],
      icon: 'web',
    },
    {
      title: 'Pixlr',
      description: 'Editor de imagini online, similar cu Photoshop, care rulează direct în browser. Permite decupare, redimensionare, ajustare culori, straturi și filtre — acoperind toate operațiile specifice prelucrării imaginilor digitale din programă.',
      url: 'https://pixlr.com/',
      tags: ['Imagini digitale', 'Foto-editare', 'Clasa a X-a'],
      icon: 'image',
    },
    {
      title: 'Tinkercad',
      description: 'Aplicație Autodesk pentru modelare 3D în browser. Elevii pot crea obiecte 3D simplu, prin operații de adăugare și scădere de forme geometrice. Relevant pentru tema imaginilor digitale și a modelelor 3D.',
      url: 'https://www.tinkercad.com/',
      tags: ['Imagini digitale', 'Modele 3D', 'Clasa a X-a'],
      icon: 'cube',
    },
    {
      title: 'Cybersecurity Awareness — Google Interland',
      description: 'Joc educativ interactiv creat de Google pentru formarea deprinderilor de securitate cibernetică. Elevii parcurg misiuni despre parole sigure, recunoașterea phishing-ului și protecția datelor personale.',
      url: 'https://beinternetawesome.withgoogle.com/ro_ro/interland',
      tags: ['Securitate cibernetică', 'Joc educativ', 'Clasa a IX-a', 'Clasa a X-a'],
      icon: 'security',
    },
    {
      title: 'TIC Liceu — Platformă de recapitulare, clasa a IX-a',
      description: 'Platformă educațională interactivă care acoperă principalele conținuturi TIC pentru clasa a IX-a: componente hardware, sisteme de operare și software, comunicare digitală și inteligență artificială, documente și prezentări digitale. Include lecții structurate, activități practice și un quiz recapitulativ cu 20 de întrebări.',
      url: 'https://tic-liceu-clasa9.vercel.app/',
      tags: ['Clasa a IX-a', 'Hardware', 'Software', 'Comunicare digitală', 'Quiz'],
      icon: 'course',
    },
    {
      title: 'PC Builder Challenge — Joc despre componentele hardware',
      description: 'Joc educativ interactiv despre componentele hardware ale unui calculator: identificare, asamblare și sortare a pieselor, structurat în 5 niveluri progresive. Trei moduri de joc (Classic, Speed Run, Hardcore), cu sistem de punctaj, vieți și clasament.',
      url: 'https://pc-game-pi.vercel.app/',
      tags: ['Clasa a IX-a', 'Hardware', 'Software', 'Joc educativ'],
      icon: 'game',
    },
  ];
}
