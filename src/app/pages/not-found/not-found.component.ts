import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';
import { Category } from '../main/main.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  modal=false
  loggedIn=localStorage.getItem('uid')

  topCategories:Category[]=[{
    name:'Action',
    value:150
  },
  {
    name:'Drama',
    value:158
  },
  {
    name:'Sport',
    value:50
  }
]

logout(type:number){
 if(type===1){
  this.modal=true
 }
 else if(type===2){
  this.modal=false
  this.auth.logout()
 }
 else{
  this.auth.logout()
 }
}
  constructor(
    public auth:AuthService,
    public globalState:StateService,
  ){}
}
