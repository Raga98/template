import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { InicioComponent } from "./inicio/inicio.component";
import { ContentComponent } from './content/content.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ConferencistasComponent } from './conferencistas/conferencista/conferencistas.component';

import { ConozcanosComponent } from './conozcanos/conozcanos.component';

import { CursosComponent } from './cursos/cursos.component';

import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { BiografiasComponent } from './biografias/biografias.component';
import { GrafiasComponent } from './grafias/grafias.component';
import { VideosComponent } from './videos/videos.component'; // No usado

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ArticuloDashComponent } from './articulo-dash/articulo-dash.component';
import { ContenidoDashComponent } from './contenido-dash/contenido-dash.component';
import { ConferenciasDashComponent } from './conferencias-dash/conferencias-dash.component';
import { ConferencistasDashComponent } from './conferencistas-dash/conferencistas-dash.component';
import { VideosDashComponent } from './videos-dash/videos-dash.component';
import { LibrosDashComponent } from './libros-dash/libros-dash.component';
import { BiografiasDashComponent } from './biografias-dash/biografias-dash.component';

import { EditComponent } from './edit/edit.component';
import { ConferencistaDetalleComponent } from "./conferencistas/conferencista-detalle/conferencista-detalle.component";

  const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    // { path: 'content', component: ContentComponent },
    // { path: 'noticias', component: NoticiasComponent },
    { path: 'articulos/:title', component: ArticulosComponent },
    // { path: 'conferencias', component: ConferenciasComponent },
    // { path: 'conferencistas', component: ConferencistasComponent },
    { path: 'conozcanos', component: ConozcanosComponent },
    { path: 'cursos', component: CursosComponent },
    // { path: 'libros', component: LibrosComponent },
    { path: 'libro', component: LibroComponent },
    { path: 'biblioteca', component: BibliotecaComponent },
    // { path: 'conferencista-detalle', component: ConferencistaDetalleComponent },
    { path: "conferencista/:id", component: ConferencistaDetalleComponent },
    // { path: 'biografias', component: BiografiasComponent },
    { path: 'grafias', component: GrafiasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'articulo-dash', component: ArticuloDashComponent },
    { path: 'contenido-dash', component: ContenidoDashComponent },
    { path: 'conferencias-dash', component: ConferenciasDashComponent },
    { path: 'conferencistas-dash', component: ConferencistasDashComponent },
    { path: 'edit', component: EditComponent },
    { path: 'videos-dash', component: VideosDashComponent },
    { path: 'libros-dash', component: LibrosDashComponent },
    { path: 'biografias-dash', component: BiografiasDashComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}