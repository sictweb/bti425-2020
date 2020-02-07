import { Component, OnInit } from '@angular/core';
import { Customer } from "./customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() {
    this.selectedCust = new Customer();
  }

  ngOnInit() {
  }

  // Methods

  selectRow(c: Customer) {
    this.selectedCust = c;
  }

  // Properties

  // A customer that was selected in the table
  selectedCust: Customer;

  // The data we want to display
  customers: Customer[] = [{ "id": 1, "firstname": "Ana", "lastname": "Lawfull", "city": "Strasbourg", "email": "alawfull0@imgur.com", "website": "http://nsw.gov.au/sed/accumsan.json", "birthdate": "1996-03-19T09:05:56Z", "credits": 6938 },
  { "id": 2, "firstname": "Ondrea", "lastname": "Nuth", "city": "Nāgarpur", "email": "onuth1@last.fm", "website": "http://usa.gov/aliquet.xml", "birthdate": "1997-03-02T14:08:54Z", "credits": 4032 },
  { "id": 3, "firstname": "Audy", "lastname": "Goschalk", "city": "Cengang", "email": "agoschalk2@independent.co.uk", "website": "https://businessinsider.com/elit/sodales.json", "birthdate": "1991-07-06T00:26:27Z", "credits": 3529 },
  { "id": 4, "firstname": "Barty", "lastname": "Nan Carrow", "city": "Lazarevskoye", "email": "bnancarrow3@nytimes.com", "website": "http://tripadvisor.com/integer/non/velit/donec.js", "birthdate": "1994-07-27T03:46:32Z", "credits": 3140 },
  { "id": 5, "firstname": "Wally", "lastname": "Blackboro", "city": "Slobodnica", "email": "wblackboro4@vkontakte.ru", "website": "http://reddit.com/elementum/nullam.jpg", "birthdate": "1997-01-24T20:06:18Z", "credits": 7359 },
  { "id": 6, "firstname": "Gorden", "lastname": "Acland", "city": "Amparafaravola", "email": "gacland5@reference.com", "website": "http://google.com.br/morbi/sem.aspx", "birthdate": "1997-09-11T21:42:21Z", "credits": 3156 },
  { "id": 7, "firstname": "Zola", "lastname": "Veldstra", "city": "Wenjī", "email": "zveldstra6@studiopress.com", "website": "https://engadget.com/quis/turpis.jsp", "birthdate": "1993-06-22T12:56:39Z", "credits": 5996 },
  { "id": 8, "firstname": "Anastasia", "lastname": "Camis", "city": "Wolofeo", "email": "acamis7@bandcamp.com", "website": "http://noaa.gov/at.jpg", "birthdate": "1997-12-22T07:38:44Z", "credits": 3744 }];
}
