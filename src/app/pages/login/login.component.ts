import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CaptchaService } from 'src/app/services/captcha.service';

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
  reqdFields = false
  captchaa: string
  captchTxt: string
  catErr = false

  login() {
    if (this.form.valid) {
      if (this.form.get('capcha')?.value !== this.captchTxt) {
        this.catErr = true
        setTimeout(() => this.catErr = false, 1500)
      }
      else {
        this.auth.login(
          this.form.get('email')?.value,
          this.form.get('password')?.value)
      }
    }
    else {
      this.reqdFields = true
      setTimeout(() => this.reqdFields = false, 1500)
    }
  }

  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    capcha: ['']
  })


  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private captcha: CaptchaService
  ) {
    this.captchTxt = captcha.generateRandomText(4)
    this.captchaa = captcha.image(this.captchTxt)

  }

  refreshCaptcha() {
    this.captchTxt = this.captcha.generateRandomText(4)
    this.captchaa = this.captcha.image(this.captchTxt)
  }
}
