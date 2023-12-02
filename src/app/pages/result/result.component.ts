import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphService, PieData } from 'src/app/services/graph.service';
import { PollService } from 'src/app/services/poll.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  declared = false
  title=''
  genre=''
  content=''

  pieData: PieData = {
    id: 'cv1',
    labels: ['a', 'b', 'c', 'd ', 'e', 'f', 'g', 'h', 'i', 'j'],
    dLabel: 'Votes',
    data: [1, 1, 1, 1, 1, 2, 43, 3, 37, 10]
  }

  barData={
    id:'cv2',
    data:{
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Votes',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      }]
    }
  }

  constructor(
    private gs: GraphService,
    private pollService: PollService,
    private vs: VoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Access the route snapshot to get the URL parameters
    this.route.paramMap.subscribe(params => {

      // Retrieve parameters using the 'get' method
      this.pollService.getPollById(params.get('id'))
        .then(res => {
          if (res == null) {
            this.router.navigate(['/result/not-found/404'])
          }
          else {
            this.title=res.ques
              this.genre=res.genre
            if (res?.closed) {
              this.declared = true
              let xx: string[] = []
              
              res.options.forEach((o:any) => {
                xx.push(o.name)
              })

              this.pieData['labels'] = xx
              this.barData.data.labels=xx
              this.vs.getResultById(params.get('id') || '')
                .then(r => {
                  if(r){
                  let x: number[] = []
                  xx.forEach(op => {
                    x.push(parseInt(r[op]))
                  })
                  this.pieData['data'] = x
                  this.barData.data.datasets[0].data=x
                  this.gs.createpie(this.pieData)
                  this.gs.createBarChart(this.barData)
                }
                })

            }else{
              this.vs.getResultById(params.get('id') || '')
                .then(r => {
                  if(r){
                    this.content=r['content-live-poll']
                  }
                })
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    })
  }


}
