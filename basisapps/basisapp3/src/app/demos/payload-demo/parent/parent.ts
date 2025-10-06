import { Component } from '@angular/core';
import { PayloadDemoChild } from '../child/child';

@Component({
  selector: 'app-payload-demo-parent',
  standalone: true,
  imports: [PayloadDemoChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class PayloadDemoParent {
  geselecteerd?: { id: number; naam: string };

  toonDetails(product: { id: number; naam: string }) {
    this.geselecteerd = product;
  }
}
