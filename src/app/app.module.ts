import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from 'angularfire2/storage';
import { initializeApp, database } from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Servicios
import { LoginService } from './services/login.service';
import { PubsService } from './services/pubs.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminService } from './services/admin.service';
import { FilesService } from './services/files.service';

// Componentes
import { ConozcanosComponent } from './conozcanos/conozcanos.component';
import { CursosComponent } from './cursos/cursos.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { VideosComponent } from './videos/videos.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { BiografiasComponent } from './biografias/biografias.component';
import { GrafiasComponent } from './grafias/grafias.component';
import { ArticuloDashComponent } from './articulo-dash/articulo-dash.component';
import { ContenidoDashComponent } from './contenido-dash/contenido-dash.component';
import { ConferenciasDashComponent } from './conferencias-dash/conferencias-dash.component';
import { ConferencistasDashComponent } from './conferencistas-dash/conferencistas-dash.component';
import { VideosDashComponent } from './videos-dash/videos-dash.component';
import { LibrosDashComponent } from './libros-dash/libros-dash.component';
import { BiografiasDashComponent } from './biografias-dash/biografias-dash.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditComponent } from './edit/edit.component';

//AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { EditorModule } from '@tinymce/tinymce-angular';//Editor WYSIWYG

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
    BiografiasComponent,
    GrafiasComponent,
    ArticuloDashComponent,
    ContenidoDashComponent,
    ConferenciasDashComponent,
    ConferencistasDashComponent,
    VideosDashComponent,
    LibrosDashComponent,
    BiografiasDashComponent,
    InicioComponent,
    LibroComponent,
    EditComponent,
  ],
  imports: [
    // RouterModule.forRoot(
    //   routes,
    // /*  { enableTracing: true } // <-- debugging purposes only*/
    // ),
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
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    AngularFireStorageModule
  ],
  providers: [LoginService, PubsService, AuthGuardService, AdminService, MatDialogModule, FilesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
