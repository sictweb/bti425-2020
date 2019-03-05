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
