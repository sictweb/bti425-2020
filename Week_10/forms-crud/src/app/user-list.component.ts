import { Component, OnInit } from '@angular/core';

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresUser } from "./data-model-classes";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // reqres.in web service data
  users: ReqresUser[];
  user: ReqresUser;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    // Get all users
    // The collection of users is in the "data" property
    this.m.reqresUserGetAll().subscribe(u => this.users = u.data);
  }

}
