import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
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
import { CurrencyPipe } from '@angular/common';
import { proudct } from '../../app/commpanat/header/header/modeles/proudct.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../app/sevices/cart.service';
import { StoreService } from '../../app/sevices/store.service';
@Component({
  selector: 'app-porudctboxadmin',
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
    CurrencyPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './porudctboxadmin.component.html',
  styleUrl: './porudctboxadmin.component.css',
})
export class PorudctboxadminComponent implements OnInit {
  @Input() fullwidthmode = false;
  @Input() proudct: proudct | undefined;
  @Output() addtocart = new EventEmitter();
  base64: any = '';
  form!: FormGroup;
  item: any;
  proudcts: Array<proudct> | undefined;
  constructor(
    private build: FormBuilder,
    private httpclint: HttpClient,
    private cartservice: CartService,
    private storeservices: StoreService
  ) {}
  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }
  onaddtocart(): void {
    this.addtocart.emit(this.proudct);
  }
  getimagepath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
    };
  }
  addproudct() {
    const model = this.form.value;
    this.storeservices.createProduct(model).subscribe((res) => {});
    alert('edit proudct sucsses');
  }
  ubdat3() {}
}
