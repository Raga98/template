import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate, CanActivateChild} from '@angular/router';

import { ContenidoDashComponent } from '../contenido-dash/contenido-dash.component';
import { ArticuloDashComponent } from '../articulo-dash/articulo-dash.component'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
//import { MaterialModule } from '../app.module';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  ContenidoDialogRef: MatDialogRef<ContenidoDashComponent>;

  openContentDialog(): void {
    let dialogRef = this.dialog.open(ContenidoDashComponent, {
      hasBackdrop: false,
      width: '80%',
    });
  }

  ArticuloDialogRef: MatDialogRef<ArticuloDashComponent>;

  openArticuloDialog(): void {
    let dialogRef = this.dialog.open(ArticuloDashComponent, {
      hasBackdrop: false,
      width: '80%',
    });
  }

  constructor(private afAuth: AngularFireAuth, public router: Router, public dialog: MatDialog) { }

  ngOnInit(){
  }

  adminSignOut(){
    this.afAuth.auth.signOut().then( a => {
      this.router.navigate(['/content']);
    });
  }
} 




