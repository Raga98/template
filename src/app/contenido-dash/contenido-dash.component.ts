import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contenido-dash',
  templateUrl: './contenido-dash.component.html',
  styleUrls: ['./contenido-dash.component.css']
})
export class ContenidoDashComponent implements OnInit {
  
  @Input() contador:number;

  public form: FormGroup;

  constructor( public dialogRef: MatDialogRef<ContenidoDashComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
   private formsBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formsBuilder.group({
      ID: [],
      Titulo: ['', [Validators.required]],
    });  
  }

  guardar() {
    this.form.value;
    this.dialogRef.close();
  }

}
