import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../sevices/store.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Add FormsModule for ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // Add MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Add MatInputModule for input fields

@Component({
  selector: 'app-filter',
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
    FormsModule, // Add FormsModule for ngModel
    MatFormFieldModule, // Add MatFormFieldModule
    MatInputModule, // Add MatInputModule for input fields
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  
  @Output() showcatogery = new EventEmitter<string>();
  @Output() filterByPrice = new EventEmitter<{ min: number; max: number }>();
  @Output() filterByName = new EventEmitter<string>();

  categoriessubscribtion: Subscription | undefined;
  categories: Array<string> | undefined;

  minPrice: number | null = null;
  maxPrice: number | null = null;
  searchName: string = '';

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
}
