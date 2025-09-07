import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router) {}
   canActivate(): boolean |  UrlTree{
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
     return this.router.createUrlTree(['/incidents/login']);
    }
  }
}
