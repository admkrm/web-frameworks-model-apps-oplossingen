import { Component } from '@angular/core';
import { InputDemoChild } from '../child/child';

@Component({
  selector: 'app-input-demo-parent',
  standalone: true,
  imports: [InputDemoChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class InputDemoParent {
  actieveGebruiker = { id: 1, naam: 'Emily' };
}
