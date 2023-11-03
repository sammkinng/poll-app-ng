import { Injectable } from '@angular/core';
import { Blog } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:any[]=[
    {
      content:"Hello",
      name: "poll1",
      id:'ddh1',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog1',
      genre: 'Action'
    },
    {
      name: "poll2",
      content:"Hello",
      id:'ddh2',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog2',
      genre: 'Adventure'
    },
    {content:"Hello",
      name: "poll3",
      id:'ddh3',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog3',
      genre: 'Adventure'
    },
    {content:"Hello",
      name: "poll4",
      id:'ddh4',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog4',
      genre: 'Action'
    },
    {content:"Hello",
      name: "poll5",
      id:'ddh5',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog5',
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
