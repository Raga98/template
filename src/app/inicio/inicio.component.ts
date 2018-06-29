import { Component, OnInit, OnChanges } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pubs:Pubs[];
  pub =  {} as Pubs;

  constructor(private pubsService: PubsService) { }

  

  ngOnInit() {
    this.pubsService.getPubs().subscribe(pubs => {
      this.pubs = pubs;

  });

 }
 
 ngOnChanges(){
  this.pubsService.getPubs().subscribe(pubs => {
    this.pubs = pubs;
  });
 }

}