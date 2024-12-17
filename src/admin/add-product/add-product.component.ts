import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat'; // Firebase Module
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Firebase Firestore Module
import { Subscription } from 'rxjs';
import { StoreService } from '../../app/sevices/store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../../app/pages/home/home.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
 @Output() showcatogery = new EventEmitter<string>();
  @Output() filterByPrice = new EventEmitter<{ min: number; max: number }>();
  @Output() filterByName = new EventEmitter<string>();
categoriessubscribtion: Subscription | undefined;
  categories: Array<string> | undefined;
  price: number | null = null; // قيمة السعر

  minPrice: number | null = null;
  maxPrice: number | null = null;
  searchName: string = '';
  imagePreview: string | undefined;
selectedCategory: any;
  constructor(private storeservices: StoreService) {}

  ngOnInit(): void {
    this.categoriessubscribtion = this.storeservices
      .getAllCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }

  onshowcatogery(category: string): void {
    this.showcatogery.emit(category);
  }

  onFilterByPrice(): void {
    if (this.minPrice !== null && this.maxPrice !== null) {
      this.filterByPrice.emit({ min: this.minPrice, max: this.maxPrice });
    }
  }

  onFilterByName(): void {
    if (this.searchName.trim()) {
      this.filterByName.emit(this.searchName.trim());
    }
  }

  ngOnDestroy(): void {
    if (this.categoriessubscribtion) {
      this.categoriessubscribtion.unsubscribe();
    }
  }

  onImageSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string; // تأكد من تعيين القيمة هنا بشكل صحيح
    };
    reader.readAsDataURL(file);
  }
}

}


