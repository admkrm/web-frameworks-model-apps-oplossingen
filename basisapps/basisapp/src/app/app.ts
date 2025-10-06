import { Component, signal } from '@angular/core';
import { Component1 } from './component1/component1';
import { Component3 } from './component3/component3';
import { Component4 } from './component4/component4';

@Component({
  selector: 'app-root',
  imports: [Component1, Component3, Component4],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('basisapp');
}
