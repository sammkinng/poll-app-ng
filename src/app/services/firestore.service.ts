import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDocs, collection, getDoc,query, orderBy, where ,documentId} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  err = ''
  userD:{[key:string]:any}={}

  logo=''
  icon=''
  ad=''

  constructor(
    private fs: Firestore,
    private auth:AuthService
  ) { 
    auth.userDetails$.subscribe(d=>{this.userD=d})
    this.getIcons()
    this.getGoogleAd()
  }

  getIcons(){
    getDoc(doc(this.fs,'logo','logo'))
    .then(d=>{
      if(d.exists()){
        this.logo=d.data()['url']
      }
    })
    getDoc(doc(this.fs,'favIcon','icon'))
    .then(d=>{
      if(d.exists()){
        this.icon=d.data()['url']
      }
    })
  }

  updataData(uid: string, data: any, og: { [key: string]: any },type:number) {
    let d = { ...og }
    Object.keys(data).forEach(k => {
      d[k] = data[k]
    })
    if(type){
      d['times1']+=1
    }
    else{
      d['times']+=1
    }

    setDoc(doc(this.fs, 'users/' + uid), d)
      .then(r => {
        location.reload()
      })
      .catch(e => {
        this.err = e.code
        setTimeout(() => { this.err = '' }, 500)
        console.log(e, "error adding details")
      })
  }


  async getPolls() {
    let docs: any[] = []
    let qs = await getDocs(query(collection(this.fs, 'polls'),orderBy('date')))
   
    qs.forEach(d => {
      let x = d.data()
      x['date'] = new Date(x['date'])
      x['timeLeft'] = new Date(x['timeLeft'])
      docs.push(x)
     
    })
    return docs
  }

  async getPollById(pid: string) {
    let poll = await getDoc(doc(this.fs, 'polls/', pid))
    if (poll.exists()) {
      let x = poll.data()
      x['date'] = new Date(x['date'])
      x['timeLeft'] = new Date(x['timeLeft'])
      return x
    }
    else {
      return null
    }
  }

  async getResultById(rid: string) {
    let res = await getDoc(doc(this.fs, 'results/', rid))
    if (res.exists()) {
      return res.data()
    }
    else {
      return null
    }
  }

  async getVotesById(id: string) {
    let res = await getDoc(doc(this.fs, 'votes/', id))
    if (res.exists()) {
      return res.data()
    }
    else {
      return {}
    }
  }

  async setVotesById(id: string, option: string, uid: string) {
    let v = await this.getVotesById(id)
    let r = await this.getResultById(id)
    let votes=[...this.userD['votes']]
    votes.push(id)
    v[uid] = option
    if (r) {
      r[option]++
    }
    else {
      r = {}
      r[option] = 1
    }
    try {
      await setDoc(doc(this.fs, 'votes/', id), v)
      await setDoc(doc(this.fs, 'results/', id), r)
      await setDoc(doc(this.fs,'users/',uid),{
        ...this.userD,
        votes
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getBlogs() {
    let docs: any[] = []
    let qs = await getDocs(query(collection(this.fs, 'blogs'),orderBy('date')))
    qs.forEach(d => {
      let x = d.data()
      x['date'] = new Date(x['date'])
      docs.push(x)
    })
    return docs
  }

  async getBlogById(id: string) {
    let res = await getDoc(doc(this.fs, 'blogs/', id))
    if (res.exists()) {
      let x = res.data()
      x['date'] = new Date(x['date'])
      return x
    }
    else {
      return null
    }
  }

  async getCategories() {
    let docs: any[] = []
    let qs = await getDocs(collection(this.fs, 'genres'))
    qs.forEach(d => {
      docs.push(d.data())
    })
    return docs
  }

  async getAudiences() {
    let docs: any[] = []
    let qs = await getDocs(collection(this.fs, 'audiences'))
    qs.forEach(d => {
      docs.push(d.data())
    })
    return docs
  }

  async getNotifications(){
    let docs: any[] = []
    let qs = await getDocs(collection(this.fs, 'notifications'))
    qs.forEach(d => {
      docs.push(d.data())
    })
    return docs
  }

  async getVotedPolls(votes:string[]){
    let arr:any[]=[]
    let x=await getDocs(query(collection(this.fs,'polls'),where(documentId(),'in',votes)))
    x.forEach(p=>{
      let j=p.data()
      j['date'] = new Date(j['date'])
      j['timeLeft'] = new Date(j['timeLeft'])
      arr.push(j)
    })
    return arr
  }

  async getGoogleAd(){
    let x=await getDoc(doc(this.fs,'ads','ad1'))
    if(x.exists()){
      this.ad= x.data()['code']
    }
  }

}
