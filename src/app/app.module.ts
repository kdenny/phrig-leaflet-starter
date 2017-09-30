import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapsComponent } from './pages/maps/maps.component';
import { HomeComponent } from './pages/home/home.component';

import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
