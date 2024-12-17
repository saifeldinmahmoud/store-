import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart, cartitem } from '../commpanat/header/header/modeles/cart.model'; // تأكد من المسار الصحيح للـ cart.model
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // BehaviorSubject يستخدم لتخزين الحالة الحالية للسلة وإعلام المكونات بها
  private _cart = new BehaviorSubject<cart>({ items: [] });
  cart = this._cart.asObservable(); // ملاحظة: cart يتم الوصول إليه بواسطة الاشتراك

  constructor(private _snakbar: MatSnackBar) {}

  // إضافة منتج إلى السلة
  addtocart(item: cartitem): void {
    const items = [...this._cart.value.items]; // الحصول على نسخة من السلة الحالية
    const itemincart = items.find((_item) => _item.id === item.id); // البحث عن المنتج في السلة

    if (itemincart) {
      itemincart.quantity += 1; // إذا كان المنتج موجوداً، زيادة الكمية
    } else {
      items.push(item); // إذا لم يكن موجوداً، إضافته
    }

    this._cart.next({ items }); // تحديث السلة
    this._snakbar.open('1 item added to cart', 'Ok', { duration: 3000 }); // إظهار إشعار
  }

  // إزالة منتج من السلة
  removefromcart(item: cartitem, update = true): Array<cartitem> {
    const updatedItems = this._cart.value.items.filter(
      (_item) => _item.id !== item.id
    ); // إزالة المنتج من السلة

    if (update) {
      this._cart.next({ items: updatedItems }); // تحديث السلة
      this._snakbar.open('1 item removed from cart.', 'Ok', { duration: 3000 }); // إظهار إشعار
    }

    return updatedItems; // إرجاع السلة بعد التحديث
  }

  // إزالة الكمية للمنتج
  removequantity(item: cartitem): void {
    let itemToRemove: cartitem | undefined;
    const updatedItems = this._cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemToRemove = _item;
        }
      }
      return _item;
    });

    if (itemToRemove) {
      this.removefromcart(itemToRemove, false); // إذا كانت الكمية 0، إزالة المنتج من السلة
    }

    this._cart.next({ items: updatedItems }); // تحديث السلة
    this._snakbar.open('1 item removed from cart', 'Ok', { duration: 3000 }); // إظهار إشعار
  }

  // إرجاع إجمالي السعر للسلة
  gettoltal(items: Array<cartitem>): number {
    return items
      .map((item) => item.price * item.quantity) // ضرب السعر في الكمية
      .reduce((prev, current) => prev + current, 0); // جمع الإجماليات
  }

  // مسح السلة
  clearcart(): void {
    this._cart.next({ items: [] }); // إعادة السلة إلى حالتها الفارغة
    this._snakbar.open('Cart is cleared', 'Ok', { duration: 3000 }); // إظهار إشعار
  }
}
