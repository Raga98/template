import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../models/conferencia';
import { CONFERENCIAS } from '../services/conferencias-mock';

@Component({
  selector: 'conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {

  conferencias = CONFERENCIAS;
  selectedConferencia: Conferencia;

  constructor() { }

  ngOnInit() {
  }

}
