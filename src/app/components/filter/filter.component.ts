import { Component } from '@angular/core';
import { Category, Audience, Poll } from '../main/main.component';
import { AudienceService } from 'src/app/services/audience.service';
import { CategoryService } from 'src/app/services/category.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  selectedFilters: string[][] = [[],[]];

  toggleActive(num:number){
    if(this.globalState.active===num){
      this.globalState.active=0
    }
    else{
      this.globalState.active=num
    }
    this.globalState.filterItems(this.selectedFilters[0],this.selectedFilters[1])
  }

  toggleFilter(filter: string,type:number) {
    if (this.isSelected(filter,type)) {
      this.selectedFilters[type] = this.selectedFilters[type].filter(f => f !== filter);
    } else {
      this.selectedFilters[type].push(filter);
    }
    this.globalState.filterItems(this.selectedFilters[0],this.selectedFilters[1])
  }

  isSelected(filter: string,type:number): boolean {
    return this.selectedFilters[type].includes(filter);
  }

  mobileFilters = false;
  categories: Category[] = [];
  audience: Audience[] = [];
  filteredAudience: Audience[] = [];
  ip = ""

  constructor(
    private categoryService: CategoryService,
    private audienceService: AudienceService,
    public globalState:StateService
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
    }

    filterAudience() {
      if (!this.ip) {
        this.filteredAudience = this.audience
      }
      this.filteredAudience = this.audience.filter(val =>
        val?.country.toLowerCase().includes(this.ip)
      )
    }

}
