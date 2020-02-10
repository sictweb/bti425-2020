import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// These two were added by the Angular CLI generator
import { BodyComponent } from './body.component';
import { IoComponent } from './io.component';

// This app.module.ts has configuration settings for the app overall

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    IoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
