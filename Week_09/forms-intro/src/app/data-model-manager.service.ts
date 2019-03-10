import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { ReqresUser, ReqresUserCollectionPackage, ReqresUserSinglePackage } from "./data-model-classes";
//import { Class1, Class2 } from "./data-model-classes";

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {
  
  constructor(private http: HttpClient) { }

  // URL to the example reqres.in web service
  private urlReqres: string = "https://reqres.in/api/users";

  // Edit the base URL string to the web service
  private url: string = "https://host.example/com/api/";

  // Data service operations

  // Get all
  reqresUserGetAll(): Observable<ReqresUserCollectionPackage> {
    return this.http.get<ReqresUserCollectionPackage>(`${this.urlReqres}?per_page=8`);
  }

  // Get one
  reqresUserGetById(id: number): Observable<ReqresUserSinglePackage> {
    return this.http.get<ReqresUserSinglePackage>(`${this.urlReqres}/${id}`);
  }

}



/*
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Person, PersonAdd } from "./dataModelClasses";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://pam-2019-a1webapi.herokuapp.com/api/persons';

  // Get all
  personsGetAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  // Get one
  personsGetById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.url}/${id}`);
  }

  // Not fully implemented
  personsAddNew(newItem: PersonAdd) {
    console.log('in manager');
    console.log(newItem);

  }
}
*/