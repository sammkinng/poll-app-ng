import { Injectable } from '@angular/core';
import { Poll } from '../components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList=[
    {
      name:"poll1",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll2",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll3",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll4",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll5",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll6",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    },
    {
      name:"poll7",
      active:true,
      id:1,
      date:new Date(),
      location:"Delhi",
      timeLeft:new Date(),
      ques:'Will India win this world cup?',
      options:[{
        title:'',
        subtitle:''
      }]
    }
    
  ]

  constructor() { }

  getPolls(){
    return new Promise<Poll[]>((resolve,reject)=>{
      setTimeout(()=>resolve(this.pollList),1000)
    })
  }
}
