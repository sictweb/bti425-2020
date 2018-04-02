import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Properties
  testRange: number;

  constructor() {

    this.testRange = 12;
  }

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Peter McIntyre",
      points: null,
      birthDate: new Date,
      email: '',
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"],
      favouriteTransportation: "M",
      driverLicence: true,
      vehicleUse: "pleasure" // if empty string, can add required attribute to all radios in the group
    };

  }

  title = 'Forms v1';

  // Properties

  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: SelectListOption[] = [
    { value: "C", text: "Car" },
    { value: "B", text: "Bus" },
    { value: "M", text: "Motorcycle" },
    { value: "H", text: "Helicopter" }
  ];

  // Methods

  onSubmit(): void {

    // Can do whatever here

    console.log(this.driverData);
  }

}

export class Driver {
  name: string;
  points: number;
  birthDate: Date;
  email: string;
  description: string;
  ownedTransportation: string[];
  favouriteTransportation: string;
  driverLicence: boolean;
  vehicleUse: string;
}

export class SelectListOption {
  value: string;
  text: string;
}
