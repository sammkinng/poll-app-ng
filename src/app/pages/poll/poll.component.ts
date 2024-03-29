import { Component } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import { Poll } from '../main/main.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentData } from 'firebase/firestore';

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent {

  poll:Poll | null | DocumentData =null
  id:string=''
  
  constructor(
    private pollService:PollService,
    private route:ActivatedRoute,
    private router:Router
  ){ }

  ngOnInit() {
    // Access the route snapshot to get the URL parameters
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id') || ''
      // Retrieve parameters using the 'get' method
      this.pollService.getPollById(params.get('id'))
      .then(res=>{
        if(res==null){
          this.router.navigate(['/poll/not-found/404'])
        }
        if(res?.closed){
          this.router.navigate(['/result/'+params.get('id')])
        }
        else{
        this.poll=res}
      })
      .catch(e=>{
        console.log(e)
      })
    });
  }


}
