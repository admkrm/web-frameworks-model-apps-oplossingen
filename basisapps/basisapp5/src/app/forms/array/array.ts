import { Component } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './array.html',
  styleUrl: './array.css',
})
export class FormsArray {
  readonly form = new FormGroup({
    phones: new FormArray<FormControl<string>>([
      new FormControl<string>('', { nonNullable: true }),
    ]),
  });

  get phones(): FormArray<FormControl<string>> {
    return this.form.controls.phones as FormArray<FormControl<string>>;
  }

  voegToe() {
    this.phones.push(new FormControl<string>('', { nonNullable: true }));
  }

  verwijder(i: number) {
    this.phones.removeAt(i);
  }
}
