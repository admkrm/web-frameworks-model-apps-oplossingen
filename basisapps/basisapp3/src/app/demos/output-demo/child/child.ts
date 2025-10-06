import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class OutputDemoChild {
  @Output() boodschap = new EventEmitter<string>();

  stuurBericht() {
    this.boodschap.emit('Hallo vanuit het kind!');
  }
}
