import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<IUser> {
    return this.http.get(`${Constants.SERVER_URL}/users/${id}`);
  }

  geyUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${Constants.SERVER_URL}/users`);
  }

  updateUser(payload: IUser): void {
    this.http.put(`${Constants.SERVER_URL}/users`, payload);
  }

  addUser(payload: IUser): void {
    this.http.post(`${Constants.SERVER_URL}/users`, payload);
  }

  delUser(id: number): void {
    this.http.delete(`${Constants.SERVER_URL}/users/${id}`);
  }
}
