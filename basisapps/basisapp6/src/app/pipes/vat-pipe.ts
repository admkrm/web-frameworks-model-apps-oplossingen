import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'vat', standalone: true })
export class VatPipe implements PipeTransform {
  transform(vat: string): string {
    if (!vat) return '';
    const clean = vat.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    if (clean.startsWith('BE')) {
      const digits = clean.slice(2).padStart(10, '0');
      return `BE${digits.slice(0, 4)}.${digits.slice(4, 7)}.${digits.slice(7)}`;
    }
    return clean;
  }
}
