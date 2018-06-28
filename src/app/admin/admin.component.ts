import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate, CanActivateChild} from '@angular/router';

import { ContenidoDashComponent } from '../contenido-dash/contenido-dash.component';
import { EditComponent } from '../edit/edit.component';
import { ArticuloDashComponent } from '../articulo-dash/articulo-dash.component'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
//import { MaterialModule } from '../app.module';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  ContenidoDialogRef: MatDialogRef<ContenidoDashComponent>;
  EditDialogRef: MatDialogRef<EditComponent>;
  pub =  {} as Pubs;
  pubs: Pubs[];
  guardado: boolean;

  // botones = 1;
  // inicio() {
  //   this.botones = 1
  // }
  // conozcanos() {
  //   this.botones = 2
  // }
  // cursos() {
  //   this.botones = 3
  // }
  // biblioteca() {
  //   this.botones = 4
  // }

  openContentDialog(): void {
    let dialogRef = this.dialog.open(ContenidoDashComponent, {
      hasBackdrop: false,
      width: '80%',
    });
  }

  /*openEditDialog(): void {
    let dialogRef = this.dialog.open(EditComponent, {
      hasBackdrop: false,
      width: '80%',
    });
  } */

  // borrarDesdeComponente(evento) {
  //   console.log('Desde admin datos de param '+JSON.stringify(evento));
  // }

  // ArticuloDialogRef: MatDialogRef<ArticuloDashComponent>;

  // openArticuloDialog(): void {
  //   let dialogRef = this.dialog.open(ArticuloDashComponent, {
  //     hasBackdrop: false,
  //     width: '80%',
  //   });
  // }

  

  constructor( private afAuth: AngularFireAuth, public router: Router, public dialog: MatDialog, private pubsService: PubsService) { }

  ngOnInit(){
    // return this.pubsService.getPubs().subscribe(pubs => {
    //   this.pubs = pubs;
    // })
  }

  adminSignOut(){
    this.afAuth.auth.signOut().then( a => {
      this.router.navigate(['/inicio']);
    });
  }
  
  // delete(pubs: Pubs){
  //  this.pubsService.deletePub(pubs);
  // } 
} 




