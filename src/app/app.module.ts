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
import { initializeApp, database } from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { VideosComponent } from './videos/videos.component';
import { LibrosComponent } from './libros/libros.component';
import { BibliografiasComponent } from './biografias/biografias.component';
import { GrafiasComponent } from './grafias/grafias.component';
import { PubsService } from './services/pubs.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminService } from './services/admin.service';
import { ArticuloDashComponent } from './articulo-dash/articulo-dash.component';
import { ContenidoDashComponent } from './contenido-dash/contenido-dash.component';
import { ConferenciasDashComponent } from './conferencias-dash/conferencias-dash.component';
import { ConferencistasDashComponent } from './conferencistas-dash/conferencistas-dash.component';
import { VideosDashComponent } from './videos-dash/videos-dash.component';
import { LibrosDashComponent } from './libros-dash/libros-dash.component';
import { BiografiasDashComponent } from './biografias-dash/biografias-dash.component';
//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { EditorModule } from '@tinymce/tinymce-angular';//Editor WYSIWYG
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'content', component: ContentComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'conferencias', component: ConferenciasComponent },
  { path: 'conferencistas', component: ConferencistasComponent },
  { path: 'conozcanos', component: ConozcanosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'articulo-dash', component: ArticuloDashComponent },
  { path: 'contenido-dash', component: ContenidoDashComponent },
  { path: 'conferencias-dash', component: ConferenciasDashComponent },
  { path: 'conferencistas-dash', component: ConferencistasDashComponent },
  { path: 'videos-dash', component: VideosDashComponent },
  { path: 'libros-dash', component: LibrosDashComponent },
  { path: 'biografias-dash', component: BiografiasDashComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
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
    VideosComponent,
    LibrosComponent,
    BibliografiasComponent,
    GrafiasComponent,
    ArticuloDashComponent,
    ContenidoDashComponent,
    ConferenciasDashComponent,
    ConferencistasDashComponent,
    VideosDashComponent,
    LibrosDashComponent,
    BiografiasDashComponent,
    InicioComponent,
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
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditorModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, PubsService, AuthGuardService, AdminService],
  bootstrap: [AppComponent],
})
export class AppModule { }
