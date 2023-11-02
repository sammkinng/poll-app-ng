import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, Auth, signOut, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, setDoc, doc,getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginErr=''
  detailsAdded=false
  regError=''
  addInfoErr=''

  login(username: string, password: string) {
    signInWithEmailAndPassword(this.auth, username, password)
      .then((userCredential) => {
        // Successfully logged in
        console.log('Logged in:', userCredential.user);
        this.router.navigate(['/'])
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error.message);
        this.loginErr=error.code
        setTimeout(()=>this.loginErr='',3000)
      });
  }

  details(uid:string){
    getDoc(doc(this.fs,'users/'+uid))
    .then(r=>{
      this.detailsAdded=true
    })
    .catch(e=>{
      this.regError='Some Error occured'
    })
  }

  logout() {
    signOut(this.auth)
      .then((res) => {
        this.router.navigate(['/login'])
      })
      .catch((e) => {
        console.log("Failed to logout: ", e)
      })
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in
    return !!this.auth.currentUser;
  }

  restoreUserSession() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      // Set the user's authentication state based on the retrieved data
      this.auth.updateCurrentUser(user)
    }
  }

  saveUserSession() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // Store user session data in local storage
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        // Clear user session data from local storage
        localStorage.removeItem('user');
      }
    })
  }

  getUser() {
    return this.auth.currentUser
  }

  signup(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(res => {
        localStorage.setItem('addUid',res.user.uid)
        this.router.navigate(['/add-info'])
      })
      .catch(e => {
        console.log("Registration Failed",e.message)
        this.regError=e.code
        setTimeout(()=>this.regError='',3000)
      })
  }

  addDetails(uid: string, details: any) {
    setDoc(doc(this.fs, 'user/' + uid), details)
      .then(r => {

      })
      .catch(e => {
        this.addInfoErr=e.code
        console.log(e, "error adding details")
      })
  }

  constructor(
    private auth: Auth,
    private fs: Firestore,
    private router: Router
  ) {
    this.saveUserSession()

  }

}