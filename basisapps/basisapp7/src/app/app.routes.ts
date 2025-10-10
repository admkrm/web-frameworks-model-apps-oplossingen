import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home, title: 'Producten' },
  { path: 'product/:id', component: ProductDetail, title: 'Product detail' },
  { path: '**', redirectTo: '' },
];
