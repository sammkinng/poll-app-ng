import { Component } from '@angular/core';
import { Category } from 'src/app/pages/main/main.component';
import { CategoryService } from 'src/app/services/category.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  notifications=3
  selectedCategory:any

  categories:Category[]=[]
  topCategories:Category[]=[{
    name:'Action',
    value:150
  },
  {
    name:'Drama',
    value:158
  },
  {
    name:'Crime',
    value:50
  },
  {
    name:'Sports',
    value:15
  },
]

  constructor(
    private categoryService:CategoryService,
    public globalState:StateService
  ){
    this.selectedCategory=0
    categoryService.getCategories()
    .then(res=>{
        this.categories=res
    })
  }

}
