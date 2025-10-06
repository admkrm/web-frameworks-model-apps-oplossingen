import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'euro', standalone: true })
export class EuroPipe implements PipeTransform {
  transform(value: number, min = 2, max = 2): string {
    return new Intl.NumberFormat('nl-BE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    }).format(value ?? 0);
  }
}
