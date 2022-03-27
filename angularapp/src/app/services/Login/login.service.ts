import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../Url';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }

  checkUser(data: any) {
    return this.http.post(`${baseUrl}/login`, data);
  }
}
