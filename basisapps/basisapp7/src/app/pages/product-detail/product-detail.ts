import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable, catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  loading = false;
  error = '';
  product$!: Observable<Product | null>;

  constructor(private readonly route: ActivatedRoute, private readonly service: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => this.service.getProduct(Number(params.get('id')))),
      tap(() => {
        this.loading = false;
        this.error = '';
      }),
      catchError(() => {
        this.loading = false;
        this.error = 'Kon data niet laden';
        return of(null as Product | null);
      })
    );
  }
}
