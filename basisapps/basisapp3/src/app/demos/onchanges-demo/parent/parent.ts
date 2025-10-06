import { Component } from '@angular/core';
import { OnChangesDemoChild } from '../child/child';

@Component({
  selector: 'app-onchanges-demo-parent',
  standalone: true,
  imports: [OnChangesDemoChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class OnChangesDemoParent {
  actieveGebruiker = { id: 1, naam: 'Emily' };

  wijzigGebruiker() {
    const id = Math.floor(Math.random() * 1000);
    const namen = ['Emily', 'Alex', 'Sofia', 'Milan', 'Noah'];
    const naam = namen[Math.floor(Math.random() * namen.length)];
    this.actieveGebruiker = { id, naam };
  }
}
