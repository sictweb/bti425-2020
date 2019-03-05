import { Component, OnInit } from '@angular/core';
import { Person } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  // Property to hold the data fetched from the web service
  persons: Person[];

  // Notice the injected service
  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    /*
    this.m.personsGetAll().subscribe(p => {
      console.log(p);
      this.persons = p;
    });
    */

    // Call the service method
    // Extract the data from the returned Observable<Person[]> 
    this.m.personsGetAll().subscribe(p => this.persons = p);

  }

}
