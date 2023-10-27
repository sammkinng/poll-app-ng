import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Poll } from '../main/main.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() poll:Poll={
    name:"poll1",
    active:true,
    id:1,
    date:new Date(),
    location:"Delhi",
    timeLeft:new Date(),
    ques:'Will India win this world cup?',
    options:[{
      title:'',
      subtitle:''
    }]
  };

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
