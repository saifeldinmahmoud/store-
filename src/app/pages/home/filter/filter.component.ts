import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() showcatogery = new EventEmitter<string>();
  categoriessubscribtion: Subscription | undefined;
  categories: Array<string> | undefined;

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
  ngOnDestroy(): void {
    if (this.categoriessubscribtion) {
      this.categoriessubscribtion.unsubscribe();
    }
  }
}
