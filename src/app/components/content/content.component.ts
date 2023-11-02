import { Component, Input } from '@angular/core';
import { Blog, Poll } from 'src/app/pages/main/main.component';
import { days } from 'src/app/pages/poll/poll.component';
import { months } from '../card/card.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  days:string[]=days
  months:string[]=months

  @Input()content:Poll|Blog|null=null

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
