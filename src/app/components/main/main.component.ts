import { Component } from '@angular/core';
import { AudienceService } from 'src/app/services/audience.service';
import { CategoryService } from 'src/app/services/category.service';
import { PollService } from 'src/app/services/poll.service';
import { StateService } from 'src/app/services/state.service';

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
  id: number,
  date: Date,
  location: string,
  timeLeft:Date,
  ques:string,
  options:Option[]
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
  
  months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  
  constructor(
    public globalState:StateService
  ) {
  
  }



}
