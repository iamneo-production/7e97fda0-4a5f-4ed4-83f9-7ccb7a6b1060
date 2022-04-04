import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/AuthGuard/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { ModelComponent } from './model/model.component';
import {ProductEditComponent } from './admin/product-edit/product-edit.component'

const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
  },
  {
    path:"signup",
    component: SignupComponent,
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"admin",
    component: DashboardComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"admin/addProduct",
    component: AddproductComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"orders",
    component: UserOrderComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"cart/:id",
    component: CartComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"home/getProduct/:id",
    component: ModelComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"admin/productEdit/:id",
    component: ProductEditComponent,
    canActivate:[AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
