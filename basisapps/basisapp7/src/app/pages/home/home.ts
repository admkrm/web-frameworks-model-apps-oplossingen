import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable, catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  loading = false;
  lastEvent = 'init';
  error = '';

  // data als Observable
  producten$!: Observable<Product[]>;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.lastEvent = 'ngOnInit';
    this.loading = true;
    this.producten$ = this.productService.getProducts().pipe(
      tap(() => {
        this.loading = false;
        this.error = '';
      }),
      catchError(() => {
        this.loading = false;
        this.error = 'Kon data niet laden';
        return of([] as Product[]);
      })
    );
  }
}
