import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .red{
      color:red;
      margin:1px;
    }
    `
  ]
})
export class LoginComponent {
  onCaptchaResolved(e: Event) {
    console.log(e)
  }

  login() {
    if (this.form.valid) {
      this.auth.login(
        this.form.get('email')?.value,
        this.form.get('password')?.value)
    }
  }

  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)/),
      // Requires at least one uppercase letter, one lowercase letter, and one digit
    ]]
  })


  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
  ) { }
}
