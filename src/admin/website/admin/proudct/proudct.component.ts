import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { proudct } from '../../../../app/commpanat/header/header/modeles/proudct.model';
import { CartService } from '../../../../app/sevices/cart.service';
import { StoreService } from '../../../../app/sevices/store.service';
import { FilterComponent } from "../../../../app/pages/home/filter/filter.component";
import { ProudctsHeaderComponent } from "../../../../app/pages/home/componatpages/proudcts-header/proudcts-header.component";
import { ProudctBoxComponent } from "../../../../app/pages/home/proudct-box/proudct-box.component";
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
    selector: 'app-proudct',
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
        ProudctsHeaderComponent,
        ProudctBoxComponent,
    ],
    templateUrl: './proudct.component.html',
    styleUrl: './proudct.component.css'
})

export class ProudctComponent implements OnInit, OnDestroy {

  category: string | undefined;
  cols = 5;
  rowHeight = ROWS_HEIGHT[this.cols];
  proudcts: Array<proudct> | undefined;
  sort = 'desc';
  count = '24';
  proudctsubscription: Subscription | undefined;
fullwidthmode: any;
  constructor(
    private cartservice: CartService,
    private storeservices: StoreService
  ) {}

  ngOnInit(): void {
    this.getproudcts();
  }
  getproudcts(): void {
    this.proudctsubscription = this.storeservices
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_proudcts) => {
        this.proudcts = _proudcts;
      });
  }
  columesoutchanges(colsnum: number): void {
    this.cols = colsnum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onshowcatogery(newcatogrey: string): void {
    this.category = newcatogrey;
    this.getproudcts();
  }
  onaddtocart(proudct: proudct): void {
    this.cartservice.addtocart({
      proudct: proudct.image,
      name: proudct.tittle,
      price: proudct.price,
      quantity: 1,
      id: proudct.id,
    });
  }
  onitemcountchange(newcount: number): void {
    this.count = newcount.toString();
    this.getproudcts();
  }
  onsortchange(newsort: string): void {
    this.sort = newsort;
    this.getproudcts();
  }
  ngOnDestroy(): void {
    if (this.proudctsubscription) {
      this.proudctsubscription.unsubscribe();
    }
  }
}
