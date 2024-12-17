import { Component, NgModule, OnInit } from '@angular/core';

import { HeaderComponent } from './commpanat/header/header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { CartService } from './sevices/cart.service';
import { cart } from './commpanat/header/header/modeles/cart.model';
import { StoreService } from './sevices/store.service';
import { HttpClientModule } from '@angular/common/http';
import { Server } from 'node:http';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { ReactiveFormsModule } from '@angular/forms';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [PaypalButtonComponent,],
  exports: [PaypalButtonComponent],
})
export class PaypalModule {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // FilterComponent,
    // HomeComponent,
    // CartComponent,
    RouterModule,
    // TODO: `HttpClientModule` should not be imported into a component directly.
    // Please refactor the code to add `provideHttpClient()` call to the provider list in the
    // application bootstrap logic and remove the `HttpClientModule` import from this component.
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    HeaderComponent,   
    AngularFireModule, // إذا كنت تستخدم Firebase Realtime Database
    AngularFireAuthModule,     // إذا كنت تستخدم Firebase Authentication
],
  providers: [CartService, StoreService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'store';
  cart: cart = { items: [] };
  constructor(
    private cartservices:CartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    this.cartservices.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
    const script = document.createElement('script');
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AQWPM7geoIDX9LGvutDBBdsF07Opg7XZSbAh5jHti0Nmbw5v5rb1n887DZMmMcdJ213PHvHq-c7vzUj8';
    script.onload = () => {
      console.log('PayPal SDK loaded');
    };
    document.body.appendChild(script);
    if (isPlatformBrowser(this.platformId)) {
      // You can safely access the document here
    }
  }
}


