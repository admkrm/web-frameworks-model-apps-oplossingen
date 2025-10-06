# Oplossing 1B – Mini‑takenlijst

Deze toepassing is de referentie‑oplossing voor Labo 1B – Opdracht 2. Ze demonstreert drie kernconcepten uit basisapp2:

- Two‑way binding: `[(ngModel)]` voor het invoerveld van een nieuwe taak
- Event binding: `(click)` voor toevoegen/verwijderen
- Template control flow: `@for` met `track` om de lijst te renderen

## Snel starten

```bash
npm install
npm start
# open http://localhost:4200
```

## Structuur (standalone components)

- `App` (root) – toont layout en bevat `Header`, `TaskList`, `Footer`
- `Header` – eenvoudige titel
- `TaskList` – invoer + “Toevoegen” + lijst van taken
- `Footer` – kleine voetnoot

Interne data in `TaskList`:

```ts
tasks: {
  id: number;
  titel: string;
}
[] = [];
```

## Belangrijke templates

- Two‑way binding:

```html
<input [(ngModel)]="nieuw" placeholder="Nieuwe taak" />
```

- Event binding:

```html
<button (click)="toevoegen()">Toevoegen</button> <button (click)="verwijderen(t.id)">x</button>
```

- `@for` met track:

```html
@for (t of tasks; track t.id) {
<li>{{ t.titel }}</li>
}
```

## Styling

Uiterst minimale CSS (rem‑gebaseerde spacing). Doel is focus op Angular‑concepten.
