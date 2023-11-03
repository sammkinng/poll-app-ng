import { Component, Input } from '@angular/core';
import { Blog, Poll } from 'src/app/pages/main/main.component';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  count=0

  reset(){
    this.count+=1
  }
  @Input()type='poll'

  forVar:Blog[]| Poll[]=this.globalState.filteredPolls
  
  constructor(
    public globalState:StateService
  ) {}

  ngOnInit(){
    if(this.type=='poll'){
      this.forVar=this.globalState.filteredPolls
    }
    else{
      this.forVar=this.globalState.filteredBlogs
    }
  }

}
