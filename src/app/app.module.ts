import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

// services
import { BarrioService } from './services/barrios.service';
import { BdService } from './services/bd.service';
import { GlobalService } from './services/globales.service';
import { LogueoService } from './services/logueo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    BarrioService,
    BdService,
    GlobalService,
    LogueoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
