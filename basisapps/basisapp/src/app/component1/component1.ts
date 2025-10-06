import { Component } from '@angular/core';
import { Tag } from '../tag/tag';
import { Component2 } from '../component2/component2';

@Component({
  selector: 'app-component1',
  imports: [Tag, Component2],
  templateUrl: './component1.html',
  styleUrls: ['./component1.css'],
})
export class Component1 {}
