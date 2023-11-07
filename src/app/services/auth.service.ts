import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, Auth, signOut, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginErr = ''
  userDetails: any = {
    fName:'',
    lName:''
  }
  regError = ''
  addInfoErr = ''

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
        this.loginErr = error.code
        setTimeout(() => this.loginErr = '', 3000)
      });
  }

  details(uid: string) {
    getDoc(doc(this.fs, 'users/' + uid))
      .then(r => {
        if (r.exists()) {
          this.userDetails = r.data()
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  logout() {
    signOut(this.auth)
      .then((res) => {
        this.router.navigate(['/auth/login'])
      })
      .catch((e) => {
        console.log("Failed to logout: ", e)
      })
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in
    return !!this.auth.currentUser;
  }

  getUser() {
    return this.auth.currentUser
  }

  signup(email: string, password: string) {
    console.log("heere")
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(res => {
        localStorage.setItem('addUid', res.user.uid)
        this.router.navigate(['/auth/add-info'])
      })
      .catch(e => {
        console.log("Registration Failed", e.message)
        this.regError = e.code
        setTimeout(() => this.regError = '', 3000)
      })
  }

  addDetails(uid: string, details: any) {
    setDoc(doc(this.fs, 'users/' + uid), details)
      .then(r => {
        localStorage.removeItem('addUid')
        this.router.navigate(['/'])
      })
      .catch(e => {
        this.addInfoErr = e.code
        console.log(e, "error adding details")
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