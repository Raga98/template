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
import {initializeApp, database} from 'firebase';
import {FormsModule} from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { ConozcanosComponent } from './conozcanos/conozcanos.component';
import { CursosComponent } from './cursos/cursos.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
