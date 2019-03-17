import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataModelManagerService } from './data-model-manager.service';
import { NgForm } from '@angular/forms';

import { ReqresUser, ReqresUserCreate, ReqresUserCreateResponse } from "./data-model-classes";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // Data-holding properties
  user: ReqresUser;
  newUser: ReqresUserCreate;
  newUserResult: ReqresUserCreateResponse;

  constructor(private m: DataModelManagerService, private route: ActivatedRoute, private router: Router) {

    // Define the user objects
    this.newUser = new ReqresUserCreate();
    this.newUserResult = new ReqresUserCreateResponse();
  }

  ngOnInit() {

    // Get the data to display on the form

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.m.reqresUserGetById(id).subscribe(u => {
      this.user = u.data;
      // Map the properties from one object to the other
      this.newUser.name = this.user.first_name;
      this.newUser.job = '';
    });
  }

  // Form submit button handler
  userSave(f: NgForm): void {

    // Send request
    this.m.reqresUserEdit(this.user.id, this.newUser).subscribe(u => this.newUserResult = u);

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Edited ${this.newUser.name} the ${this.newUser.job}`);
    // In a real app, we must redirect to fulfill the PRG pattern
    //this.router.navigate(['/users']);
  }

}
