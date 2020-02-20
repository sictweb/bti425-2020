import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { Vehicle } from "./data-classes";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private m: DataManagerService) { }

  ngOnInit() {
    // Fetch the data for all vehicles
    this.vehicles = this.m.vehicleGetAll();
  }

  vehicles: Vehicle[];

}
