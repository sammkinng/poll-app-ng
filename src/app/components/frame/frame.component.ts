import { Component } from '@angular/core';
import { Category } from 'src/app/pages/main/main.component';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StateService } from 'src/app/services/state.service';
import { months } from '../card/card.component';
import {  Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  userDetails = {
    fName: '',
    lName: ''
  }
  sidebar=false
  months = months
  notificationsBadge = 0
  selected: any = '/'
  modal = false
  notifications: any[] = [

  ]
  loggedIn = localStorage.getItem('uid')

  topCategories: Category[] = [{
    name: 'Action',
    value: 150
  },
  {
    name: 'Drama',
    value: 158
  },
  {
    name: 'Sport',
    value: 50
  }
  ]

  logout(type: number) {
    if (type === 1) {
      this.modal = true
    }
    else if (type === 2) {
      this.modal = false
      this.auth.logout()
    }
    else {
      this.auth.logout()
    }
  }

  search:string=''

  constructor(
    public globalState: StateService,
    public auth: AuthService,
    private notif: NotificationService,
    private router:Router,
    public fs:FirestoreService
  ) {
    notif.getNofifications()
      .then(r => {
        this.notifications = r
      })
  }

  ngOnInit() {
    this.auth.userDetails$.subscribe(v => {
      this.userDetails = v
    })
    
      this.router.events.subscribe((event) => {
          const currentPath = this.router.url;
          if(currentPath==='/'){
            this.selected='/'
          }
          else{
            this.selected=currentPath.split('/')[2]
          }
      });
    
    
  }

  onSearch(){
    this.globalState.updateSearchbar(this.search)
  }

  toggleSideBar(){
    let sidebar=document.getElementById('accordionSidebar')
    let body=document.getElementById('page-top')
    if(this.sidebar){
      sidebar?.classList.add('toggled')
      body?.classList.add('sidebar-toggled')
    }
    else{
      sidebar?.classList.remove('toggled')
      body?.classList.remove('sidebar-toggled')
    }
    this.sidebar=!this.sidebar
  }

}
