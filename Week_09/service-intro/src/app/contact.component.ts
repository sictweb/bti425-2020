import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Create a "Student" object
  s: Student = { name: "Firstname Lastname", id: "123 456 789", city: "Toronto" };

  constructor() { }

  ngOnInit() { }

}

class Student {
  name: string;
  id: string;
  city: string;
}
