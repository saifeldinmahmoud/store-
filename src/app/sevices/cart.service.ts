import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart, cartitem } from '../commpanat/header/header/modeles/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<cart>({ items: [] });
  constructor(private _snakbar: MatSnackBar) { }
  addtocart(item: cartitem): void {
    const items = [...this.cart.value.items];
    const itemincart = items.find((_item) => _item.id === item.id);
    if (itemincart) {
      itemincart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this._snakbar.open('1 item add to cart', 'ok', { duration: 3000 });
  }
  removequantity(item: cartitem): void{
    let itetemremoval: cartitem | undefined;
    let filteritems= this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itetemremoval = _item;
        }
      }
      return _item;
    })
    if (itetemremoval) {
    filteritems =  this.removefromcart(itetemremoval,false);
    }
    this.cart.next({items:filteritems})
    this._snakbar.open('1 item removed from cart','ok',{duration:3000})
  }

  gettoltal(items: Array<cartitem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  clearcart(): void {
    this.cart.next({ items: [] });
    this._snakbar.open('cart is cleared', 'ok', { duration: 3000 });
  }
  removefromcart(item: cartitem,update=true): Array<cartitem> {
    const fillteritems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if(update){this.cart.next({ items: fillteritems });
      this._snakbar.open('1 item removed from cart.', 'ok', { duration: 3000 });
    }
return fillteritems
  }
}
