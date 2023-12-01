import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, Auth, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider } from '@angular/fire/auth';
import { Firestore, setDoc, doc, getDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginErr = ''
  private userDetails = new BehaviorSubject<any>({
    fName: '',
    lName: ''
  })
  userDetails$: Observable<any> = this.userDetails.asObservable()
  regError = ''
  addInfoErr = ''

  login(username: string, password: string) {
    signInWithEmailAndPassword(this.auth, username, password)
      .then((userCredential) => {
        // Successfully logged in
        localStorage.setItem('uid', userCredential.user.uid)
        this.router.navigate(['/'])
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error.message);
        this.loginErr = error.code
        setTimeout(() => this.loginErr = '', 3000)
      });
  }

  details(uid: string) {
    getDoc(doc(this.fs, 'users/' + uid))
      .then(r => {
        if (r.exists()) {
          this.userDetails.next(r.data())
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  logout() {
    signOut(this.auth)
      .then((res) => {
        localStorage.removeItem('uid')
        this.router.navigate(['/auth/login'])
      })
      .catch((e) => {
        console.log("Failed to logout: ", e)
      })
  }

  getUID() {
    return this.auth.currentUser?.uid || ''
  }

  signup(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(res => {
        localStorage.setItem('uid', res.user.uid)
        localStorage.setItem('addUid', res.user.uid)
        this.router.navigate(['/auth/add-info'])
      })
      .catch(e => {
        console.log("Registration Failed", e.message)
        this.regError = e.code
        setTimeout(() => this.regError = '', 3000)
      })
  }

  async userExists(uid: string) {
    try {
      let r = await getDoc(doc(this.fs, 'users/' + uid))
      if (r.exists()) {
        return true
      }
      else {
        return false
      }
    } catch (error) {
      return false
    }
  }


  signwithProvider(id: number, type: number) {
    let provider
    switch (id) {
      case 0:
        provider = new GoogleAuthProvider()
        break
      case 1:
        provider = new OAuthProvider('microsoft.com')
        break
      case 2:
        provider = new FacebookAuthProvider()
        break
      case 3:
        provider = new TwitterAuthProvider()
        break
      default:
        return
    }
    signInWithPopup(this.auth, provider)
      .then(r => {
        localStorage.setItem('uid', r.user.uid)
        this.userExists(r.user.uid)
          .then(rr => {
            if (rr) {
              this.router.navigate(['/'])
            }
            else {
              localStorage.setItem('addUid', r.user.uid)
              this.router.navigate(['/auth/add-info'])
            }
          })
      })
      .catch(e => {
        console.log(e)
        if (type) {
          this.regError = e.code
          setTimeout(() => this.regError = '', 3000)
        }
        else {
          this.loginErr = e.code
          setTimeout(() => this.loginErr = '', 1500)
        }
      })

  }


  addDetails(uid: string, details: any) {
    details['times'] = 0
    details['times1'] = 0
    details['votes'] = []
    setDoc(doc(this.fs, 'users/' + uid), details)
      .then(r => {
        localStorage.removeItem('addUid')
        // this.router.navigate(['/'])
        location.replace('/')
      })
      .catch(e => {
        this.addInfoErr = e.code
        console.log(e, "error adding details")
      })

    let month = new Date().getMonth()
    let year = new Date().getFullYear()


    getDoc(doc(this.fs, 'monthlyUsers', year + ''))
      .then(d => {
        if (d.exists()) {
          let o=d.data()
          if(o['arr'][month]===0){
            if(month){
            o['arr'][month]=o['arr'][month-1]
            }
          }
          o['arr'][month]+=1

          setDoc(doc(this.fs, 'monthlyUsers', year + ''), o)
          .catch(e=>{
            console.log(e)
          })
        }
      })
      .catch((e)=>{
        console.log(e)
      })

  }

  constructor(
    private auth: Auth,
    private fs: Firestore,
    private router: Router
  ) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.details(user.uid)
      } else {
        console.log('No user')
      }
    })

  }

}