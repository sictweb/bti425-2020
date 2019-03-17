import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresUser } from "./data-model-classes";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private m: DataModelManagerService, private route: ActivatedRoute, private router: Router) { }

  // reqres.in web service data
  users: ReqresUser[];
  user: ReqresUser;

  ngOnInit() {

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.m.reqresUserGetById(id).subscribe(u => this.user = u.data);
  }

  // Form submit button handler
  userSave(f: NgForm): void {

    // Send request
    this.m.reqresUserDelete(this.user.id).subscribe();

    // Here we can do whatever tasks we need to do
    // For now, we'll just navigate back to the list
    console.log(`Deleted ${this.user.first_name} ${this.user.last_name}`);
    this.router.navigate(['/users']);
  }

}
