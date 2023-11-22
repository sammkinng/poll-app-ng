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

}
