// Hier is gewerkt zonder de template en styles in de component.html en component.css files.

import { Component } from '@angular/core';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-component4',
  imports: [Tag],
  template: `
    <div class="box">
      <h3>Component 4</h3>
      <p>Eenvoudige component (in één bestand!) met hergebruik van:</p>
      <app-tag label="Tag" bgColor="#d1c4e9"></app-tag>
    </div>
  `,
  styles: `
    .box { background: #f3e5f5; padding: 1rem; border-radius: 0.5rem; }
    h3 { margin: 0 0 0.5rem; }
  `,
})
export class Component4 {}
