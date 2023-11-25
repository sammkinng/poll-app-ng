import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

export interface Category {
  name: string,
  value: number
}

export interface Audience {
  country: string,
  value: number
}

interface Content{
  bg:string,
  content:string,
  name: string,
  id: string,
  date: Date,
  location: string,
  ques:string,
  genre:string
}

export interface Poll extends Content{
  options:string[],
  closed: boolean,audience:string,timeLeft:Date,
}

export interface Blog extends Content{
  section:string,closed:false,audience:'',timeLeft:null
}


export interface Option{
  title:string,
  id:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {
  count=0

  reset(){
    this.count+=1
  }

  searchString:string=''
  
  constructor(
    public globalState:StateService
  ) {
    globalState.search$.subscribe(s=>{
      this.searchString=s
    })
  }

  matchSearch(polls:Poll[]){
    if(this.searchString===''){
      return polls
    }
    return polls.filter(p=>p.content.includes(this.searchString))
  }
}
