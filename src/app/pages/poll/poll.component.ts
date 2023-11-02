import { Component } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import { Poll } from '../main/main.component';
import { ActivatedRoute } from '@angular/router';
import { months } from 'src/app/components/card/card.component';

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent {

  poll:Poll | null =null
  
  constructor(
    private pollService:PollService,
    private route:ActivatedRoute
  ){
    
  }

  ngOnInit() {
    // Access the route snapshot to get the URL parameters
    this.route.paramMap.subscribe(params => {
      // Retrieve parameters using the 'get' method
      this.pollService.getPollById(params.get('id'))
      .then(res=>{
        this.poll=res
      })
      .catch(e=>{
        console.log(e)
      })
    });
  }


}
