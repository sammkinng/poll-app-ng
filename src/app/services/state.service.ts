import { Injectable } from '@angular/core';
import { Poll } from '../pages/main/main.component';
import { PollService } from './poll.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  loading = true;
  selectedCategories=0
  pollSelector: Poll[][] = [
    [], [], []
  ]
  active: number = 0
  filteredPolls: Poll[] = []

  constructor(
    private pollService: PollService
  ) {
    pollService.getAllPolls()
      .then(res => {
        this.pollSelector[0] = res
        this.filteredPolls = res
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
    this.pollSelector[0].forEach(poll => {
      if (poll.active) {
        l1.push(poll)
      }
      else {
        l2.push(poll)
      }
    })
    this.pollSelector[1] = l1;
    this.pollSelector[2] = l2;
  }

  filterItems(l1: string[], l2: string[]) {
    // Implement filtering logic based on selected filters

    if (l1.length === 0 && l2.length === 0) {
      // Both l1 and l2 are empty, return the whole list unfiltered
      this.filteredPolls = this.pollSelector[this.active];
    } else if (l1.length === 0) {
      // Only l1 is empty, filter based on l2
      this.filteredPolls = this.pollSelector[this.active].filter(item => l2.some(filter => item.genre === filter));
    } else if (l2.length === 0) {
      // Only l2 is empty, filter based on l1
      this.filteredPolls = this.pollSelector[this.active].filter(item => l1.some(filter => item.audience === filter));
    } else {
      // Both l1 and l2 have values, filter based on both
      this.filteredPolls = this.pollSelector[this.active]
        .filter(item => l1.some(filter => item.audience === filter))
        .filter(i => l2.some(filter => i.genre === filter));
    }

  }
}
