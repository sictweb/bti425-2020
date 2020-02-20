import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { Router } from "@angular/router";

// Data model classes for the form...

// Describes the form properties for a vehicle
class FormAddVehicle {
  make: string;
  model: string;
  year: number;
  msrp: number;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  // Properties

  // Data that will be sent to and submitted from the form
  vehicle: FormAddVehicle;

  // Displays error text beside the buttons
  formError: string;

  // Initialization

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit() {
    // Initialize the object that will be sent to the form
    this.vehicle = new FormAddVehicle();
    // Can initialize some properties too if desired
    this.vehicle.photo = "https://placekitten.com/200/100";
  }

  // Actions

  save() {

    this.formError = null;

    // Make sure we have good data (quick and easy way without form validation)
    // All fields must be non-null
    if (this.vehicle.make && this.vehicle.model && this.vehicle.year && this.vehicle.msrp && this.vehicle.photo && this.vehicle.description) {
      
    // Send the request...
    // The "vehicleAdd" method needs a "Vehicle object"
    // We didn't collect one, so...
    // Temporarily assign a nonsense value for the "id" property 
    // by using the object mapping technique, enabled by the JavaScript object spread syntax
    let result = this.m.vehicleAdd({id: 0, ...this.vehicle});
    // Note that there are other ways to handle this
    // One way is to declare another optional property in the FormAddVehicle class:
    // id?: number;
    // Another is to declare the "id" property as optional in the main data model class

    // Here we can do whatever tasks we need to do
    // In a real app, we must redirect to fulfill the PRG pattern
    this.router.navigate(['/vehicles/detail', result.id]);
    }
    else {
      this.formError = "Data entry error - all fields are required";
    }

  }

}
