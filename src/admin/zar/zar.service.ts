import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Zar {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  tittle: string;
  category: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ZarService {
  private zars: Zar[] = []; // مصفوفة المنتجات
  private zarsSubject = new BehaviorSubject<Zar[]>(this.zars); // BehaviorSubject لتوزيع التحديثات

  getZars() {
    return this.zarsSubject.asObservable(); // إرجاع الـ observable لمراقبة التحديثات
  }

  addZar(newZar: Zar) {
    this.zars.push(newZar); // إضافة الزار الجديد إلى المصفوفة
    this.zarsSubject.next(this.zars); // نشر التحديثات للمراقبين
  }
}
