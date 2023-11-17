import { Injectable } from '@angular/core';
import { Blog } from '../pages/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:any[]=[
    {
      content:"Hello",
      bg1:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      bg2:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    name: "blog1",
      id:'ddh1',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog1',
      genre: 'Action'
    },
    {
      name: "blog2",
      bg1:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      bg2:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    content:"Hello",
      id:'ddh2',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog2',
      genre: 'Adventure'
    },
    {content:"Hello",
    bg1:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    bg2:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  name: "blog3",
      id:'ddh3',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog3',
      genre: 'Adventure'
    },
    {content:"Hello",
    bg1:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    bg2:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  name: "blog4",
      id:'ddh4',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section:'blog4',
      genre: 'Action'
    },
    {content:"Hello",
    bg1:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
    bg2:"https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
  name: "blog5",
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
