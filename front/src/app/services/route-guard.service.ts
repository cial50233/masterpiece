import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: AuthenticationService,
    private router: Router) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean // | Observable<boolean> | Promise<boolean>
  {
    // isLoggedIn method is a getter returning a boolean
    return this.authService.isLogged();
  }

}
