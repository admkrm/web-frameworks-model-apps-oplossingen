import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-klant-formulier',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './klant-formulier.html',
  styleUrl: './klant-formulier.css',
})
export class KlantFormulier {
  landen = ['BE', 'NL', 'FR', 'DE'];

  form = new FormGroup({
    naam: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    geboortedatum: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    land: new FormControl<string>('BE', { nonNullable: true, validators: [Validators.required] }),
  });

  reset() {
    this.form.reset({ naam: '', email: '', geboortedatum: '', land: 'BE' });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Voor demo: geen verdere actie vereist
  }
}
