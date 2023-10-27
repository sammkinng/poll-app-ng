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
  days:string[]=days
  months:string[]=months

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

  getFormattedTime(date:any){
    let h=date.getHours()
    h=h>12?h-12:h
    let sfx=h>12?'PM':'AM'

    let m=date.getMinutes()
    let mm=m<10?'0'+m:m

    return days[date.getDay()].slice(0,3)+" "
    +date.getDate()+" "
    +months[date.getMonth()].slice(0,3)+" at "
    +h+":"+mm+" "+sfx

  }


}
