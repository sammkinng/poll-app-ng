import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CaptchaService } from 'src/app/services/captcha.service';

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
    terms: [null],
    capcha: ['']
  })

  error = ''
  captchaa: string
  captchTxt: string
  catErr = false

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private captcha: CaptchaService
  ) {
    this.captchTxt = captcha.generateRandomText(4)
    this.captchaa = captcha.image(this.captchTxt)
  }

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
        if (this.form.get('capcha')?.value !== this.captchTxt) {
          this.catErr = true
          setTimeout(() => this.catErr = false, 1500)
        }
        else {
          this.auth.signup(this.form.get('email')?.value, this.form.get('password')?.value)
        }
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

  refreshCaptcha() {
    this.captchTxt = this.captcha.generateRandomText(4)
    this.captchaa = this.captcha.image(this.captchTxt)
  }

  registerWithProvider(key:number){
    this.auth.signwithProvider(key,1)
  }
}
