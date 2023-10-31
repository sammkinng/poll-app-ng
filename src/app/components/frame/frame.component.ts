import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/pages/main/main.component';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  notifications=3
  selected:any
  modal=false

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
    private categoryService:CategoryService,
    public globalState:StateService,
    private route:ActivatedRoute,
    public auth:AuthService
  ){
    categoryService.getCategories()
    .then(res=>{
        this.categories=res
    })
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.selected=params.get('id')
    })
  }

}
