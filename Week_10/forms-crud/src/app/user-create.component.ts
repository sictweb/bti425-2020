import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from './data-model-manager.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { ReqresUser, ReqresUserCreate, ReqresUserCreateResponse } from "./data-model-classes";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // Data-holding properties
  newUser: ReqresUserCreate;
  newUserResult: ReqresUserCreateResponse;

  constructor(private m: DataModelManagerService, private router: Router) {

    // Define the user objects
    this.newUser = new ReqresUserCreate();
    this.newUserResult = new ReqresUserCreateResponse();
  }

  ngOnInit() { 

    // If required, go and get data that would be needed to render the form
  }

  // Form submit button handler
  userSave(f: NgForm): void {

    // Send request
    this.m.reqresUserAdd(this.newUser).subscribe(u => this.newUserResult = u);

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Added ${this.newUser.name} the ${this.newUser.job}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    //this.router.navigate(['/users']);
  }

}
