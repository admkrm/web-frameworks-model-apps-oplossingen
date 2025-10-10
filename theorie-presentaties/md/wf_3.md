---
marp: true
title: Web Frameworks - 4
description: Web Frameworks Les 4 Data Models, Services en HTTP requests, Lifecycle Hooks in Angular 20
theme: uncover
transition: fade
paginate: true
_paginate: false
---

# Web Frameworks Les 4: Models, Services, Lifecycle Hooks

_Kristof Michiels (team: Sven Mariën, Andie Similon)_

<!-- _backgroundColor: "#123" -->
<!-- _color: "#fff" -->

---
<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Topics

- Data Models
- Services en HTTP requests 
- Lifecycle Hooks

---

<!-- _backgroundColor: "#123" -->
<!-- _color: "#fff" -->

## Data Models

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Wat is een model?

- Een **model** is een **TypeScript-interface of -class** die beschrijft hoe jouw data eruitziet.  
- Het is een **contract** tussen je component, service (zien we straks) en API.  
- Het helpt Angular begrijpen **welke data** je verwacht.

```ts
export interface User {
  id: number;
  naam: string;
  email: string;
}
```

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Waarom models gebruiken?

| Zonder model | Met model |
|---------------|------------|
| Data is `any` of los object | Duidelijke structuur |
| Fouten merk je pas in runtime | Fouten worden bij compilatie opgespoord |
| Weinig IDE-hulp | Autocompletion + type checks |
| Minder leesbaar | Consistente structuur |

---

## Concreet voorbeeld

**Zonder model**
```ts
users: any[] = [{ id: 1, naam: 'Kristof' }];
```

**Met model**
```ts
import { User } from '../models/user.model';

users: User[] = [
  { id: 1, naam: 'Kristof', email: 'kristof.michiels01@ap.be' }
];
```

TypeScript waarschuwt als je `user.name` probeert te gebruiken i.p.v. `user.naam`.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Models maken met Angular CLI

Gebruik de Angular CLI:
```bash
ng generate interface models/user --type=model
```

Dit maakt:
```
src/app/models/user.model.ts
```

Met inhoud:
```ts
export interface User {// Eigenschappen toevoegen}
```

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Models handmatig maken

Je kan uiteraard ook zelf een bestand toevoegen:
```ts
// src/app/models/user.model.ts
export interface User {
  id: number;
  naam: string;
  email: string;
}
```

- Gebruik `interface` voor eenvoudige datatypes,  
- Gebruik `class` als je ook methodes wil toevoegen.

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Interfaces vs. Classes

| Interface | Class |
|------------|--------|
| Alleen structuur | Structuur + logica |
| Geen uitvoerbare code | Kan methodes bevatten |
| Lichter, ideaal voor API-data | Handig voor berekeningen, helpers |

---

## Voorbeeld: Interface

```ts
export interface Product {
  id: number;
  naam: string;
  prijs: number;
  categorie?: string; // optioneel veld
}
```

- Geen logica, enkel beschrijving van de data.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Voorbeeld: Class met logica

- Plaats ook in `src/app/models/` (ng generate class models/product --type=model)

```ts
export class Product {
  constructor(
    public id: number,
    public naam: string,
    public prijs: number
  ) {}

  getPrijsMetBtw(): string {
    const totaal = this.prijs * 1.21;
    return `€${totaal.toFixed(2)}`;
  }
}
```
---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Class gebruiken in component

```ts
import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <p>{{ product.naam }} – {{ product.getPrijsMetBtw() }}</p>
  `
})
export class ProductCardComponent {
  product = new Product(1, 'Yogamat', 29.99);
}
```

Class laat toe om **gedrag (methode)** te combineren met data.

---

<!-- _backgroundColor: "#123" -->
<!-- _color: "#fff" -->

## Services en HTTP requests

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Wat is een service? 

- Een service bevat **logica die gedeeld wordt** door meerdere componenten.  
- Componenten tonen de data (UI),  
  terwijl services de **data en logica beheren**.  
- Dit houdt componenten **clean, herbruikbaar en testbaar**. 

---

## Waarom services?

- **Scheiding** van verantwoordelijkheden  
- **Herbruikbare** logica (één bron van waarheid)  
- Gemakkelijk **data delen** tussen componenten  
- Maakt werken met **externe API’s** mogelijk  
- Onderdeel van Angular’s **Dependency Injection** systeem

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Service aanmaken

Gebruik de CLI:
```bash
ng generate service services/product
```

Dit maakt src/app/services/product.service.ts:
```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}
}
```

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Dependency Injection

- Angular **injecteert automatisch** de services die je nodig hebt
- Je hoeft ze niet zelf aan te maken met new
- Elke service is standaard singleton: **één instantie in de hele app**
- Angular maakt ProductService aan en **voegt het toe via de constructor**:

```ts
export class ProductListComponent {
  constructor(private productService: ProductService) {}
}
```

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Gebruik services in componenten

```ts
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
    <button (click)="toonProducten()">Toon producten</button>
  `
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  toonProducten() {
    this.productService.logProducten();
  }
}
```

