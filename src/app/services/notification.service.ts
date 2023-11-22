import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications=[{
    text:'notif',
    img:''
  },{
    text:'notif',
    img:''
  },{
    text:'notif',
    img:''
  },{
    text:'notif',
    img:''
  },{
    text:'notif',
    img:''
  }]

  constructor(
    private fs:FirestoreService
  ) { }

  async getNofifications(){
    return await this.fs.getNotifications()
  }
}
