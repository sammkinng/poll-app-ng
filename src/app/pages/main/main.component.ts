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
  content:string,
  name: string,
  id: string,
  date: Date,
  location: string,
  ques:string,
  genre:string
}

export interface Poll extends Content{
  options:Option[],active: boolean,audience:string,timeLeft:Date,
}

export interface Blog extends Content{
  section:string,active:true,audience:'',timeLeft:null
}


export interface Option{
  title:string,
  subtitle:string
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
  
  constructor(
    public globalState:StateService
  ) {}
}
