import { Component, signal } from '@angular/core';
import { InputDemoParent } from './demos/input-demo/parent/parent';
import { OutputDemoParent } from './demos/output-demo/parent/parent';
import { TwoWayDemoParent } from './demos/two-way-demo/parent/parent';
import { PayloadDemoParent } from './demos/payload-demo/parent/parent';
import { OnChangesDemoParent } from './demos/onchanges-demo/parent/parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputDemoParent,
    OutputDemoParent,
    TwoWayDemoParent,
    PayloadDemoParent,
    OnChangesDemoParent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('basisapp3');
}
