import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: '**', redirectTo: '/content', pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    /*  { enableTracing: true } // <-- debugging purposes only*/
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
