import { Routes } from '@angular/router';
import { FormsLogin } from './forms/login/login';
import { FormsArray } from './forms/array/array';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: FormsLogin, title: 'Login (Reactive Forms)' },
  { path: 'array', component: FormsArray, title: 'FormArray demo' },
  { path: '**', redirectTo: 'login' },
];
