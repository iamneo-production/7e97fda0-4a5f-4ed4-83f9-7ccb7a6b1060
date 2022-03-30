import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Url';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  id:any;
  product: any;
  
  constructor(private http: HttpClient) { }

  editSingleProductDetails(id:any, data: any) {
    return this.http.post(`${baseUrl}/admin/productEdit/${id}`, data);
  }

  deleteProduct(id: any){
    return this.http.get(`${baseUrl}/admin/delete/${id}`);
  }

  setId(data: any){
    this.id = data;
  }

  getId(){
    return this.id;
  }

  setProduct(data: any){
    this.product = data;
  }

  getProduct(){
    return this.product;
  }
}
