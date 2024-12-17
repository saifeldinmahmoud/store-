import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  cart,
  cartitem,
} from '../../commpanat/header/header/modeles/cart.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../sevices/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterModule, FormsModule],
  providers: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: cart = {
    items: [
      {
        product: 'http://via.placeholder.com/120',
        name: 'test1',
        price: 160,
        quantity: 1,
        id: 1,
      },
      {
        product: 'http://via.placeholder.com/120',
        name: 'test2',
        price: 180,
        quantity: 1,
        id: 2,
      },
    ],
  };
  datasource: Array<cartitem> = [];
  displatcoulms: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  isLoading = false; // Flag to show loading spinner
  total: number = 0; // Default value, will be updated with actual total

  constructor(private carti: CartService) {}

  ngOnInit(): void {
    this.carti.cart.subscribe((_cart: cart) => {
      this.cart = _cart;
      this.datasource = this.cart.items;
      this.updateTotal(); // Update total when cart is loaded or changed
    });
  }

  // Remove item from the cart
  removeItem(item: cartitem): void {
    this.carti.removefromcart(item);
  }

  // Increase the quantity of the item
  increaseQuantity(item: cartitem): void {
    item.quantity++;
    this.updateTotal(); // Update the total after increasing quantity
  }

  // Decrease the quantity of the item
  decreaseQuantity(item: cartitem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal(); // Update the total after decreasing quantity
    }
  }

  // Calculate total price
  updateTotal(): void {
    this.isLoading = true;
    this.total = this.getTotal(); // Recalculate the total immediately
    this.isLoading = false; // Hide loading spinner
  }

  // Get total price of the cart
  getTotal(): number {
    return this.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Format total with currency
  getFormattedTotal(): string {
    const currencyPipe = new CurrencyPipe('en-US');
    return currencyPipe.transform(this.total, 'USD')!;
  }
}
