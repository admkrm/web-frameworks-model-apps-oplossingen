import { Component, signal } from '@angular/core';
import { ProductenLijst } from './producten-lijst/producten-lijst';

@Component({
  selector: 'app-root',
  imports: [ProductenLijst],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('labo3C');
}
