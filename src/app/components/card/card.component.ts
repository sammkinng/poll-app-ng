import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  
  constructor(
    public globalState:StateService
  ) {
  
  }
}
