import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class TwoWayDemoChild {
  @Input() beoordeling = 0;
  @Output() beoordelingChange = new EventEmitter<number>();

  stelBeoordelingIn(nieuweWaarde: number) {
    this.beoordeling = nieuweWaarde;
    this.beoordelingChange.emit(this.beoordeling);
  }
}
