import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conferencista } from "../../models/conferencistas"

@Component({
  selector: 'conferencista-detalle',
  templateUrl: './conferencista-detalle.component.html',
  styleUrls: ['./conferencista-detalle.component.css']
})

export class ConferencistaDetalleComponent implements OnInit {

  public conferencistas: Conferencista[] = [
    new Conferencista(15415, "Jon Aizpúrua", "conferencista1@email.com", "Breve descripción de quien es y en que se destaca" ),
    new Conferencista(25456, "Victor Da Silva", "conferencista2@email.com", "Breve descripción de quien es y en que se destaca"),
    new Conferencista(3564, "Jesús Briceño", "conferencista3@email.com", "Breve descripción de quien es y en que se destaca"),
    new Conferencista(456465, "Felix Vega", "conferencista4@email.com", "Breve descripción de quien es y en que se destaca"),
  ];

  conferencista: Conferencista;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.conferencistas.forEach((p: Conferencista) => {
      //   if (p.id == params.id) {
      //     this.conferencista = p;
      //   }
      // });
      this.conferencista = this.conferencistas[params.id];
    });
  }

  

}
