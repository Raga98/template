import { Injectable } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';


@Injectable()
export class LoginService {
  user = {} as User
  constructor(private afAuth: AngularFireAuth, private router: Router, private r: ActivatedRoute) { }

  loginGo(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result)=> {
       if (result.credential){
        var user = result.user;
        console.log(result);
    }
  
     }); 
  }; 
   

  

  gotoConozcanos(){
    this.router.navigate(['/conozcanos']);
  }
}


