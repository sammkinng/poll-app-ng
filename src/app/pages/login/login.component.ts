import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  onCaptchaResolved(e:Event){
    console.log(e)
  }
}
