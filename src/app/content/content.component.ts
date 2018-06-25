import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
// @Input() pubs: Pubs[];
// @Output() borrar: EventEmitter<any> = new EventEmitter();

  @Input() editable:boolean = false;
  

  pubs:Pubs[];
  pub =  {} as Pubs;
  EditDialogRef: MatDialogRef<EditComponent>;
  constructor(private pubsService:PubsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.pubsService.getPubs().subscribe(pubs => {
      this.pubs = pubs;
    });
  }

  openEditDialog(): void {
    let dialogRef = this.dialog.open(EditComponent, {
      hasBackdrop: false,
      width: '80%',
    });
  }

  delete(item: string) {
    console.log('En el componente');
    this.pubsService.deletePub(item);
    // this.borrar.emit({codigo:1, valor:'prueba', pub:param});
  }
}
