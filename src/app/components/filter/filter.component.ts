import { Component, Input,  SimpleChange } from '@angular/core';
import { Audience} from '../../pages/main/main.component';
import { AudienceService } from 'src/app/services/audience.service';
import { StateService } from 'src/app/services/state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() resetFxn=0

  selectedFilters: string[][]=[[],[]] ;
  active=this.globalState.active==1
  inactive=this.globalState.active==2

  toggleActive(num: number) {
    if (this.globalState.active === num) {
      this.globalState.active = 0
      this.active=false
      this.inactive=false
    }
    else {
      this.globalState.active = num
      if(num==1){
        this.active=true
        this.inactive=false
      }
      else{
        this.active=false
        this.inactive=true
      }
    }
    this.globalState.filterItems(this.selectedFilters[0], this.selectedFilters[1])
  }

  toggleFilter(filter: string, type: number) {
    if (this.isSelected(filter, type)) {
      this.selectedFilters[type] = this.selectedFilters[type].filter(f => f !== filter);
    } else {
      this.selectedFilters[type].push(filter);
    }
    this.globalState.filterItems(this.selectedFilters[0], this.selectedFilters[1])
  }

  isSelected(filter: string, type: number): boolean {
    return this.selectedFilters[type].includes(filter);
  }

  mobileFilters = false;
  audience: Audience[] = [];
  filteredAudience: Audience[] = [];
  ip = ""
  seeAll=false
  seeAllCat=false

  constructor(
    private audienceService: AudienceService,
    public globalState: StateService,
    private route:ActivatedRoute
  ) {
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

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let id=params.get('id')
      let x:string[][]=[[],[]]
      if(id){
      x[1].push(id)
      }
      this.selectedFilters=x
      this.globalState.filterItems(x[0],x[1])
    })

    

    

   

  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // The ngOnChanges hook is called when any input variable changes
    if (changes['resetFxn']) {
      this.reset();
    }
  }

  reset=()=>{
    this.filteredAudience=this.audience
    this.selectedFilters=[[],[]]
    this.ip=""
    this.active=false
    this.inactive=false
    this.globalState.active=0
    this.globalState.filterItems([],[])
  }


}
