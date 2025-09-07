import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private tokenKey='auth_token';

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

    getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  login(token: string):void{
    localStorage.setItem('auth_token',token);
  }

   logout():void{
    localStorage.removeItem('auth_token');
  }

}
