import { Component } from '@angular/core';

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
}
