import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter-pipe';

@Component({
  selector: 'app-zoek-lijst',
  imports: [FormsModule, FilterPipe],
  templateUrl: './zoek-lijst.html',
  styleUrl: './zoek-lijst.css',
})
export class ZoekLijst {
  items = [
    { id: 1, titel: 'Angular voor Starters' },
    { id: 2, titel: 'Professioneel TypeScript' },
    { id: 3, titel: 'Websecurity Basis' },
    { id: 4, titel: 'Frontend Patterns' },
    { id: 5, titel: 'Reactive Forms in de Praktijk' },
  ];
  zoekterm = '';
}
