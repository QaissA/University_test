import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './Models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UniversityTestService {
  readonly userUrl = 'https://localhost:7119/api';
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')

    return this.http.post<User>(this.userUrl + '/User', user, { headers : httpHeaders});
  }
}
