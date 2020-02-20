import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { VehicleEditComponent } from './vehicle-edit.component';
import { VehicleDeleteComponent } from './vehicle-delete.component';
import { VehicleCreateComponent } from './vehicle-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleEditComponent,
    VehicleDeleteComponent,
    VehicleCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
