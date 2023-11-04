import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'https://my-json-server.typicode.com/WirisWernek/digital-business-card-frontend/user';
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<UserModel>(this.URL);
  }
}
