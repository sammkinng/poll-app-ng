import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {
  count=0

  reset(){
    this.count+=1
  }
  
  constructor(
    public globalState:StateService
  ) {}
}
