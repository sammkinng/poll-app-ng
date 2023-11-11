import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  votes:{[key:string]:{ [key: string]: any }}={
    'ddh1':{'Uro7nDiU9cct0kArHRXfGlM3Ztj1':'1'},
    'ddh2':{},
    'ddh4':{},
  }

  results:{[key:string]:{ [key: string]: any }}={
    'ddh1':{'summary':'','1':1,'2':0,'3':0,'4':0,'5':0},
    'ddh2':{'summary':'','1':0,'2':0,'3':0,'4':0,'5':0},
    'ddh3':{'summary':'result of poll 3','1':5,'2':0,'3':7,'4':1,'5':2},
    'ddh4':{'summary':'','1':0,'2':0,'3':0,'4':0,'5':0},
    'ddh5':{'summary':'result of poll 5','1':9,'2':11,'3':0,'4':0,'5':2},
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
    let res={
      ...this.results[id]
    }
    res[option]+=1
    vote[uid]=option
    this.votes[id]=vote
    return new Promise<boolean>((res,rej)=>{
      res(true)
    })
    
  }

  getResultById(id:string){
    return new Promise<{[key:string]:string}>((res,rej)=>{
      setTimeout(()=>res(this.results[id]),100)
    })
  }
}
