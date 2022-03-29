import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/Home/home.service';
import {ModelService} from '../../services/Model/model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productDetails:any;
  AllproductDetails = [{
    productId:'',
    imageUrl:'',
    productName:'',
    price:'',
    description:'',
    quantity:''
  }]
  id = '';
  constructor(private http: HttpClient, private router: Router, private userData: HomeService, private productData: ModelService) { }

  ngOnInit(): void {
    this.userData.getProductDetails().subscribe((data: any) =>{
      this.productDetails = data;
      console.log(this.productDetails);
      this.AllproductDetails = this.productDetails;
    })
  }

}
