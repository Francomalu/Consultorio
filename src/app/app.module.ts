import { BrowserModule } from '@angular/platform-browser';


// Modulos
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
