import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ibanMask', standalone: true })
export class IbanMaskPipe implements PipeTransform {
  transform(iban: string): string {
    return iban
      ? iban
          .replace(/\s+/g, '')
          .replace(/(.{4})/g, '$1 ')
          .trim()
      : '';
  }
}
