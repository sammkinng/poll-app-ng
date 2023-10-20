import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList=[
    {
      name:"poll1",
      active:true,
      id:1,
      date:"25 Oct",
      location:"Delhi"
    },
    {
      name:"poll2",
      active:false,
      id:2,
      date:"17 Oct",
      location:"Delhi"
    },
    {
      name:"poll3",
      active:false,
      id:3,
      date:"21 Oct",
      location:"Delhi"
    },
    {
      name:"poll4",
      active:false,
      id:4,
      date:"25 Oct",
      location:"Delhi"
    },
    {
      name:"poll6",
      active:true,
      id:6,
      date:"26 Oct",
      location:"Delhi"
    },
    {
      name:"poll5",
      active:true,
      id:5,
      date:"25 Oct",
      location:"Delhi"
    },
    {
      name:"poll7",
      active:true,
      id:7,
      date:"2 Oct",
      location:"Delhi"
    },
    {
      name:"poll8",
      active:true,
      id:8,
      date:"29 Oct",
      location:"Delhi"
    },
    {
      name:"poll9",
      active:true,
      id:9,
      date:"5 Oct",
      location:"Delhi"
    }
    
  ]

  constructor() { }

  getPolls(){
    return this.pollList
  }
}
