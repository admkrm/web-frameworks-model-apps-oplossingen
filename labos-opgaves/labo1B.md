# Labo 1B – Data binding en Control flow

In dit gedeelte van het labo bestudeer je eerst de aangeleverde basisapp2. Daarna bouw je zelf een kleine toepassing waarin je enkele van dezelfde concepten toepast.

## Opdracht 1 – Bestudeer basisapp2

Start de app lokaal op (vergeet `npm install` niet) en bekijk grondig de code in `src/app/`. Focus op de componenten 1 t.e.m. 7 en wat ze illustreren.

- Start:
  - Navigeer naar de map `basisapp2` en start ze met `ng serve`.
  - Open `http://localhost:4200` in de browser.

- Wat wordt geïllustreerd?
  - Component 1: Interpolation (`{{ ... }}`)
  - Component 2: Property binding (`[prop]="..."`)
  - Component 3: Event binding (`(event)="..."`)
  - Component 4: Two-way binding (`[(ngModel)]="..."`)
  - Component 5: `@if` (nieuwe template control flow)
  - Component 6: `@for` (lijstweergave met `track`)
  - Component 7: `@switch` (meerdere cases)

- Checklist (test jezelf):
  1. Kun je in elk component het gebruikte bindingstype/control-flow aanwijzen?
  2. Begrijp je waar data gelezen/gewijzigd wordt (TS ↔ template)?
  3. Zie je hoe `FormsModule` werd toegevoegd voor two-way binding?

## Opdracht 2 – Mini‑takenlijst

Bouw een kleine “Mini‑takenlijst” die exact deze 3 concepten gebruikt:
- Two‑way binding (`[(ngModel)]`) om een nieuwe taaknaam in te geven
- Event binding (`(click)`) om taken toe te voegen/verwijderen
- `@for` om de lijst met taken te renderen (met `track`)

- Minimale vereisten (uiterst eenvoudig en conform de oplossing)
  - Gebruik slechts 3 componenten: `App` (root), `Header` (titel), `TaskList` (alle functionaliteit). Een `Footer` mag, maar is niet vereist.
  - Alle app‑functionaliteit zit in `TaskList`.
  - `TaskList` bevat:
    - een invoerveld met `[(ngModel)]="nieuw"` en een “Toevoegen”-knop
    - een `tasks`‑array met objecten `{ id: number; titel: string }`
    - een `@for (t of tasks; track t.id)` lijst met per item een “verwijder”‑knop
  - Geen `@Input`/`@Output`, geen extra services, geen router (zien we allemaal de komende weken).
  - UI‑tekst: “Mini‑takenlijst”, “Nieuwe taak”, “Toevoegen”.
  - Styling: uiterst minimaal.

- Functionele criteria
  - Nieuwe taak toevoegen via input + knop.
  - Lijst toont alle taken (met `@for` en `track`).
  - Verwijderen van een taak via een knop per item (`(click)`).

- Je zorgt ervoor dat
  - De app buildt en start zonder fouten (`ng serve`).
  - Duidelijke componentbestandsnamen en mapstructuur.
  - Korte `README.md` met:
    - Welke concepten gebruikt zijn (two‑way, event, `@for`)
    - Hoe te starten (commando’s)

- Vrijblijvend
  - Toon een “Geen taken”‑melding met `@if` wanneer de lijst leeg is.
