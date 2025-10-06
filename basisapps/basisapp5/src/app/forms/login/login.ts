import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

const minVijf: ValidatorFn = (control: AbstractControl<string | null>): ValidationErrors | null => {
  const value = control.value ?? '';
  return value.length >= 5 ? null : { minVijf: true };
};

@Component({
  selector: 'app-forms-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class FormsLogin {
  readonly form = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, minVijf],
    }),
  });

  onSubmit() {
    if (this.form.invalid) return;
    console.log('Formulier verzonden:', this.form.value);
  }

  vulDemo() {
    this.form.patchValue({ email: 'test@example.com' });
  }
}
