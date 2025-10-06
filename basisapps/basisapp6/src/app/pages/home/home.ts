import { Component } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';
import { IbanMaskPipe } from '../../pipes/iban-mask-pipe';
import { VatPipe } from '../../pipes/vat-pipe';
import { EuroPipe } from '../../pipes/euro-pipe';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CapitalizePipe, IbanMaskPipe, VatPipe, EuroPipe, DatePipe, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  today = new Date();
  now = new Date();
}
