import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AddProductService } from '../../services/AddProduct/add-product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private userData: AddProductService) { }
  product = {
    imageUrl:'',
    productName:'',
    price:'',
    description:'',
    quantity:''
  }
  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  formSubmit(){
    if(this.product.imageUrl == '' || this.product.productName == '' || this.product.price == '' || this.product.description == '' || this.product.quantity == ''){
      this.openSnackBar('Empty input fields','X');
      return;
    }
    this.addProductFormData(this.product);

  }

  addProductFormData(product: any){
    this.userData.addProduct(product).subscribe((result) => {
      if(result != null)
      {
        this.openSnackBar('Product Added Successfully','X');
      }
      else{
        this.openSnackBar('Unable to add product','X');
      }
      // console.warn(result);
    })
  }
}
