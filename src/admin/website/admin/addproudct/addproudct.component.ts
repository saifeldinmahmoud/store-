import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProudctsHeaderComponent } from '../../../../app/pages/home/componatpages/proudcts-header/proudcts-header.component'; // استيراد المكون المستقل
import { ProudctBoxComponent } from '../../../../app/pages/home/proudct-box/proudct-box.component';
import { CartService } from '../../../../app/sevices/cart.service';
import { StoreService } from '../../../../app/sevices/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-addproudct',
  standalone: true, // تعيين المكون كمكون مستقل
  imports: [
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    CommonModule,
    ReactiveFormsModule,
    ProudctsHeaderComponent, // استيراد المكون المستقل هنا
    ProudctBoxComponent,
  ],
  templateUrl: './addproudct.component.html',
  styleUrls: ['./addproudct.component.css'],
})
export class AddproudctComponent implements OnInit, OnDestroy {
  category: string | undefined;
  cols = 5;
  rowHeight = ROWS_HEIGHT[this.cols];
  proudcts: Array<any> | undefined;
  sort = 'desc';
  count = '12';
  base64: any = '';
  proudctsubscription: any;
  form!: FormGroup;

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

  ngOnDestroy(): void {
    if (this.proudctsubscription) {
      this.proudctsubscription.unsubscribe();
    }
  }
  // other methods...
}
