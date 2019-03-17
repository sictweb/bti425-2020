import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { UserCreateComponent } from './user-create.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserDeleteComponent } from './user-delete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/delete/:id', component: UserDeleteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
