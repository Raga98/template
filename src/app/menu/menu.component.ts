import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //public hidden = "oculto";
  //public display = "display";

  //Declaración de la variable visible, se le define como boolean y se le asigna un valor = true
  visible: boolean = false;
  classMenu: string = 'oculto';
  //Cada vez que es accionado toggle el valor de la variable visible es cambiado por su negativo
  toggle() {
    this.classMenu = 'display'
    this.classMenu = 'oculto'
  }

  constructor() { }
  ngOnInit() {
  }
}
