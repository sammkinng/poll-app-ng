import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphService, PieData } from 'src/app/services/graph.service';
import { PollService } from 'src/app/services/poll.service';
import { VoteService } from 'src/app/services/vote.service';
import { Option } from '../main/main.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  declared = false
  options: string[] = []
  title=''
  genre=''

  pieData: PieData = {
    id: 'cv1',
    labels: ['a', 'b', 'c', 'd ', 'e', 'f', 'g', 'h', 'i', 'j'],
    dLabel: 'Votes',
    data: [1, 1, 1, 1, 1, 2, 43, 3, 37, 10]
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
              let x: string[] = []
              
              
              res.options.forEach((o:any) => {
                x.push(o.name)
                this.pieData['labels'] = x
                this.options=x
              })


              this.vs.getResultById(params.get('id') || '')
                .then(r => {
                  if(r){
                  let x: number[] = []
                  this.options.forEach(op => {
                    x.push(parseInt(r[op]))
                  })
                  this.pieData['data'] = x
                  this.gs.createpie(this.pieData)
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
