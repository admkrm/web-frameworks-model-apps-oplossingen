import { Component, signal } from '@angular/core';
import { ZoekLijst } from './zoek-lijst/zoek-lijst';

@Component({
  selector: 'app-root',
  imports: [ZoekLijst],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('labo3D');
}
