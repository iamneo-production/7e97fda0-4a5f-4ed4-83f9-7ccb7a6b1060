import { Component, OnInit } from '@angular/core';
import { EditProductService } from '../../services/EditProduct/edit-product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar,private edit: EditProductService) { }

  product = {
    imageUrl:'',
    productName:'',
    price:'',
    description:'',
    quantity:''
  }

  id:any;
  
  ngOnInit(): void {
    this.id = this.edit.getId();
    this.product = this.edit.getProduct();
    console.log(this.product);
  }

  //Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  //Form validation
  formSubmit(){
    if(this.product.imageUrl == '' || this.product.productName == '' || this.product.price == '' || this.product.description == '' || this.product.quantity == ''){
      this.openSnackBar('Empty input fields','X');
      return;
    }
    this.editProductFormData(this.product);
  }

  //Editing the Product
  editProductFormData(productData: any){
    this.edit.editSingleProductDetails(this.id, productData).subscribe((result) => {
      this.openSnackBar('Edits Saved Successfully','X');
    })
  }
}
