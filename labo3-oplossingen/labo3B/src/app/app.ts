import { Component, signal } from '@angular/core';
import { Bestelling } from './bestelling/bestelling';

@Component({
  selector: 'app-root',
  imports: [Bestelling],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('labo3B');
}
