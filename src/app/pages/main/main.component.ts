import { Component } from '@angular/core';

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
  active: boolean,
  id: string,
  date: Date,
  location: string,
  timeLeft:Date,
  ques:string,
  audience:string,
  genre:string
}

export interface Poll extends Content{
  options:Option[],
}

export interface Blog extends Content{
  section:string
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

}
