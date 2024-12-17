import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../../sevices/store.service';
import { proudct } from '../../commpanat/header/header/modeles/proudct.model';
import { CartService } from '../../sevices/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProudctBoxComponent } from "./proudct-box/proudct-box.component";
import { ProudctsHeaderComponent } from "./componatpages/proudcts-header/proudcts-header.component";
import { FilterComponent } from "./filter/filter.component";
import { CommonModule } from '@angular/common';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxPaginationModule, ProudctBoxComponent, ProudctsHeaderComponent, FilterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // تأكد من تعريف cols هنا
  cols = 5; // عدد الأعمدة في الصفحة
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<proudct> = [];
  paginatedProducts: Array<proudct> = [];
  currentPage = 1;
  pageSize = 6; // عدد المنتجات في الصفحة
  page = 1; // الصفحة الحالية
  totalPages: number = 0;
  category: string | undefined;
  sort = 'desc';
  count = '24';
  proudctsubscription: Subscription | undefined;

  constructor(
    private cartservice: CartService,
    private storeservices: StoreService
  ) { }

  ngOnInit(): void {
    this.getproudcts();
  }

  getproudcts(): void {
    this.storeservices
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_proudcts) => {
        this.products = _proudcts;
        this.totalPages = Math.ceil(this.products.length / this.pageSize);
        this.updatePaginatedProducts();
      });
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedProducts();
    }
  }

  columesoutchanges(colsnum: number): void {
    this.cols = colsnum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    this.updatePaginatedProducts();
  }

  onshowcatogery(newcatogrey: string): void {
    this.category = newcatogrey;
    this.getproudcts();
  }

  onaddtocart(proudct: proudct): void {
    this.cartservice.addtocart({
      product: proudct.image,
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
