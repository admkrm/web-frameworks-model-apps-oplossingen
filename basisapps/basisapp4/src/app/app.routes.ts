import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { UserDetail } from './features/user-detail/user-detail';
import { Admin } from './admin/admin';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Search } from './features/search/search';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Start' },
  { path: 'about', component: About, title: 'Over deze app' },
  { path: 'user/:id', component: UserDetail, title: 'Gebruiker' },
  { path: 'admin', component: Admin, canActivate: [AuthGuard], title: 'Beheer' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
  { path: 'login', component: Login, title: 'Aanmelden' },
  { path: 'search', component: Search, title: 'Zoeken' },
  {
    path: 'products',
    title: 'Producten',
    loadComponent: () => import('./products/products').then((m) => m.Products),
  },
  { path: '**', redirectTo: '' },
];
