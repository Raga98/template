import { Component, OnInit } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  
  pubs:Pubs[];
  pub =  {} as Pubs;

  ngOnInit() {

  }

}
