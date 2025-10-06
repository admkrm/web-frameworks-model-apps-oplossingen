import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class InputDemoChild {
  @Input() gebruiker!: { id: number; naam: string };
}
