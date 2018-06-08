import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";
import {initializeApp, database} from 'firebase';
import {FormsModule} from '@angular/forms';
import { ConozcanosComponent } from './conozcanos/conozcanos.component';
import { CursosComponent } from './cursos/cursos.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginService } from './services/login.service';
import { NoticiasComponent } from './noticias/noticias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';

const appRoutes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'conozcanos', component: ConozcanosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: '**', redirectTo: '/content', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    AdminComponent,
    ConozcanosComponent,
    CursosComponent,
    BibliotecaComponent,
    NoticiasComponent,
    ArticulosComponent,
    ConferencistasComponent,
    ConferenciasComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    /*  { enableTracing: true } // <-- debugging purposes only*/
    ),
    AngularFireModule.initializeApp(environment.firebase, 'template'),
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireAuthModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
