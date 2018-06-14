import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pubs } from '../models/pubs';
import { PubsService } from '../services/pubs.service';

@Component({
  selector: 'contenido-dash',
  templateUrl: './contenido-dash.component.html',
  styleUrls: ['./contenido-dash.component.css']
})
export class ContenidoDashComponent implements OnInit {
  
  pubs  = {} as Pubs;
  public form: FormGroup;

  guardado : boolean;
  
  

  constructor( public dialogRef: MatDialogRef<ContenidoDashComponent>, @Inject(MAT_DIALOG_DATA,) public data: any,
   private formsBuilder: FormBuilder, private pubsServie: PubsService) { }

  ngOnInit() {
    this.form = this.formsBuilder.group({
      //ID: [],
      title: ['', Validators.required],
    });
  }

  guardar(pubs: Pubs) {
    this.form.value;
    this.pubsServie.addPub(this.pubs);
    this.dialogRef.close();
    this.guardado = true;
  }

get title() {return this.form.get('title');}

}
