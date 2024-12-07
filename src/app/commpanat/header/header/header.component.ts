import { Component, Input,   } from '@angular/core';
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
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cart, cartitem } from './modeles/cart.model';
import { CartService } from '../../../sevices/cart.service';
@Component({
    selector: 'app-header',
    imports: [
        MatGridListModule,
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
        CurrencyPipe,
        RouterModule,
        CommonModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
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
  constructor(private cartservices: CartService) { }
  gettotal(items: Array<cartitem>): number {
    return this.cartservices.gettoltal(items);
  }
  onclearcart() {
    this.cartservices.clearcart()
  }
}
