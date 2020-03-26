import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardAuthService implements CanActivate {

  // Initialization

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  // Methods

  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      // The following assumes that you have a route named "login"
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
