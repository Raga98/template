import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, CanActivateChild} from '@angular/router';
import { User } from '../models/user';
import { Pubs } from '../models/pubs';
import { PubsService } from '../services/pubs.service';

@Component({
  selector: 'articulo-dash',
  templateUrl: './articulo-dash.component.html',
  styleUrls: ['./articulo-dash.component.css']
})
export class ArticuloDashComponent implements OnInit {

  user = {} as User;
  pubs = {} as Pubs;
  authState = null;

  parr: boolean

  constructor(public router: Router, private pubsService: PubsService) { }

  ngOnInit() {
  
  }

  parrafo() {
    this.parr = true;
  }

  createArticle(pubs: Pubs) {
    this.pubsService.addArticle(pubs);
  }

 /*updatePub() {
    this.pubsService.eeditPub(this.pubs);
 }*/

  // deletePub() {
  //   this.pubsService.deletePub(this.pubs);
  
  // }
}
