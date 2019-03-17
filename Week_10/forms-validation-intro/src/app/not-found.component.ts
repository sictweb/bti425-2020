import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  // For the UI
  requestedResourcePath: string;

  constructor(private r: ActivatedRoute) { 

    // Extract the requested resource path to show it in the UI
    this.r.url.subscribe(u => this.requestedResourcePath = u.join('/'));
  }

  ngOnInit() {
  }

}
