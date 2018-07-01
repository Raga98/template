import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { Articulo } from '../models/articulos';
import { ARTICULOS } from '../services/articulos-mock';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos = ARTICULOS;
  selectedArticulo: Articulo;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe( params => console.log(params));
  }

  ngOnInit() {
    // this.route.params.subscribe(perro => console.log('El valor del id es: '+perro['id']));

  }


}


