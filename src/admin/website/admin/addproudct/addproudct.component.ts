import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
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
import { FilterComponent } from '../../../../app/pages/home/filter/filter.component';
import { ProudctsHeaderComponent } from '../../../../app/pages/home/componatpages/proudcts-header/proudcts-header.component';
import { BootstrapOptions } from '@angular/core';
import { ProudctBoxComponent } from '../../../../app/pages/home/proudct-box/proudct-box.component';
import bootstrap from '../../../../main.server';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PorudctboxadminComponent } from "../../../porudctboxadmin/porudctboxadmin.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
    selector: 'app-addproudct',
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
        ReactiveFormsModule,
        ProudctBoxComponent,
    ],
    templateUrl: './addproudct.component.html',
    styleUrl: './addproudct.component.css'
})
export class AddproudctComponent implements OnInit, OnDestroy {
  category: string | undefined;
  cols = 5;
  rowHeight = ROWS_HEIGHT[this.cols];
  proudcts: Array<proudct> | undefined;
  sort = 'desc';
  count = '12';
  base64: any = '';
  proudctsubscription: Subscription | undefined;
  fullwidthmode: any;
  form!: FormGroup;
isLoading: any;
  constructor(
    private cartservice: CartService,
    private storeservices: StoreService,
    private build: FormBuilder,
    private httpclint: HttpClient,
    private modalService: NgbModal,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getproudcts();
    this.form = this.build.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
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
      id: Number(proudct.id), // تحويل `id` إلى `number`
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
  getimagepath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue('asazs');
    };
  }
  addproudct() {
    const newProduct = {
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description,
      category: this.form.value.category,
      image: this.form.value.image,
    };

    // إظهار تأثير التحميل (يمكنك إضافة Spinner هنا)
    this.isLoading = true;

    // إرسال البيانات إلى API لإضافة المنتج
    this.httpclint
      .post('https://fakestoreapi.com/products', newProduct)
      .subscribe(
        (response) => {
          console.log('Product added successfully:', response);

          // إخفاء تأثير التحميل بعد الإضافة
          this.isLoading = false;

          // بعد إضافة المنتج، نقوم باسترجاع جميع المنتجات المحدثة
          this.getproudcts();

          // إغلاق المودال بعد إضافة المنتج بنجاح (باستخدام ID المودال)
          const closeButton = document.getElementById('closeModalButton');
          if (closeButton) {
            closeButton.click();
          }

          // إظهار رسالة تأكيد باستخدام SnackBar
          this.snackBar.open('Product added successfully!', 'Close', {
            duration: 3000,
          });
        },
        (error) => {
          console.error('Error adding product:', error);

          // إخفاء تأثير التحميل في حالة حدوث خطأ
          this.isLoading = false;

          // إظهار رسالة خطأ
          this.snackBar.open(
            'Failed to add product. Please try again.',
            'Close',
            { duration: 3000 }
          );
        }
      );
  }
}
