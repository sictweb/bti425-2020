import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
//import { Observable } from "rxjs";
import { Post, Comment, /*Geo, Address, Company,*/ User } from "./data-classes";

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {

  constructor(private m: DataManagerService) { }

  // Properties for the class
  posts: Post[];
  comments: Comment[];
  users: User[];

  ngOnInit() {

    // Just take ten (10) of them 

    // Fetch posts...
    this.m.getPosts().subscribe(response => this.posts = response.slice(0, 10));

    // Fetch comments...
    this.m.getComments().subscribe(response => this.comments = response.slice(0, 10));

    // Fetch users...
    this.m.getUsers().subscribe(response => this.users = response.slice(0, 10));
  }

}
