import { Component } from '@angular/core';
import { Category } from 'src/app/pages/main/main.component';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StateService } from 'src/app/services/state.service';
import { months } from '../card/card.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  months=months
  notificationsBadge=0
  selected:any=null
  modal=false
  notifications:any[]=[

  ]

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
    public globalState:StateService,
    public auth:AuthService,
    private notif:NotificationService
  ){
    notif.getNofifications()
    .then(r=>{
      this.notifications=r
    })
  }

  formatDate(date:Date){
    return months[date.getMonth()]+" "+date.getDate()+" "+date.getFullYear()
  }

}
