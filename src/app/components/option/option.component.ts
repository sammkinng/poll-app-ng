import { Component, Input } from '@angular/core';
import { Option } from 'src/app/pages/main/main.component';
import { AuthService } from 'src/app/services/auth.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() options: Option[] = []
  @Input() pollId: string = ''

  voteErr = false
  VoteErr=''

  selected: string | null = null

  voted = false

  vote(option:string) {
    if (this.selected == null) {
      this.voteErr = true
      setTimeout(() => this.voteErr = false, 1500)
    }
    else {
      this.votes.setVoteByPollIdAndUser(this.pollId,this.auth.getUID(),option)
      .then(r=>{
        if(r){
          this.voted=true
        }
      })
      .catch(e=>{
        this.VoteErr=e.code
      })
    }
  }

  constructor(
    private auth: AuthService,
    private votes: VoteService,
  ) { }

  ngOnChanges() {

    if (this.pollId) {
      this.votes.getVotesByPollId(this.pollId)
        .then(r => {
          this.voted = r.hasOwnProperty(this.auth.getUID())
          if (this.voted) {
            this.selected = r[this.auth.getUID()]
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  selectOption(i: string) {
    if (!this.voted) {
      if (this.selected === i) {
        this.selected = null
      }
      else {
        this.selected = i
      }
    }
  }

}
