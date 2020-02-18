import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';
import { ChildThreeComponent } from './child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
