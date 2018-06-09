import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Pubs } from '../models/pubs';
//import { PubsService } from '../services/pubs.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

user = {} as User;
pubs = {} as Pubs;
authState = null;

  constructor(private afAuth: AngularFireAuth, public router: Router, /*private pubsService: PubsService*/ ) { }

  ngOnInit() {
  }

  noDisplay(){
    if(this.authState.email !== 'oscar.272731@gmail.com' || this.authState.email !== 'ragajeremy@gmail.com'){ //I took you in account nice
      this.router.navigate(['/content']);
    }
  }

 /* createPub(){
     this.pubsService.addPub(this.pubs);
  }

  updatePub(){
    this.pubsService.updatePub(this.pubs);
  }

  deletePub(){
    this.pubsService.deletePub(this.pubs);
  }
*/
  adminSignOut(){
    this.afAuth.auth.signOut().then( a => {
      this.router.navigate(['/content']);
    });
    
  }

} 




