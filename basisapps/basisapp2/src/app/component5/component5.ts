import { Component } from '@angular/core';

@Component({
  selector: 'app-component5',
  imports: [],
  templateUrl: './component5.html',
  styleUrl: './component5.css',
})
export class Component5 {
  isIngelogd = false;

  toggle() {
    this.isIngelogd = !this.isIngelogd;
  }
}
