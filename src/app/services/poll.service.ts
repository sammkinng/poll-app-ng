import { Injectable } from '@angular/core';
import { Poll } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollList = [
    {
      content: "Hello",
      name: "poll1",
      closed: false,
      id: 'ddh1',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        id:'1'
      },
      {
        title: 'option 2',
        id:'2'
      },
      {
        title: 'option 3',
        id:'3'
      },
      {
        title: 'option 4',
        id:'4'
      },
      {
        title: 'option 5',
        id:'5'
      },
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",

      content: "Hello",
      closed: false,
      id: 'ddh2',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        id:'1'
      },
      {
        title: 'option 2',
        id:'2'
      },
      {
        title: 'option 3',
        id:'3'
      },
      {
        title: 'option 4',
        id:'4'
      },
      {
        title: 'option 5',
        id:'5'
      },
      ],
      audience: 'England',
      genre: 'Adventure'
    },
    {
      content: "Hello",
      name: "poll3",
      closed: true,
      id: 'ddh3',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        id:'1'
      },
      {
        title: 'option 2',
        id:'2'
      },
      {
        title: 'option 3',
        id:'3'
      },
      {
        title: 'option 4',
        id:'4'
      },
      {
        title: 'option 5',
        id:'5'
      },
      ],
      audience: 'India',
      genre: 'Adventure'
    },
    {
      content: "Hello",
      name: "poll4",
      closed: false,
      id: 'ddh4',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        id:'1'
      },
      {
        title: 'option 2',
        id:'2'
      },
      {
        title: 'option 3',
        id:'3'
      },
      {
        title: 'option 4',
        id:'4'
      },
      {
        title: 'option 5',
        id:'5'
      },
      ],
      audience: 'India',
      genre: 'Action'
    },
    {
      content: "Hello",
      name: "poll5",
      closed: true,
      id: 'ddh5',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: 'option 1',
        id:'1'
      },
      {
        title: 'option 2',
        id:'2'
      },
      {
        title: 'option 3',
        id:'3'
      },
      {
        title: 'option 4',
        id:'4'
      },
      {
        title: 'option 5',
        id:'5'
      },
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

  getPollById(id: string | null) {
    return new Promise<Poll | null>((resolve, reject) => {
      setTimeout(() => resolve(this.pollList.find(i => i.id === id) || null), 500)
    })
  }


}
