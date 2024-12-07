import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proudct } from '../commpanat/header/header/modeles/proudct.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpclint: HttpClient) {}

  // جلب جميع المنتجات مع تصحيح الفاصل بين المعاملات
  getAllProducts(
    limit = '24',
    sort = 'desc',
    category?: string
  ): Observable<Array<proudct>> {
    return this.httpclint.get<Array<proudct>>(
      `${STORE_BASE_URL}/products${
        category ? `/category/${category}` : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  // إضافة منتج جديد
  createProduct(product: proudct): Observable<proudct> {
    return this.httpclint.post<proudct>(
      'https://fakestoreapi.com/carts', // تأكد من أن هذا الرابط مخصص لإضافة منتج في الخادم المحلي
      product
    );
  }

  // جلب جميع الفئات (التصنيفات)
  getAllCategories(): Observable<Array<string>> {
    return this.httpclint.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
  getAllprice(): Observable<Array<string>> {
    return this.httpclint.get<Array<string>>(
      `${STORE_BASE_URL}/products/price`
    );
  }


}
