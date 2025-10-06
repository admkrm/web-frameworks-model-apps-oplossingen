import { Component } from '@angular/core';
import { BoekKaart } from '../boek-kaart/boek-kaart';
import { Filter } from '../filter/filter';
import { Book } from "../../types";

@Component({
  selector: 'app-boeken-lijst',
  imports: [BoekKaart, Filter],
  templateUrl: './boeken-lijst.html',
  styleUrl: './boeken-lijst.css',
})
export class BoekenLijst {
  boeken : Book[] = [
    { id: 1, titel: 'De Avonden', auteur: 'Gerard Reve', genre: 'Roman' },
    { id: 2, titel: 'Het Diner', auteur: 'Herman Koch', genre: 'Thriller' },
    { id: 3, titel: 'Oorlog en Vrede', auteur: 'Leo Tolstoj', genre: 'Klassieker' },
    { id: 4, titel: 'De kleine prins', auteur: 'Antoine de Saint-Exupéry', genre: 'Kinderboek' },
    {
      id: 5,
      titel: 'Harry Potter en de Steen der Wijzen',
      auteur: 'J.K. Rowling',
      genre: 'Fantasy',
    },
    { id: 6, titel: 'Nooit meer slapen', auteur: 'W.F. Hermans', genre: 'Roman' },
    { id: 7, titel: 'De Hobbit', auteur: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 8, titel: 'Max Havelaar', auteur: 'Multatuli', genre: 'Roman' },
  ];

  zoekterm = '';

  get gefilterdeBoeken() {
    const z = this.zoekterm.trim().toLowerCase();
    if (!z) return this.boeken;
    return this.boeken.filter(
      (b) => b.titel.toLowerCase().includes(z) || b.auteur.toLowerCase().includes(z)
    );
  }
}
