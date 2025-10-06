import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  imports: [],
  templateUrl: './component3.html',
  styleUrl: './component3.css',
})
export class Component3 {
  teller = 0;

  verhoog() {
    this.teller++;
  }
}
