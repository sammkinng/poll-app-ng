import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications=[{
    type:0,
    bold:false,
    date:new Date(),
    day:'1d',
    text:'notif',
    writer:'gurdepp',
    icon:'AB'
  },{
    type:1,
    bold:false,
    date:new Date(),
    day:'1d',
    text:'notif',
    writer:'gurdepp',
    icon:'AB'
  },{
    type:1,
    bold:false,
    date:new Date(),
    day:'1d',
    text:'notif',
    writer:'gurdepp',
    icon:'AB'
  },{
    type:0,
    bold:false,
    date:new Date(),
    day:'1d',
    text:'notif',
    writer:'gurdepp',
    icon:'AB'
  },{
    type:0,
    bold:false,
    date:new Date(),
    day:'1d',
    text:'notif',
    writer:'gurdepp',
    icon:'AB'
  }]

  constructor() { }

  getNofifications(){
    return new Promise<any[]>((resolve,reject)=>{
      setTimeout(()=>resolve(this.notifications),100)
    })
  }
}
