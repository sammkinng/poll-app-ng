import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Blog } from '../main/main.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {
  filteredBlogs: Blog[]=[]
  count=0
  filters:string[]=[]
  seeAll=false

  form:FormGroup

  reset(){
    this.count+=1
  }

  toggle(name:string){
    let e=this.form.get(name)?.value
    
    if(e){
      this.filters=this.filters.filter(f=>f!==name)
    }
    else{
      this.filters.push(name)
    }
    this.filterBlogs()
  }
  
  constructor(
    public globalState:StateService,
    private fb:FormBuilder
  ) {
    this.filteredBlogs=globalState.allBlogs
    let x:any={}
    globalState.categories.forEach(cat=>{
      x[cat.name]=[false]
    })
    this.form=fb.group(x)
  }

  filterBlogs(){
    if(this.filters.length===0){
      this.filteredBlogs=this.globalState.allBlogs
    }
    else{
      this.filteredBlogs=this.globalState.allBlogs.filter(i=>this.filters.some(f=>i.genre===f))
    }
  }
}
