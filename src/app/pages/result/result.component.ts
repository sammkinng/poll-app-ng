import { Component } from '@angular/core';
import { GraphService, PieData } from 'src/app/services/graph.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  pieData:PieData={
    id:'cv1',
    labels:['a','b','c','d ','e','f','g','h','i','j'],
    dLabel:'Percent',
    data:[1,1,1,1,1,2,43,3,37,10]
  }

  constructor(
    private gs: GraphService
  ) { 
   
  }

  ngOnInit(){
    this.gs.createpie(this.pieData)
  }

}
