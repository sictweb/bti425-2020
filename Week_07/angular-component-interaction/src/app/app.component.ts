import { Component } from '@angular/core';
import { Professor } from "./data-model-classes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-interaction';

  courseName: string;

  enrolledStudentCount: number;

  professors: Professor[];

  constructor() {

    this.courseName = "BTI425 - Web Programming for Apps and Services";

    this.enrolledStudentCount = 90;

    this.professors = [
      { name: "Peter McIntyre", age: 45 },
      { name: "Tanvir Alam", age: 35 }
    ];

  }
}
