import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

//Declaración de la variable visible, se le define como boolean y se le asigna un valor = true
visible: boolean = true;
//Acontinuación se definen open y close dentro de Output 
@Output() open: EventEmitter<any> = new EventEmitter();
@Output() close: EventEmitter<any> = new EventEmitter();

toggle() {
  this.visible = !this.visible;
  if (this.visible) {
    this.open.emit(null);
  } else {
    this.close.emit(null);
  }
}

  constructor() { }

  ngOnInit() {
  }

}
