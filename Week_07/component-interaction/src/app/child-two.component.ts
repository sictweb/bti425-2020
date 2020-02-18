import { Component, OnInit, Input } from '@angular/core';
import { Professor } from './data-model-classes';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Input()
  professorsInChild2: Professor[];

  constructor() { }

  ngOnInit() {
    console.log(this.professorsInChild2);
  }

}
