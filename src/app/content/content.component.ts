import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';

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
  constructor(private pubsService:PubsService) { }

  ngOnInit() {
    this.pubsService.getPubs().subscribe(pubs => {
      this.pubs = pubs;
    });
  }

  delete(item: string) {
    console.log('En el componente');
    this.pubsService.deletePub(item);
    // this.borrar.emit({codigo:1, valor:'prueba', pub:param});
  }
}
