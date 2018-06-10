import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  show = false;
  noShow = true;

  toggle() {
    this.show = !this.show;
    if ( this.show ) {
      this.noShow = false;
    } else {
      this.noShow = true;
    }
  }
}

/*function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}*/

