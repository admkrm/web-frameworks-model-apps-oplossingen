# Labo 1A – Componenten, subcomponenten en hergebruik

In dit gedeelte bestudeer je eerst de aangeleverde basisapp. Daarna bouw je zelf een kleine toepassing waarin je dezelfde concepten toepast.

## Opdracht 1 – Bestudeer de basisapp

Start de app lokaal op (vergeet `npm install` niet) en bekijk grondig de code in `src/app/`. Focus op componenten, subcomponenten en het herbruikbare component.

- Start:
  - Navigeer naar de map van de app en start ze met `ng serve` (of `npm start`).
  - Open `http://localhost:4200` in de browser.

- Wat wordt geïllustreerd?
  - `Component1` (parent) bevat `Component2` (child)
  - `Component3` gebruikt meerdere instanties van het herbruikbare component
  - `Component4` toont inline template/style als illustratie
  - `Tag` is een klein, herbruikbaar component met `@Input()`

- Checklist (test jezelf):
  1. Kun je aanwijzen waar de parent → child relatie staat in de templates?
  2. Begrijp je wat `@Input` is en hoe het in `Tag` wordt gebruikt?
  3. Zie je hoe standalone components via `imports` in `@Component` worden toegevoegd?

## Opdracht 2 – Kleine eigen eerste toepassing bouwen

Bouw een eenvoudige demo‑app die dezelfde basisconcepten aantoont als in de basisapp.

- Minimale vereisten (uiterst eenvoudig)
  - Gebruik 3–4 componenten: `App` (root), een simpele `Header`, een `Component1` (parent) met `Component2` (child). Een `Footer` mag, maar hoeft niet.
  - `Component1` toont `Component2` als subcomponent in de template.
  - Voorzie een klein herbruikbaar component (geen logica) en gebruik het op minstens twee plaatsen met verschillende `@Input`‑waarden (bv. `Badge` met ander label/kleur).
  - UI‑tekst: korte captions (bv. “Component 1”, “Component 2”, “Badge”).
  - Styling: uiterst minimaal.

- Functionele criteria
  - Minstens één parent → child relatie zichtbaar.
  - Herbruikbaar component wordt op twee plaatsen getoond met verschillende `@Input`.
  - Toon een korte lijst door 3–5 items te renderen met `@for` (track op een eenvoudige `id`).

- Je zorgt ervoor dat
  - De app start zonder fouten (`ng serve`).
  - De componentbestandsnamen en mapstructuur duidelijk zijn.
  - Je een korte `README.md` schrijft met:
    - Welke concepten je toont (parent→child, `@Input`, optioneel `@for`)