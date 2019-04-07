import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

import { map } from 'rxjs/operators';
import { Credentials } from './login.component';

@Injectable()
export class AuthService {

  // Properties

  private url: string = 'https://your-web-api.herokuapp.com/';

  // Initialization

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  // Methods

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    if (token) {
      console.log('token exists');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  login(credentials: Credentials): Observable<any> {

    // Uncomment if you want to see the passed-in credentials
    // console.log(credentials);

    // Attempt to login
    // ##### EDIT the following to match the path to your web API login resource
    return this.http.post<any>(`${this.url}login`, credentials);
  }

}
