import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Url';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  product: any;
  constructor(private http: HttpClient) { }

  setProduct(data: any){
    this.product = data;
  }

  getProduct(){
    return this.product;
  }

  //Add the product to Cart
  addBookToCart(id:any, data:any){
    return this.http.post(`${baseUrl}/home/${id}`, data);
  }
}
