import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { Vehicle } from "./data-classes";

// Enables access to the route / URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  // Initialization 

  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit() {

    // Extract the identifier from the URL
    this.id = this.route.snapshot.paramMap.get("id");

    // The following is only one of several ways
    // to convert a string to a number (do your own research)
    // Fetch the requested vehicle object
    this.vehicle = this.m.vehicleGetById(Number(this.id));
  }

  // Properties
  vehicle: Vehicle;
  id: string;

}
