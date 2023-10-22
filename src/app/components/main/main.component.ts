import { Component } from '@angular/core';
import { AudienceService } from 'src/app/services/audience.service';
import { CategoryService } from 'src/app/services/category.service';
import { PollService } from 'src/app/services/poll.service';

export interface Category {
  name: string,
  value: number
}

export interface Audience {
  country: string,
  value: number
}

export interface Poll {
  name: string,
  active: boolean,
  id: number,
  date: string,
  location: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {
  loading = true;
  mobileFilters = false;
  categories: Category[] = [];
  audience: Audience[] = [];
  filteredAudience: Audience[] = [];
  ip = ""
  pollList: Poll[] = []

  activePolls: Poll[] = []
  inactivePolls: Poll[] = []


  constructor(
    private categoryService: CategoryService,
    private pollService: PollService,
    private audienceService: AudienceService
  ) {
    categoryService.getCategories()
      .then(res => {
        this.categories = res
      })
      .catch(() => {

      })
    audienceService.getAudience()
      .then(res => {
        this.audience = res
        this.filteredAudience = this.audience;
      })
      .catch(() => {

      })


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

  filterAudience() {
    if (!this.ip) {
      this.filteredAudience = this.audience
    }
    this.filteredAudience = this.audience.filter(val =>
      val?.country.toLowerCase().includes(this.ip)
    )
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
