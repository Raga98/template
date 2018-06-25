import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(perro => console.log('El valor del id es: '+perro['id'])) ;
  }

}
