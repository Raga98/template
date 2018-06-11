import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contenido-dash',
  templateUrl: './contenido-dash.component.html',
  styleUrls: ['./contenido-dash.component.css']
})
export class ContenidoDashComponent implements OnInit {
@Input() contador:number;
  constructor() { }

  ngOnInit() {
  }

}
