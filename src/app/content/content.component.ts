import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Popup } from 'ng2-opd-popup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  close(arg0: any): any {
    throw new Error("Method not implemented.");
  }
// @Input() pubs: Pubs[];
// @Output() borrar: EventEmitter<any> = new EventEmitter();

  @Input() editable:boolean = false;
  public form: FormGroup;

  pubs:Pubs[];
  pub =  {} as Pubs;
  EditDialogRef: MatDialogRef<EditComponent>;
  pubsServie: any;
  dialogRef: any;
  editState: boolean = false;
  itemToEdit: Pubs;

  constructor(private pubsService:PubsService, public dialog: MatDialog, private popup: Popup, private formsBuilder: FormBuilder) { }

  ngOnInit() {
    this.pubsService.getPubs().subscribe(pubs => {
      this.pubs = pubs;
    });
      this.form = this.formsBuilder.group({
        //ID: [],
        title: ['', Validators.required],
        news: ['', Validators.required]
      });
  }

  openEditDialog(event, pub)  {
    this.editState = true;
    this.itemToEdit = pub;
  }
  
  editContent(id: Pubs) {
    this.pubsServie.updatePub(id);
    this.clearState();
    //this.dialogRef.close();
  }

 clearState(){
   this.editState = false;
   this.itemToEdit = null;
 }

  delete(item: string) {
    console.log('En el componente');
    this.pubsService.deletePub(item);
    // this.borrar.emit({codigo:1, valor:'prueba', pub:param});
  }

get title() {return this.form.get('title');}
get news() {return this.form.get('news');}

}
