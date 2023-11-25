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
  allBlogs:Blog[]=[]
  count=0
  filters:string[]=[]
  seeAll=false

  // form:FormGroup

  reset(){
    this.filteredBlogs=this.allBlogs
    this.filters=[]
  }

  toggle(name:string){
    if(this.filters.includes(name)){
      this.filters=this.filters.filter(f=>f!==name)
    }
    else{
      this.filters.push(name)
    }
    this.filterBlogs()
  }

  searchString=''
  
  constructor(
    public globalState:StateService,
    private fb:FormBuilder
  ) {
    globalState.allBlogs$.subscribe(d=>{
      this.filteredBlogs=d
      this.allBlogs=d})
    globalState.search$.subscribe(s=>{
      this.searchString=s
    })
  }

  filterBlogs(){
    if(this.filters.length===0){
      this.filteredBlogs=this.allBlogs
    }
    else{
      this.filteredBlogs=this.allBlogs.filter(i=>this.filters.some(f=>i.genre===f))
    }
  }

  matchSearch(blogs:Blog[]){
    if(this.searchString===''){
      return blogs
    }
    return blogs.filter(p=>p.content.includes(this.searchString))
  }
}
