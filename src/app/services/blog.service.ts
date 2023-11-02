import { Injectable } from '@angular/core';
import { Blog } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:Blog[]=[
    {
      content:"Hello",
      name: "poll1",
      active: true,
      id:'ddh1',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      section:'blog1',
      audience: 'India',
      genre: 'Action'
    },
    {
      name: "poll2",
      
      content:"Hello",
      active: true,
      id:'ddh2',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      section:'blog2',
      audience: 'England',
      genre: 'Adventure'
    },
    {content:"Hello",
      name: "poll3",
      active: true,
      id:'ddh3',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      section:'blog3',
      audience: 'India',
      genre: 'Adventure'
    },
    {content:"Hello",
      name: "poll4",
      active: false,
      id:'ddh4',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      section:'blog4',
      audience: 'India',
      genre: 'Action'
    },
    {content:"Hello",
      name: "poll5",
      active: false,
      id:'ddh5',
      date: new Date(),
      location: "Delhi",
      timeLeft: new Date(),
      ques: 'Will India win this world cup?',
      section:'blog5',
      audience: 'India',
      genre: 'Animation'
    },

  ]

  getBlogs(){
    return new Promise<Blog[]>((res,rej)=>{
      setTimeout(()=>res(this.blogs),500)
    })
  }

  getBlogById(id:string|null){
    return new Promise<Blog|null>((res,rej)=>{
      setTimeout(()=>res(this.blogs.find(i=>i.id===id)|| null),500)
    })
  }

  constructor() { }
}
