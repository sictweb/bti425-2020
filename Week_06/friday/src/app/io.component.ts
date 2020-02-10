import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent implements OnInit {

  constructor() { 
    //this.myName = 'Peter';
  }

  myName: String;

  ngOnInit() {
  }

}
