import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { MembersComponent } from './members.component';
import { MemberdetailComponent } from './memberdetail.component';
import { MembercreateComponent } from './membercreate.component';
import { CustomMinNumberDirective } from './custom-min-number.directive';
import { CustomMaxNumberDirective } from './custom-max-number.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MembersComponent,
    MemberdetailComponent,
    MembercreateComponent,
    CustomMinNumberDirective,
    CustomMaxNumberDirective
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
