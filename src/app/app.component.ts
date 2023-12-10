import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore.service';

const loader = document.querySelector('.looder') as HTMLElement;

export const showLoader=()=>{
  loader.classList.remove('loader-hide')
}

export const hideLoader=()=>{
  loader.classList.add('loader-hide');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'poll-app-ng';
  ngOnInit(){
    hideLoader()
  }
  constructor(fs:FirestoreService){
    fs.siteUnderMaintenance()
    .then(v=>{
      if(v){
        console.log(v)
        const x=document.querySelector('#maintenance') as HTMLElement;
        x.classList.add('show')
      }
    })
  }
}
