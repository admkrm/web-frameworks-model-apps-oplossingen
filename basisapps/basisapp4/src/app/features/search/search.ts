import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  term = '';
  page?: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((q) => {
      this.term = q['term'] ?? '';
      this.page = q['page'] ? Number(q['page']) : undefined;
    });
  }

  zoek(nieuweTerm: string) {
    this.router.navigate(['/search'], { queryParams: { term: nieuweTerm, page: 1 } });
  }
}
