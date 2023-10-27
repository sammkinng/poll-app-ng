import { Component } from '@angular/core';

export interface Category {
  name: string,
  value: number
}

export interface Audience {
  country: string,
  value: number
}

export interface Poll {
  name: string,
  active: boolean,
  id: string,
  date: Date,
  location: string,
  timeLeft:Date,
  ques:string,
  options:Option[],
  audience:string,
  genre:string
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

}
