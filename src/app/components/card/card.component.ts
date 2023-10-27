import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

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
  
  constructor(
    public globalState:StateService
  ) {}
}
