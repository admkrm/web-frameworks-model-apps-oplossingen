import { Component, signal } from '@angular/core';
import { KlantFormulier } from './klant-formulier/klant-formulier';

@Component({
  selector: 'app-root',
  imports: [KlantFormulier],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('labo3A');
}
