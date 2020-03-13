import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// Updated...
import { Observable, of } from 'rxjs';
// New...
import { catchError, tap } from "rxjs/operators";

import { ReqresUser, ReqresUserCollectionPackage, ReqresUserSinglePackage, ReqresUserCreate, ReqresUserCreateResponse } from "./data-model-classes";
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

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Data service operations

  // Get all
  reqresUserGetAll(): Observable<ReqresUserCollectionPackage> {
    return this.http.get<ReqresUserCollectionPackage>(`${this.urlReqres}?per_page=8`);
  }

  // Get one
  reqresUserGetById(id: number): Observable<ReqresUserSinglePackage> {
    return this.http.get<ReqresUserSinglePackage>(`${this.urlReqres}/${id}`);
  }

  // Add new
  reqresUserAdd(newItem: ReqresUserCreate): Observable<ReqresUserCreateResponse> {
    return this.http.post<ReqresUserCreateResponse>(this.urlReqres, newItem, this.httpOptions)
      .pipe(
        tap((newItem: ReqresUserCreateResponse) => console.log(`Added item ${newItem.name}`)),
        catchError(this.handleError<ReqresUserCreateResponse>('User add'))
      );
  }

  // Edit existing
  reqresUserEdit(id: number, newItem: ReqresUserCreate): Observable<ReqresUserCreateResponse> {
    return this.http.put<ReqresUserCreateResponse>(`${this.urlReqres}/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: ReqresUserCreateResponse) => console.log(`Edited item ${newItem.name}`)),
        catchError(this.handleError<ReqresUserCreateResponse>('User edit'))
      );
  }

  // Delete item
  reqresUserDelete(id: number) {
    return this.http.delete(`${this.urlReqres}/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('User delete'))
      );
  }

}
