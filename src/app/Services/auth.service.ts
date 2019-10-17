import { Injectable,NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from '../inter-faces.user';
import { auth } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<User>;
  user$;
  constructor(
    private afauth:AngularFireAuth,
    private db:AngularFireDatabase,
    private router:Router,
    private ngZone:NgZone,
    private activRout:ActivatedRoute
  ) { 
     this.user = this.afauth.authState;
     this.afauth.authState.subscribe(userInfo =>{
       if(userInfo){
        let getUserInfo = this.db.object('/User/' + userInfo.uid).valueChanges();
        getUserInfo.subscribe(user => {
          this.user$ = user;
        })
       }else{
         this.user$ = '' ; 
       }
     })
  }

  SendVerificationMail() {
    return this.afauth.auth.currentUser.sendEmailVerification()
  }
  createWithEmailAndPassword(email, password) {
    return this.afauth.auth.createUserWithEmailAndPassword(email, password)
   
}

  loginEmailAndPassword(email, password) {
    return this.afauth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified !== true) {
        this.SendVerificationMail();
        window.alert('Please validate your email address. Kindly check your inbox.');
      }
    })
  }
  loginWithGoogle() {
    return this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: any = this.db.object(`User/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true })
  }
  logout() {
    return this.afauth.auth.signOut();
  }
}
