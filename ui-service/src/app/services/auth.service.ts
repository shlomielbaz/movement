import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  login(email: string, password: string) {
    this.http
      .post(`${Constants.SERVER_URL}/auth/login`, {
        username: email,
        password: password,
      })
      .subscribe((data: any) => {
        localStorage.setItem('access_token', data.token);

        this.router.navigate(['users'], { replaceUrl: true });
      });
  }
}
