import { Component } from '@angular/core';
import { OutputDemoChild } from '../child/child';

@Component({
  selector: 'app-output-demo-parent',
  standalone: true,
  imports: [OutputDemoChild],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class OutputDemoParent {
  ontvangBericht(tekst: string) {
    console.log('Ontvangen van kind:', tekst);
  }
}
