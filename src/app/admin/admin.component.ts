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

  boton: number

  boton1() {
    this.boton = 1
  }
  descartar() {
    this.boton = 0
  }

} 




