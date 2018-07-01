import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulos';
import { ARTICULOS } from '../services/articulos-mock';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  
  articulos = ARTICULOS;
  selectedArticulo: Articulo;


  constructor(private route: ActivatedRoute, private router: Router) { 
    // this.route.params.subscribe( params => console.log(params));
  }

  activar(title: string) {
    this.router.navigate(['search', title])
  } 

  ngOnInit() {
  }

  onSelect(articulo: Articulo): void {
    this.selectedArticulo = articulo;
  }

}
