import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Url';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  //Get all Products
  getProductDetails = () => {
    return this.http.get(`${baseUrl}/home`);
  }

  //Get only single Product
  getProductSingleDetails(id:any) {
    return this.http.get(`${baseUrl}/home/getProduct/${id}`);
  }
}
