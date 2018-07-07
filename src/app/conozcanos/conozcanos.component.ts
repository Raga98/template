import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conozcanos',
  templateUrl: './conozcanos.component.html',
  styleUrls: ['./conozcanos.component.css']
})
export class ConozcanosComponent implements OnInit {

  constructor() { }

  // variables para mostrar historia
  showHistoria = false;
  noShowHistoria = true;
  // variables para mostrar doctrina
  showDoctrina = false;
  noShowDoctrina = true;

  // funcion para mostrar contenido de historia
  historia() {
    this.showHistoria = !this.showHistoria;
    if ( this.showHistoria ) {
      this.noShowHistoria = false;
    } else {
      this.noShowHistoria = true;
    }
  }
  // funcion para mostrar contenido de doctrinas
  doctrina() {
    this.showDoctrina = !this.showDoctrina;
    if ( this.showDoctrina ) {
      this.noShowDoctrina = false;
    } else {
      this.noShowDoctrina = true;
    }
  }

  ngOnInit() {
  }

}
