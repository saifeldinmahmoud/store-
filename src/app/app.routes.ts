import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';
import { AdminComponent } from '../admin/website/admin/admin.component';
import { ProudctBoxComponent } from './pages/home/proudct-box/proudct-box.component';
import { EditproudctComponent } from '../admin/website/admin/editproudct/editproudct.component';
import { AddproudctComponent } from '../admin/website/admin/addproudct/addproudct.component';
import { ProudctComponent } from '../admin/website/admin/proudct/proudct.component';
import { ZarListComponent } from '../admin/zar/zar-list/zar-list.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'zar', component: ZarListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pay', component: PaypalButtonComponent },
  { path: 'log', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: 'edit', component: EditproudctComponent },
  { path: 'add', component: AddproudctComponent },
  { path: 'prod', component: ProudctComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
