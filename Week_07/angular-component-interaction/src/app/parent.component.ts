import { Component, OnInit, Input } from '@angular/core';
import { Professor } from './data-model-classes';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input()
  courseNameInParent: string;

  @Input()
  enrolledStudentCountInParent: number;

  @Input()
  professorsInParent: Professor[];

  constructor() { }

  ngOnInit() {
  }

}
