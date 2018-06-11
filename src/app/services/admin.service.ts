import { Injectable } from '@angular/core';
import {AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()

export class AdminService {

  constructor(private afAuth: AngularFireAuth, public router: Router) { }

  public isAdmin(): boolean{
  let userEmail = this.afAuth.authState.subscribe(user => {
      if(user.uid == "BVFacTYdStUBYgLugm3qFx63eyy1"){
        this.router.navigate(['admin']);
        return true;
      }
    });
    return true;
   }
}
