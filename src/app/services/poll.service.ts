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
      id: 1,
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: '',
        subtitle: ''
      }],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",
      active: true,
      id: 1,
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: '',
        subtitle: ''
      }],
      audience: 'England',
      genre: 'Adventure'
    },
    {
      name: "poll3",
      active: true,
      id: 1,
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: '',
        subtitle: ''
      }],
      audience: 'India',
      genre: 'Adventure'
    },
    {
      name: "poll4",
      active: false,
      id: 1,
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: '',
        subtitle: ''
      }],
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll5",
      active: false,
      id: 1,
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      options: [{
        title: '',
        subtitle: ''
      }],
      audience: 'India',
      genre: 'Animation'
    },

  ]

  constructor() { }

  getPolls() {
    return new Promise<Poll[]>((resolve, reject) => {
      setTimeout(() => resolve(this.pollList), 1000)
    })
  }
}
