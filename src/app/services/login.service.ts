import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import * as firebase from 'firebase';


@Injectable()
export class LoginService {
  user = {} as User
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  loginGo(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result)=> {
      if (result.credential){
        var user = result.user;
        console.log(result);
      }
      if(!user.uid){
        this.router.navigate(['content']);
      } 
      else {
        this.router.navigate(['content']);
      }
      if (user.email === "oscar.272731@gmail.com"){
        this.router.navigate(['admin'])
      }
    });
  }
}
