import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Url';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  saveUser(data: any){
    return this.http.post(`${baseUrl}/signup`, data);
  }
}
