import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Url';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  id:any;
  constructor(private http: HttpClient) { }

  getCartDetails(id:any){
    return this.http.get(`${baseUrl}/cart/${id}`);
  }

  delete(id:any){
    return this.http.get(`${baseUrl}/cart/delete/${id}`);
  }
}
