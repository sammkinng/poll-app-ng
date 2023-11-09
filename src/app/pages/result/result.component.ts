import { Component } from '@angular/core';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  data1 = [
    {
      name: 'a',
      value: 1
    }, {
      name: 'a',
      value: 1
    }, {
      name: 'a',
      value: 1
    }, {
      name: 'a',
      value: 1
    }, {
      name: 'a',
      value: 1
    },
    {
      name: 'a',
      value: 2
    },
    {
      name: 'b',
      value: 43
    },
    {
      name: 'c',
      value: 3
    },
    {
      name: 'd',
      value: 37
    },
    {
      name: 'd',
      value: 10
    },
  ]

  data2={
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F', 'Category G','a','b'],
    values: [30, 29, 28, 21, 11, 10, 10,10,10],
    xAxisLabel: 'Categories',
    yAxisLabel: 'Values',
    title: 'Bar Graph Example',
  };

  graph1 = this.gs.drawPieChart(this.data1)
  graph2=this.gs.createBarGraph(this.data2,50)
  constructor(
    private gs: GraphService
  ) { }

}
