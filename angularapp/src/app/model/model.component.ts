import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {ModelService} from '../services/Model/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  product:any;
  email:any;
  cartDetails={
    productId:'',
    userId:'',
    productName:'',
    quantity:'',
    price:''
  }
  constructor(private _snackBar: MatSnackBar, private productData: ModelService,  private router: Router) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit(): void {
    this.product = this.productData.getProduct();
    console.log(this.product);
    this.email = localStorage.getItem('email');
    this.cartDetails.productId = this.product.productId;
    this.cartDetails.userId = this.email;
    this.cartDetails.productName = this.product.productName;
    this.cartDetails.quantity = "1";
    this.cartDetails.price = this.product.price;
  }
  
  //Adding the Product to cart
  addToCart(){
    console.log(this.cartDetails.productId);
    this.productData.addBookToCart(this.email, this.cartDetails).subscribe((result) => {
      if(result != null){
        this.openSnackBar('Added to cart','X');
        this.router.navigate(['home/cart', this.email])
      }
    })
  }

  //Place an Order
  placeOrder(){

  }
}