---

## Service met eigen logica

```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private producten = ['Yogamat', 'Gewichten', 'T-shirt'];

  logProducten() {
    console.log('Producten:', this.producten);
  }
}
```

- De service beheert nu de data én logica.
- Componenten gebruiken enkel wat ze nodig hebben.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Services voor communicatie tussen componenten

- Soms moeten niet-verwante **componenten data delen**
- Een service is dan de **centrale databron**
- Zo vermijd je een wirwar van @Input() / @Output()
- Een service wordt dan de single source of truth

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Voorbeeld: gedeelde service

```ts
@Injectable({ providedIn: 'root' })
export class CartService {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
```

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Gebruik in meerdere componenten

```ts
@Component({ /* ... */ })
export class ProductListComponent {
  constructor(private cart: CartService) {}
  add(item: string) { this.cart.addItem(item); }
}

@Component({ /* ... */ })
export class CartComponent {
  constructor(private cart: CartService) {}
  get producten() { return this.cart.getItems(); }
}
```

---

## HTTP requests met Angular

- In Angular gebruik je HttpClient om te communiceren met een backend of API.
- We gebruiken hier een publieke API als voorbeeld: https://fakestoreapi.com

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## HttpClient toevoegen aan de app

Open app.config.ts en voeg toe:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
```

Nu is HttpClient beschikbaar voor de hele applicatie.

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## ProductService met HTTP

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
```

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Observables in Angular

- Een Observable is een **datastroom die asynchroon data levert**.
- Denk aan: “je abonneert je op data, en krijgt meldingen bij nieuwe waarden”.
- Perfect voor API-calls, waar **data later binnenkomt**.
- | async (Pipe) zorgt er (in template) voor dat Angular automatisch de Observable uitleest.

---

## Wat is RxJS?

- **RxJS** = Reactive Extensions for JavaScript  
- Angular gebruikt RxJS **onder de motorkap** voor alles wat met data-stromen te maken heeft  
- Belangrijkste concept: **Observable**  
  → een “datastroom” waarop je je kan **abonneren (subscribe)**  
- RxJS biedt tientallen **operators** om data te transformeren, combineren of filteren

Angular’s HttpClient, formulieren en events gebruiken allemaal RxJS.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Veelgebruikte RxJS operators

- **map()** → data omvormen  
- **filter()** → enkel bepaalde waarden doorlaten  
- **tap()** → iets uitvoeren zonder de data te wijzigen (bv. logging)  

**Voorbeeld:**
```ts
this.http.get<Product[]>(this.apiUrl).pipe(
  tap(() => console.log('Data ontvangen')),
  map(products => products.filter(p => p.price < 50))
);
```

Met **pipe()** koppel je operators aan elkaar → leesbare, declaratieve datastroom.

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Observables in componenten

```ts
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
    <ul>
      @for (p of producten$ | async; track p.id) {
        <li>{{ p.title }} – €{{ p.price }}</li>
      }
    </ul>
  `
})
export class ProductListComponent {
  producten$ = this.productService.getProducts();

