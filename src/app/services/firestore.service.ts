import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc,getDocs, collection, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  times=0
  times1=0
  err=''

  constructor(
  private fs:Firestore,
  private router:Router
  ) {}

  canUpdate(){
    return new Promise<boolean[]>((res,rej)=>{
      setTimeout(()=>res([this.times<2,this.times1<2]),100)
    })
  }


  updataData(uid:string,data:any,og:{[key:string]:any}){ 
    let d={...og}
    Object.keys(data).forEach(k=>{
      d[k]=data[k]
    })
    
    setDoc(doc(this.fs, 'users/' + uid), d)
      .then(r => {
        this.times+=1
        location.reload()
      })
      .catch(e => {
        this.err = e.code
        setTimeout(()=>{this.err=''},500)
        console.log(e, "error adding details")
      })
  }


  async getPolls(){
    let docs:any[]=[]
    let qs=await getDocs(collection(this.fs,'polls'))
    qs.forEach(d=>{
      let x=d.data()
      x['date']=new Date(x['date'])
      x['timeLeft']=new Date(x['timeLeft'])
      docs.push(x)
    })
    return docs
  }

  async getPollById(pid:string){
    let poll=await getDoc(doc(this.fs,'polls/',pid))
    if(poll.exists()){
      let x=poll.data()
      x['date']=new Date(x['date'])
      x['timeLeft']=new Date(x['timeLeft'])
      return x
    }
    else{
      return null
    }
  }

  async getResultById(rid:string){
    let res=await getDoc(doc(this.fs,'results/',rid))
    if(res.exists()){
      return res.data()
    }
    else{
      return null
    }
  }

  async getVotesById(id:string){
    let res=await getDoc(doc(this.fs,'votes/',id))
    if(res.exists()){
      return res.data()
    }
    else{
      return {}
    }
  }

  async setVotesById(id:string,option:string,uid:string){
    let v=await this.getVotesById(id)
    let r=await this.getResultById(id)
    v[uid]=option
    if(r){
      r[option]++
    }
    else{
      r={}
      r[option]=1
    }
    try {
      await setDoc(doc(this.fs,'votes/',id),v)
      await setDoc(doc(this.fs,'results/',id),r)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
