import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { cart, cartitem } from './modeles/cart.model';
import { CartService } from '../../../sevices/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatBadgeModule, CurrencyPipe, RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private _cart: cart = { items: [] };
  itemsquantity = 0;

  @Input()
  get cart(): cart {
    return this._cart;
  }
  set cart(cart: cart) {
    this._cart = cart;
    this.itemsquantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartservices: CartService) {}

  ngOnInit(): void {
    this.cartservices.cart.subscribe((updatedCart: cart) => {
      this.cart = updatedCart;
    });
  }

  gettotal(items: Array<cartitem>): number {
    return this.cartservices.gettoltal(items);
  }

  onclearcart() {
    this.cartservices.clearcart();
  }
}
