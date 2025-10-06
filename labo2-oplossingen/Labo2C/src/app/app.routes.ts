import { Routes } from '@angular/router';
import { Start } from './start/start';
import { GebruikerDetail } from './gebruiker-detail/gebruiker-detail';
import { NietGevonden } from './niet-gevonden/niet-gevonden';

export const routes: Routes = [
  { path: '', component: Start },
  { path: 'gebruiker/:id', component: GebruikerDetail },
  { path: '**', component: NietGevonden },
];
