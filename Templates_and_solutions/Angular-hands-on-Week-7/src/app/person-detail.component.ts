import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Person } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  // Property to hold the identifier
  id: string;

  // Property to hold the data fetched from the web service
  person: Person;

  // Notice the injected router bit and the service
  constructor(private route: ActivatedRoute, private m: DataModelManagerService) { 

    // Initialize the property
    this.person = new Person();
  }

  ngOnInit() {
    
    // Get the identifier from the URL
    this.id = this.route.snapshot.paramMap.get("id");

    // Call the service method
    // Extract the data from the returned Observable<Person> 

    //this.m.personsGetById(this.id).subscribe(p => this.person = p);
    this.m.personsGetById(this.id).subscribe(p => {
      console.log(p);
      this.person = p;
    });
  }

}
