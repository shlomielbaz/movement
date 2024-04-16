import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  geyUsers() {
    return this.http.get(`${Constants.SERVER_URL}/users`);
  }
}
