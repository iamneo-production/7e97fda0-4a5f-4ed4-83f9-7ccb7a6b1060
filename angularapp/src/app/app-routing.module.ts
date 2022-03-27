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
  },
  {
    path:"admin/addProduct",
    component: AddproductComponent,
  },
  {
    path:"orders",
    component: UserOrderComponent,
  },
  {
    path:"cart",
    component: CartComponent,
  },
  {
    path:"home/getProduct/:id",
    component: ModelComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
