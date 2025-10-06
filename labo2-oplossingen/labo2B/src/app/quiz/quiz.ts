import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  vragen = [
    { id: 1, vraag: 'Wat is 2 + 2?', antwoord: '4' },
    { id: 2, vraag: 'Hoofdstad van België?', antwoord: 'Brussel' },
    { id: 3, vraag: 'Welke kleur krijg je door blauw + geel te mengen?', antwoord: 'Groen' },
    { id: 4, vraag: 'Wat is 10 gedeeld door 2?', antwoord: '5' },
  ];

  huidige = 0;
  score = 0;
  invoer = '';
  feedback: 'juist' | 'fout' | '' = '';

  controleerAntwoord() {
    const correct = this.vragen[this.huidige].antwoord.trim().toLowerCase();
    const gegeven = this.invoer.trim().toLowerCase();
    if (gegeven === correct) {
      this.score++;
      this.feedback = 'juist';
    } else {
      this.feedback = 'fout';
    }
  }

  volgendeVraag() {
    const correct = this.vragen[this.huidige]?.antwoord?.trim().toLowerCase() ?? '';
    const gegeven = this.invoer.trim().toLowerCase();
    if (gegeven === correct && this.feedback !== 'juist') {
      this.score++;
    }

    this.huidige++;
    this.invoer = '';
    this.feedback = '';
  }
}
