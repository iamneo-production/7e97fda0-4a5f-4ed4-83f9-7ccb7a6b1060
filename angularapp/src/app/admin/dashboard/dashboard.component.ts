import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EditProductService } from 'src/app/services/EditProduct/edit-product.service';
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
  constructor(private _snackBar: MatSnackBar,private http: HttpClient, private router: Router, private edit: EditProductService, private userData: HomeService, private productData: ModelService) { }

  //Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit(): void {
    this.userData.getProductDetails().subscribe((data: any) =>{
      this.productDetails = data;
      console.log(this.productDetails);
      this.AllproductDetails = this.productDetails;
    })
  }

  bookDetails = (data: any) => {
    for(let i=0;i<this.AllproductDetails.length;i++) {
      if(this.AllproductDetails[i].productName === data){
        this.id = this.AllproductDetails[i].productId;
        this.edit.setProduct(this.AllproductDetails[i]);
        break;
      }
    }
    this.edit.setId(this.id);
    
    this.router.navigate(['admin/productEdit', this.id]);
     
  }

  deleteBook(data: any){
    for(let i=0;i<this.AllproductDetails.length;i++) {
      if(this.AllproductDetails[i].productName === data){
        this.id = this.AllproductDetails[i].productId;
        this.edit.setProduct(this.AllproductDetails[i]);
        break;
      }
    }

    this.edit.deleteProduct(this.id).subscribe(() => {
      this.openSnackBar('Deleted Successfully','X');
    })

  }
}
