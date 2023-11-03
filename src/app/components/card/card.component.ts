import { Component, Input } from '@angular/core';
import { Blog, Poll } from 'src/app/pages/main/main.component';

export const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  months:string[]=months
  path='poll'

  @Input() content:Poll|Blog|null=null
  @Input() type='/poll'

}
