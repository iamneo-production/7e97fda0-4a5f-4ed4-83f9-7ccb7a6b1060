import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/Home/home.service';
import {ModelService} from '../services/Model/model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

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

  //Retrieving All Books
  bookDetails = (data: any) => {
    for(let i=0;i<this.AllproductDetails.length;i++) {
      if(this.AllproductDetails[i].productName === data){
        this.id = this.AllproductDetails[i].productId;
      }
    }
    this.userData.getProductSingleDetails(this.id).subscribe((result) => {
      if(result != null){
        this.productData.setProduct(result);
        this.router.navigate(['home/getProduct', this.id])
      }
    })
  }

}
