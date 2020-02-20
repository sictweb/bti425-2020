import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { ContactComponent } from "./contact.component";
import { NotFoundComponent } from "./not-found.component";
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { VehicleEditComponent } from './vehicle-edit.component';
import { VehicleDeleteComponent } from './vehicle-delete.component';
import { VehicleCreateComponent } from './vehicle-create.component';
// import more components here

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/create', component: VehicleCreateComponent },
  { path: 'vehicles/detail/:id', component: VehicleDetailComponent },
  { path: 'vehicles/edit/:id', component: VehicleEditComponent },
  { path: 'vehicles/delete/:id', component: VehicleDeleteComponent },
  // more routes are added here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
