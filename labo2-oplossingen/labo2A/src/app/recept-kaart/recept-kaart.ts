import { Component, Input } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'app-recept-kaart',
  imports: [Label],
  templateUrl: './recept-kaart.html',
  styleUrl: './recept-kaart.css',
})
export class ReceptKaart {
  @Input() titel: string = '';
  @Input() tijd: number = 0;
  @Input() labels: string[] = [];
}
