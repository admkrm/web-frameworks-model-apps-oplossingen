import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchanges-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class OnChangesDemoChild implements OnChanges {
  @Input() gebruiker!: { id: number; naam: string };

  log: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gebruiker']) {
      this.log.push(`Nieuwe gebruiker: ${this.gebruiker?.naam} (id: ${this.gebruiker?.id})`);
    }
  }
}
