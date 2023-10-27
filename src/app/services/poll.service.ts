import { Injectable } from '@angular/core';
import { Poll } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList = [
    {
      name: "poll1",
      active: true,
      id:'ddh1',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        subtitle: 'desc 1'
      },
      {
        title: 'option 2',
        subtitle: 'desc 2'
      },
      {
        title: 'option 3',
        subtitle: 'desc 3'
      },
      {
        title: 'option 4',
        subtitle: 'desc 4'
      },
      {
        title: 'option 5',
        subtitle: 'desc 5'
      }
    ],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",
      active: true,
      id:'ddh2',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        subtitle: 'desc 1'
      },
      {
        title: 'option 2',
        subtitle: 'desc 2'
      },
      {
        title: 'option 3',
        subtitle: 'desc 3'
      },
      {
        title: 'option 4',
        subtitle: 'desc 4'
      },
      {
        title: 'option 5',
        subtitle: 'desc 5'
      }
    ],
      audience: 'England',
      genre: 'Adventure'
    },
    {
      name: "poll3",
      active: true,
      id:'ddh3',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        subtitle: 'desc 1'
      },
      {
        title: 'option 2',
        subtitle: 'desc 2'
      },
      {
        title: 'option 3',
        subtitle: 'desc 3'
      },
      {
        title: 'option 4',
        subtitle: 'desc 4'
      },
      {
        title: 'option 5',
        subtitle: 'desc 5'
      }
    ],
      audience: 'India',
      genre: 'Adventure'
    },
    {
      name: "poll4",
      active: false,
      id:'ddh4',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        subtitle: 'desc 1'
      },
      {
        title: 'option 2',
        subtitle: 'desc 2'
      },
      {
        title: 'option 3',
        subtitle: 'desc 3'
      },
      {
        title: 'option 4',
        subtitle: 'desc 4'
      },
      {
        title: 'option 5',
        subtitle: 'desc 5'
      }
    ],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll5",
      active: false,
      id:'ddh5',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        subtitle: 'desc 1'
      },
      {
        title: 'option 2',
        subtitle: 'desc 2'
      },
      {
        title: 'option 3',
        subtitle: 'desc 3'
      },
      {
        title: 'option 4',
        subtitle: 'desc 4'
      },
      {
        title: 'option 5',
        subtitle: 'desc 5'
      }
    ],
      audience: 'India',
      genre: 'Animation'
    },

  ]

  constructor() { }

  getAllPolls() {
    return new Promise<Poll[]>((resolve, reject) => {
      setTimeout(() => resolve(this.pollList), 1000)
    })
  }

  getPollById(id:string | null){
    return new Promise<Poll | null>((resolve,reject)=>{
      setTimeout(()=>resolve(this.pollList.find(i=>i.id===id) || null),500)
    })
  }


}
