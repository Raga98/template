import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pubs } from '../models/pubs';
import { PubsService } from '../services/pubs.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pub  = {} as Pubs;
  public form: FormGroup;

  constructor( public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA,) public data: any,
   private formsBuilder: FormBuilder, private pubsServie: PubsService) { }

  ngOnInit() {
    this.form = this.formsBuilder.group({
      //ID: [],
      title: ['', Validators.required],
      news: ['', Validators.required]
    });
  }

  editar(id:string, pubs: Pubs) {
    this.form.value;
    this.pubsServie.editPub(id, pubs);
    this.dialogRef.close();
  }

get title() {return this.form.get('title');}
get news() {return this.form.get('news');}

}

