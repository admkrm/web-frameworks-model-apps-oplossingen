import { Component } from '@angular/core';

@Component({
  selector: 'app-component6',
  imports: [],
  templateUrl: './component6.html',
  styleUrl: './component6.css',
})
export class Component6 {
  items = [
    { id: 1, naam: 'Laptop' },
    { id: 2, naam: 'Smartphone' },
    { id: 3, naam: 'Tablet' },
  ];
}
