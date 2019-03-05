import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './about-me.component';
import { ContactMeComponent } from './contact-me.component';
import { NotFoundComponent } from './not-found.component';
import { NavMainComponent } from './nav-main.component';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactMeComponent,
    NotFoundComponent,
    NavMainComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
