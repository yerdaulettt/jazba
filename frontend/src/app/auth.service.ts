import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>('http://127.0.0.1:8000/api/login/', {'username': username, 'password': password})
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/signup/', {'username': username, 'password': password})
  }
}