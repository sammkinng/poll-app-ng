import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  times=0
  err=''
  success=false

  constructor(
  private fs:Firestore
  ) {}

  canUpdate(){
    return new Promise<boolean>((res,rej)=>{
      setTimeout(()=>res(this.times<2),100)
    })
  }


  async updataData(uid:string,data:any){ 
    setDoc(doc(this.fs, 'users/' + uid), data)
      .then(r => {
        this.success=true
        this.times+=1
      })
      .catch(e => {
        this.err = e.code
        console.log(e, "error adding details")
      })
  }
}
