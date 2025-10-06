import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() term: string = '';
  @Output() termChange = new EventEmitter<string>();

  onInput(value: string) {
    this.term = value;
    this.termChange.emit(this.term);
  }
}
