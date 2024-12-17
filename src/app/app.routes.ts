import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';  // تأكد من المسار الصحيح

import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';
import { AddProductComponent } from '../admin/add-product/add-product.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pay', component: PaypalButtonComponent },
  { path: 'log', component: LoginComponent },
  { path: 'add', component: AddProductComponent } , // صفحة إضافة المنتج

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
