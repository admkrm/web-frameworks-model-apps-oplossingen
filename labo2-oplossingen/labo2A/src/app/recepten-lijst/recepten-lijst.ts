import { Component } from '@angular/core';
import { ReceptKaart } from '../recept-kaart/recept-kaart';
import { Recept } from "../../types";

@Component({
  selector: 'app-recepten-lijst',
  imports: [ReceptKaart],
  templateUrl: './recepten-lijst.html',
  styleUrl: './recepten-lijst.css',
})
export class ReceptenLijst {
  recepten : Recept[] = [
    { id: 1, titel: 'Spaghetti Bolognese', tijd: 30, labels: ['Italiaans', 'Snel'] },
    { id: 2, titel: 'Groene Curry', tijd: 25, labels: ['Thais', 'Pittig'] },
    { id: 3, titel: 'Chili sin carne', tijd: 40, labels: ['Vegetarisch'] },
    { id: 4, titel: 'Lasagne', tijd: 60, labels: ['Italiaans'] },
    { id: 5, titel: 'Caesarsalade', tijd: 15, labels: ['Snel', 'Gezond'] },
  ];
}
