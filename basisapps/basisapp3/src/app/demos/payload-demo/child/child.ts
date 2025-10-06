import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payload-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class PayloadDemoChild {
  @Output() selecteer = new EventEmitter<{ id: number; naam: string }>();

  klik() {
    this.selecteer.emit({ id: 5, naam: 'Product X' });
  }
}
