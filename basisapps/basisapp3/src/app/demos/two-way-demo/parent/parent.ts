import { Component } from '@angular/core';
import { TwoWayDemoChild } from '../child/child';

@Component({
  selector: 'app-two-way-demo-parent',
  standalone: true,
  imports: [TwoWayDemoChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class TwoWayDemoParent {
  huidigeBeoordeling = 3;
}
