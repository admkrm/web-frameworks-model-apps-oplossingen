import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrls: ['./tag.css'],
})
export class Tag {
  @Input() label = 'Tag';
  @Input() bgColor = '#e0e0e0';
  @Input() textColor = '#222';
}
