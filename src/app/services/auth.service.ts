import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword,Auth, signOut, User } from '@angular/fire/auth';
import { StateService } from './state.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  invalidCredentials=false

  login(username:string,password:string) {
    signInWithEmailAndPassword(this.auth,username,password)
      .then((userCredential) => {
        // Successfully logged in
        console.log('Logged in:', userCredential.user);
        this.router.navigate(['/'])
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        this.invalidCredentials=true
      });
  }

  logout(){
    signOut(this.auth)
    .then((res)=>{
      this.router.navigate(['/login'])
    })
    .catch((e)=>{
      console.log("Failed to logout: ",e)
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
    this.auth.onAuthStateChanged((user)=>{
      if (user) {
        // Store user session data in local storage
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        // Clear user session data from local storage
        localStorage.removeItem('user');
      }
    })
  }

  getUser(){
    return this.auth.currentUser
  }


  constructor(
    private auth:Auth,
    private globalState:StateService,
    private router:Router
    ) { 
      this.saveUserSession()
      
  }

}