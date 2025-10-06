import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bestelling',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './bestelling.html',
  styleUrl: './bestelling.css',
})
export class Bestelling {
  regelGroup() {
    return new FormGroup({
      product: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      aantal: new FormControl<number>(1, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)],
      }),
      prijs: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0)],
      }),
    });
  }

  form = new FormGroup({
    klant: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    regels: new FormArray<FormGroup<any>>([this.regelGroup()]),
    opmerkingen: new FormControl<string>('', { nonNullable: true }),
  });

  get regels() {
    return this.form.controls.regels as FormArray<FormGroup>;
  }

  get totaal(): number {
    return this.regels.controls.reduce(
      (sum, g) => sum + (g.value.aantal ?? 0) * (g.value.prijs ?? 0),
      0
    );
  }

  addRij() {
    this.regels.push(this.regelGroup());
  }
  removeRij(index: number) {
    this.regels.removeAt(index);
  }

  submit() {
    if (this.form.invalid || this.totaal === 0) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
