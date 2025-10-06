import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T extends { [k: string]: any }>(
    lijst: T[],
    term: string,
    veld: keyof T = 'titel' as any
  ): T[] {
    if (!lijst || !term) return lijst ?? [];
    const lower = term.toLowerCase();
    return lijst.filter((item) =>
      String(item[veld] ?? '')
        .toLowerCase()
        .includes(lower)
    );
  }
}
