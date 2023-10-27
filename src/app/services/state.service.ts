import { Injectable } from '@angular/core';
import { Poll } from '../components/main/main.component';
import { PollService } from './poll.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  loading = true;
  pollList: Poll[] = []

  selectedFilters: string[]=[]

  activePolls: Poll[] = []
  inactivePolls: Poll[] = []

  constructor(
    private pollService: PollService
  ) {
    pollService.getPolls()
      .then(res => {
        this.pollList = res
        this.countActive()
        this.loading = false
      })
      .catch(() => {
        console.log("error while fetching polls")
        this.loading = false
      })
   }



   private countActive() {
    let l1: Poll[] = []
    let l2: Poll[] = []
    this.pollList.forEach(poll => {
      if (poll.active) {
        l1.push(poll)
      }
      else {
        l2.push(poll)
      }
    })
    this.activePolls = l1;
    this.inactivePolls = l2;
  }

}
