import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate, CanActivateChild} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(){
    
  }
  adminSignOut(){
    this.afAuth.auth.signOut().then( a => {
      this.router.navigate(['/content']);
    });
  }
 
  cont: number;
  art: number;
  conf: number;
  confe: number;
  vid: number;
  lib: number;
  bio: number;
  contador = [6,8,3,2,5];

  boton1() {
    this.cont = 1
    console.log(this.cont)
  }
  boton2() {
    this.art = 2;
  }
  boton3() {
    this.conf = 3;
  }
  boton4() {
    this.confe = 4;
  }
  boton5() {
    this.vid = 5;
  }
  boton6() {
    this.lib = 6;
  }
  boton7() {
    this.bio = 7;
  }

  descartar() {
    this.cont = 0;
    this.art = 0;
    this.conf = 0;
    this.confe = 0;
    this.bio = 0;
    this.lib = 0;
    this.vid = 0;
  }
} 




