import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './admin.service'; 
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthGuardService implements CanActivate{

  constructor(public adminService: AdminService, public router: Router, private afAuth: AngularFireAuth) { }

   canActivate(): boolean {
    let userId = this.afAuth.authState.subscribe(user => {
      user.email;
     if (user.email == "oscar.272731@gmail.com"){
      this.router.navigate(['admin']);
      
     }
     else{
       if(!user.uid || user.uid){
         this.router.navigate(['content']);
         
       }
     }
    }) 
       return false;
     }
    
   }

