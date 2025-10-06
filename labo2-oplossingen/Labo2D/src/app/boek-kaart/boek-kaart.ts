import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boek-kaart',
  imports: [],
  templateUrl: './boek-kaart.html',
  styleUrl: './boek-kaart.css',
})
export class BoekKaart {
  @Input() titel: string = '';
  @Input() auteur: string = '';
  @Input() genre: string = '';
}
