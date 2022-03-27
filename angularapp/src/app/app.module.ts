import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistnavComponent } from './admin/productlistnav/productlistnav.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductlistnavComponent,
    ProductlistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
