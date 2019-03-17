import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresUser } from "./data-model-classes";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // reqres.in web service data
  users: ReqresUser[];
  user: ReqresUser;

  constructor(private m: DataModelManagerService, private route: ActivatedRoute) { }

  ngOnInit() {

    // Get the route parameter
    let id = this.route.snapshot.params['id'];

    // Get one user, with identifier from above
    // The user is in the "data" property
    this.m.reqresUserGetById(id).subscribe(u => this.user = u.data);
  }

}
