import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../main/main.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blog:Blog | null =null
  
  constructor(
    private blogService:BlogService,
    private route:ActivatedRoute
  ){
    
  }

  ngOnInit() {
    // Access the route snapshot to get the URL parameters
    this.route.paramMap.subscribe(params => {
      // Retrieve parameters using the 'get' method
      this.blogService.getBlogById(params.get('id'))
      .then(res=>{
        this.blog=res
      })
      .catch(e=>{
        console.log(e)
      })
    });
  }
}
