import { Component, OnInit, OnChanges } from '@angular/core';
import { PubsService } from '../services/pubs.service'; 
import { Pubs } from '../models/pubs';
import { Observable } from 'rxjs';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pubs: Observable<Pubs[]>;
  pub =  {} as Pubs;

  constructor(private pubsService: PubsService) { }

  

  ngOnInit() {
   
 }
 
}