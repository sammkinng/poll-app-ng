import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PollService } from 'src/app/services/poll.service';

interface Category {
  name: string,
  value: number
}

interface Poll {
  name: string,
  active: boolean,
  id: number,
  date:string,
  location:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  ip = ""
  pollList: Poll[] = []

  constructor(
    private categoryService: CategoryService,
    private pollService: PollService
  ) {
    this.categories = categoryService.getCategories();
    this.filteredCategories = this.categories
    this.pollList = pollService.getPolls()
  }

  filterCategories() {
    if (!this.ip) {
      this.filteredCategories = this.categories
    }
    this.filteredCategories = this.categories.filter(val =>
      val?.name.toLowerCase().includes(this.ip)
    )
  }
}
