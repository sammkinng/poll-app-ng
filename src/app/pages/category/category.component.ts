import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  count=0

  reset(){
    this.count+=1
  }
  constructor(
    public globalState:StateService
  ) {}
}
