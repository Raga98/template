import { Component, OnInit } from '@angular/core';
import { Conferencista } from "../../models/conferencistas"

@Component({
  selector: 'conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css']
})
export class ConferencistasComponent implements OnInit {

  public conferencistas: Conferencista[] = [
    new Conferencista(1, "Jon Aizpúrua", "conferencista1@email.com", "Breve descripción de quien es y en que se destaca" ),
    new Conferencista(2, "Victor Da Silva", "conferencista2@email.com", "Breve descripción de quien es y en que se destaca"),
    new Conferencista(3, "Jesús Briceño", "conferencista3@email.com", "Breve descripción de quien es y en que se destaca"),
    new Conferencista(4, "Felix Vega", "conferencista4@email.com", "Breve descripción de quien es y en que se destaca"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