  constructor(private productService: ProductService) {}
}
```

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Observables gebruiken

**1. Handmatig subscriben**
```ts
this.productService.getProducts().subscribe(data => this.producten = data);
```
- Volledige controle
- Maar: zelf unsubscribe nodig bij component destroy!

**2. Met | async in de template**
```html
<li @for(p of producten$ | async)>{{ p.title }}</li>
```
- Automatisch subscriptiebeheer
- Minder boilerplate

---

## Unsubscriben

- Elke subscribe() blijft actief tot je unsubscribe doet  
- Anders kan het geheugenlekken veroorzaken  
- Gebruik takeUntil(), async, of Subscription.unsubscribe()  

**Voorbeeld:**
```ts
ngOnDestroy() {
  this.sub.unsubscribe();
}
```

Gebruik waar mogelijk | async om dit automatisch te vermijden.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## De levenscyclus van een Observable

Een Observable stuurt 3 soorten signalen:

1. next(value) → er komt een nieuwe waarde binnen  
2. error(err) → er is iets misgegaan  
3. complete() → de stroom stopt (alles ontvangen)

Deze drie callbacks zie je ook in .subscribe({ next, error, complete })

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Wat zijn Promises alweer?

- Manier om **asynchrone operaties** af te handelen.  
  Denk aan iets dat tijd nodig heeft (zoals een API-call).  
- Promise zegt: “Ik **beloof** dat ik later een resultaat geef.”  

```ts
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

- De code gaat verder terwijl data nog wordt opgehaald.
- Zodra het antwoord er is, roept de Promise de .then()-functie op.

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Waarom Observables?

- Een Observable lijkt op een Promise, maar is veel krachtiger en flexibeler.
- Voordelen van Observables:
  - Kunnen meerdere waarden over tijd leveren
  - Kunnen geannuleerd worden (handig bij live data)
  - Sterk geïntegreerd in Angular (vooral met HttpClient)
  - Werken goed samen met RxJS (voor transformaties en operators)
- Angular’s hele HttpClient werkt met Observables, beter geschikt voor datastromen en updates over tijd.

---

## Error handling in Observables

```ts
this.productService.getProducts().subscribe({
  next: data => console.log('Ontvangen:', data),
  error: err => console.error('Fout:', err),
  complete: () => console.log('Klaar!')
});
```

- next = data ontvangen
- error = foutmelding
- complete = stream klaar

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Error handling in Observables

- Vaak wil je de gebruiker tonen wat er gebeurt tijdens het laden van data.
- Dit doe je door eenvoudige flags in je component te combineren met @if in je template.

```html
@if (loading) { 
  <p>Bezig met laden...</p> 
}
@if (error) { 
  <p class="error">{{ error }}</p> 
}
<ul>
  @for (p of producten) { 
    <li>{{ p.title }}</li> 
  }
</ul>
```

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Error handling in Observables

``` ts
loading = true;
error = '';
producten: Product[] = [];
ngOnInit() {
  this.productService.getProducts().subscribe({
    next: data => { 
      this.producten = data; 
      this.loading = false; 
    },
    error: _ => { 
      this.loading = false; 
      this.error = 'Kon data niet laden'; 
    }
  });
}
```

---
<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Asynchrone data in de template

- Gebruik | async om te vermijden dat je zelf moet subscriben:

```html
<ul>
  @for (p of producten$ | async; track p.id) {
    <li>{{ p.title }}</li>
  }
</ul>
```

Angular zorgt zelf voor het subscriptiebeheer.

---

<!-- _backgroundColor: "#123" -->
<!-- _color: "#fff" -->

## Lifecycle Hooks

---

## Wat zijn Lifecycle Hooks?

- **Lifecycle hooks** zijn speciale methodes die Angular aanroept op **bepaalde momenten** in de levenscyclus van een component.
- Ze laten je **meeluisteren en reageren** op gebeurtenissen zoals:
  - aanmaken van de component
  - ontvangen van nieuwe data
  - tonen of verwijderen uit de DOM
- Ze geven **controle** over de levensloop van een component.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Waarom Lifecycle Hooks gebruiken?

- Voor **initialisatie** van data of logica bij het laden van een component  
- Om te **reageren op veranderingen** in @Input() data  
- Om **abonnementen of timers op te ruimen** bij het verwijderen van de component  
- Voor **debugging** of performance monitoring
- Niet elke hook is altijd nodig — gebruik enkel wat relevant is

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Levenscyclus van een component

1. **ngOnChanges()** → wordt aangeroepen bij elke wijziging van @Input-data  
2. **ngOnInit()** → éénmalig bij aanmaken component  
3. **ngDoCheck()** → detecteert manueel wijzigingen  
4. **ngAfterContentInit()** / **ngAfterContentChecked()** → content van slot-tags geladen  
5. **ngAfterViewInit()** / **ngAfterViewChecked()** → child componenten geladen  
6. **ngOnDestroy()** → component wordt verwijderd uit de DOM

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## ngOnInit(): initialisatie

