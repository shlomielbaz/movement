import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, throwError } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogged$ = new Subject<boolean>();

  public get isLogged(): Observable<boolean> {
    return this._isLogged$;
  }

  public set isLogged(value: boolean) {
    this._isLogged$.next(value);
  }

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
    this.isLogged = false;
  }

  signIn(data: any) {
    localStorage.setItem('access_token', data.token);
    this.router.navigate(['users'], { replaceUrl: true });
    this.isLogged = true;
  }

  login(email: string, password: string) {
    return this.http
      .post(`${Constants.SERVER_URL}/auth/login`, {
        username: email,
        password: password,
      });
  }

  register(payload: IUser) {
    this.http
      .post(`${Constants.SERVER_URL}/auth/register`, payload)
      .subscribe((data: any) => {
        this.router.navigate(['login'], { replaceUrl: true });
      });
  }
}
