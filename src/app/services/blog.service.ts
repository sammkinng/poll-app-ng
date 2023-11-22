import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      content: "Hello",

      bg: "https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      name: "blog1",
      id: 'ddh1',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section: 'blog1',
      genre: 'Action'
    },
    {
      name: "blog2",

      bg: "https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      content: "Hello",
      id: 'ddh2',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section: 'blog2',
      genre: 'Adventure'
    },
    {
      content: "Hello",

      bg: "https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      name: "blog3",
      id: 'ddh3',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section: 'blog3',
      genre: 'Adventure'
    },
    {
      content: "Hello",

      bg: "https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      name: "blog4",
      id: 'ddh4',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section: 'blog4',
      genre: 'Action'
    },
    {
      content: "Hello",

      bg: "https://firebasestorage.googleapis.com/v0/b/voteapp-dev.appspot.com/o/banners%2Fcover.jpg?alt=media&token=73ed60be-fc8c-4534-9c35-8c151186bc4e",
      name: "blog5",
      id: 'ddh5',
      date: new Date(),
      location: "Delhi",
      ques: 'Will India win this world cup?',
      section: 'blog5',
      genre: 'Animation'
    },

  ]

  async getBlogs() {
    this.blogs= await this.fs.getBlogs()
    return this.blogs
  }

  async getBlogById(id: string | null) {
    let blog= this.blogs.find(i => i.id === id)
    if(blog){
      return blog
    }
    return await this.fs.getBlogById(id||'')
  }

  constructor(
    private fs:FirestoreService
  ) { }
}