- **Eén keer** uitgevoerd zodra component klaarstaat.  
- Perfect om data op te halen of logica te initialiseren.

**Voorbeeld:**
```ts
import { Component, OnInit } from '@angular/core';
...
export class UserListComponent implements OnInit {
  users: string[] = [];

  ngOnInit() {
    this.users = ['Alice', 'Bob', 'Charlie'];
    console.log('Component klaar!');
  }
}
```

---

## ngOnChanges(): nieuwe data

- Wordt uitgevoerd telkens een oudercomponent een **nieuwe waarde doorgeeft via @Input()**.

**Voorbeeld:**
```ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
...
export class UserDetailComponent implements OnChanges {
  @Input() user!: { id: number; naam: string };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('Nieuwe gebruiker ontvangen:', this.user);
    }
  }
}
```


---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## ngOnDestroy(): opruimen

- Uitgevoerd net voor component uit DOM verdwijnt.  
- Ideaal om observables of event listeners te stoppen.

**Voorbeeld:**
```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
...
export class TimerComponent implements OnInit, OnDestroy {
  private intervalId!: number;
  ngOnInit() {
    this.intervalId = window.setInterval(() => console.log('tick'), 1000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Timer gestopt');
  }}
```

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Combinatie van hooks

```ts
export class DemoComponent implements OnInit, OnDestroy {
  @Input() title = '';
  ngOnInit() {
    console.log('Component geladen met titel:', this.title);
  }
  ngOnDestroy() {
    console.log('Component wordt verwijderd.');
  }
}
```

```html
@if (toonComponent) {<app-demo [title]="'Hallo Wereld'"></app-demo>}
<button (click)="toonComponent = !toonComponent">Toggle</button>
```

Elke klik triggert **ngOnDestroy()** gevolgd door **ngOnInit()** bij herladen.

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Lifecycle hooks in volgorde

1. **ngOnChanges()**
2. **ngOnInit()**
3. **ngDoCheck()**
4. **ngAfterContentInit()**
5. **ngAfterContentChecked()**
6. **ngAfterViewInit()**
7. **ngAfterViewChecked()**
8. **ngOnDestroy()**

---

## Debugtip

Om te zien welke hooks actief zijn, kun je eenvoudig logstatements plaatsen:

```ts
export class DebugComponent implements OnInit, OnDestroy, OnChanges {
  @Input() waarde = '';

  ngOnChanges() { console.log('ngOnChanges'); }
  ngOnInit() { console.log('ngOnInit'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
```

Gebruik de console om het **leven van je component** te volgen.

---

<!-- _backgroundColor: "rgb(255, 251, 234)" -->

## Best practices

- Gebruik enkel de hooks die je nodig hebt  
- **ngOnInit()** → voor setup & data ophalen  
- **ngOnChanges()** → om op updates te reageren  
- **ngOnDestroy()** → voor cleanup (unsubscribe, timers, listeners)  
- Combineer hooks niet onnodig — hou het **duidelijk en licht**

---

<!-- _backgroundColor: "rgb(198, 229, 179)" -->

## Conclusie: hoe stroomt data in Angular (1)

1. Component vraagt data aan de Service
2. Service doet HTTP-aanvraag naar de API
3. API stuurt JSON terug → Service zet het om in Models
4. Models zorgen voor structuur en voorspelbare data
5. Service levert een Observable terug

---

<!-- _backgroundColor: "rgb(255, 224, 230)" -->

## Conclusie: hoe stroomt data in Angular (2)

6. Component ontvangt en toont data via de template (meestal met | async)
7. Tijdens dit proces spelen Lifecycle Hooks (zoals ngOnInit) een rol:
    - ngOnInit() → haalt data op bij het starten van de component
	- ngOnDestroy() → ruimt netjes op (bv. timers, observables)

---

## Kleine vooruitblik: Signals

- Angular 20 introduceert **Signals** als nieuw systeem voor reactiviteit.  
- Signals kunnen Observables aanvullen of vervangen.  
- Ze maken data‑updates eenvoudiger, zonder `subscribe()` of `| async`.
- Later in de cursus bekijken we hoe Signals werken in praktijk.

---


<!-- _backgroundColor: "#143e6c" -->
<!-- _color: "#fff" -->


## Bedankt voor je aandacht! 😀 Vragen? Feedback? kristof.michiels01@ap.be