import { Component, signal } from '@angular/core';
import { BoekenLijst } from './boeken-lijst/boeken-lijst';

@Component({
  selector: 'app-root',
  imports: [BoekenLijst],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Labo2D');
}
