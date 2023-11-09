import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes:{[key:string]:{ [key: string]: any }}={
    'ddh1':{'Uro7nDiU9cct0kArHRXfGlM3Ztj1':'1'},
    'ddh2':{},
    'ddh3':{},
    'ddh4':{},
    'ddh5':{},
  }

  constructor() { }

  getVotesByPollId(id:string){
    return new Promise<{ [key: string]: any }>((res,rej)=>{
      setTimeout(()=>res(this.votes[id]),500)
    })
  }

  setVoteByPollIdAndUser(id:string,uid:string,option:string){
    let vote={
      ...this.votes[id],
    }
    vote[uid]=option
    this.votes[id]=vote
    return new Promise<boolean>((res,rej)=>{
      res(true)
    })
    
  }
}
