import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:any;
  AllCartDetails = [{
    id: "",
    cartItemId: "",
    userId: "",
    productName: "",
    quantity: "",
    price: ""
  }]
  id:any;
  deleteProductId:any;
  
  constructor(private _snackBar: MatSnackBar, private cart: CartService) { 
    this.id = localStorage.getItem('email');
  }

  //Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  //Get All cart items
  ngOnInit(): void {
    console.log("cart id "+this.id);
    this.cart.getCartDetails(this.id).subscribe((data: any) =>{
      this.cartDetails = data;
      console.log(this.cartDetails);
      this.AllCartDetails = this.cartDetails;
    })
  }

  //Delete the cart Item
  deleteCartItem(productId:any){
    for(let i=0;i<this.AllCartDetails.length;i++) {
      if(this.AllCartDetails[i].id === productId){
        this.deleteProductId = this.AllCartDetails[i].id;
        break;
      }
    }

    this.cart.delete(this.deleteProductId).subscribe(() =>{
      this.openSnackBar('Successfully Deleted','X');
    })
  }

  //Place an Order
  placeOrder(){
    this.openSnackBar('Order Placed','X');
  }
}
