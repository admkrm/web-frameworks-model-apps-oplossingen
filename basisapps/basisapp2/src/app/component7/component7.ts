import { Component } from '@angular/core';

@Component({
  selector: 'app-component7',
  imports: [],
  templateUrl: './component7.html',
  styleUrl: './component7.css',
})
export class Component7 {
  rol: 'admin' | 'user' | 'guest' = 'user';
  setRol(nieuweRol: 'admin' | 'user' | 'guest') {
    this.rol = nieuweRol;
  }
}
