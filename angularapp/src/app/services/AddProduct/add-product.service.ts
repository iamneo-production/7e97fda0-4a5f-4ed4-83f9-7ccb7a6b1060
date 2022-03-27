import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../Url';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }
  addProduct(product: any){
    return this.http.post(`${baseUrl}/admin/addProduct`, product);
  }
}
