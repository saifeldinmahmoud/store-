import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  cart,
  cartitem,
} from '../../commpanat/header/header/modeles/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../sevices/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { NgxPayPalModule } from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    CommonModule,
    RouterModule,
    CurrencyPipe,
    NgxPayPalModule,

  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: cart = {
    items: [
      {
        proudct: ' https://placehold.co/120',
        name: 'hohoz',
        price: 7,
        quantity: 1,
        id: 100,
      },
      {
        proudct: 'https://placehold.co/120',
        name: 'hohoz',
        price: 7,
        quantity: 1,
        id: 101,
      },
    ],
  };
  datasource: Array<cartitem> = [];
  displaycolumnes: Array<string> = [
    'proudct',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  payPalConfig: any;
  constructor(private cartservices: CartService, private http: HttpClient) {}
  ngOnInit(): void {
    this.cartservices.cart.subscribe((_cart: cart) => {
      this.cart = _cart;
      this.datasource = this.cart.items;
    });
  }
  gettoltal(items: Array<cartitem>): number {
    return this.cartservices.gettoltal(items);
  }
  onclearcart(): void {
    this.cartservices.clearcart();
  }
  onremovefromcart(item: cartitem): void {
    this.cartservices.removefromcart(item);
  }
  onaddquantity(item: cartitem): void {
    this.cartservices.addtocart(item);
  }
  onremovequantity(item: cartitem): void {
    this.cartservices.removequantity(item);
  }
}
