import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  err=''

  votes:{[key:string]:{ [key: string]: any }}={
    'ddh1':{'Uro7nDiU9cct0kArHRXfGlM3Ztj1':'A'},
    'ddh2':{},
    'ddh4':{},
  }

  results:{[key:string]:{ [key: string]: any }}={
    'ddh1':{'1':1,'2':0,'3':0,'4':0,'5':0},
    'ddh2':{'1':0,'2':0,'3':0,'4':0,'5':0},
    'ddh3':{'A':5,'B':0,'C':7,'D':1,'E':2},
    'ddh4':{'1':0,'2':0,'3':0,'4':0,'5':0},
    'ddh5':{'A':9,'B':11,'C':0,'D':0,'E':2},
  }

  constructor(
    private fs:FirestoreService
  ) { 
  }

  async getVotesByPollId(id:string){
    return await this.fs.getVotesById(id)
  }

  async setVoteByPollIdAndUser(id:string,uid:string,option:string){
    let r=await this.fs.setVotesById(id,option,uid)
    if(!r){
      this.err='Some Unknown Error Occured: SE502'
      setTimeout(()=>this.err='',2000)
      return false
    }
    return true
  }

  async getResultById(id:string){
    return await this.fs.getResultById(id)
  }
}
