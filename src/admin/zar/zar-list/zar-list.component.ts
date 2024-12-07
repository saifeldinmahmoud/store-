import { Component, NgModule, OnInit, Pipe } from '@angular/core';
import { ZarService, Zar } from '../zar.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-zar-list',
    imports: [CommonModule, FormsModule, CurrencyPipe, MatIconModule],
    templateUrl: './zar-list.component.html',
    styleUrls: ['./zar-list.component.css']
})
export class ZarListComponent  {
  name: string = '';
  type: string = '';
  image: string = '';
  price: number = 0;
  zars: Zar[] = [];
  constructor(private zarService: ZarService) {}


  addZar() {
    const newZar: Zar = {
      id: '', // يجب التأكد من توليد id بطريقة مناسبة
      name: this.name,
      type: this.type,
      image: this.image,
      price: this.price,
      tittle: this.name, // تحديد الـ tittle
      category: this.type, // تحديد الـ category
      description: '', // تحديد الوصف أو تركه فارغًا
    };

    this.zarService.addZar(newZar); // إضافة الزار إلى الخدمة

    // إعادة ضبط المدخلات
    this.name = '';
    this.type = '';
    this.image = '';
    this.price = 0;
  }

  onImageSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = e.target.result; // تخزين الصورة كـ URL مؤقت
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
