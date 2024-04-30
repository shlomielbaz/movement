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
    return this.http.get(`${Constants.SERVER_URL}/api/users/${id}`);
  }

  geyUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${Constants.SERVER_URL}/api/users`);
  }

  updateUser(payload: IUser): void {
    this.http.put(`${Constants.SERVER_URL}/api/users`, payload);
  }

  addUser(payload: IUser): void {
    this.http.post(`${Constants.SERVER_URL}/api/users`, payload);
  }

  delUser(id: number): void {
    this.http.delete(`${Constants.SERVER_URL}/api/users/${id}`);
  }
}
