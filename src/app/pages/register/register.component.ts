import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
    .red{
      color:red;
      margin:1px;
    }
    .mt{
      margin-top:-10px;
      margin-bottom:3px;
    }
    `
  ]
})
export class RegisterComponent {
  terms = false
  reqdFields = false
  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)/),
      // Requires at least one uppercase letter, one lowercase letter, and one digit
    ]],
    cnfPassword: [null, [Validators.required]],
    terms: [null]
  })

  error = ''


  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form.setValidators(this.passwordMatchValidator());
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('cnfPassword')?.value;

      if (password === confirmPassword) {
        return null; // Passwords match
      } else {
        return { passwordMismatch: true }; // Passwords don't match
      }
    };
  }

  register() {
    if (this.form.valid) {
      if (this.form.get('terms')?.value) {
        let x = {
          email: '',
          password: ''
        }
        x.email = this.form.get('email')?.value
        x.password = this.form.get('password')?.value

        this.auth.signup(x.email, x.password)
      }
      else {
        this.terms = true
        setTimeout(() => this.terms = false, 1500)
      }
    }
    else {
      this.reqdFields = true
      setTimeout(() => this.reqdFields = false, 1500)
    }
  }


}
