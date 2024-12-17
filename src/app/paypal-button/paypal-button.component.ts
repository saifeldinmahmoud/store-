import { Component, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Payer {
  name: {
    given_name: string;
  };
}

interface PaymentDetails {
  payer: Payer;
}

@Component({
    selector: 'app-paypal-button',
    templateUrl: './paypal-button.component.html',
    styleUrls: ['./paypal-button.component.css'],
    standalone: false
})
export class PaypalButtonComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.loadPayPalScript().then(() => {
      (window as any).paypal
        .Buttons({

          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '100.00',
                  },
                },
              ],
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: PaymentDetails) => {
              // نستخدم النوع PaymentDetails هنا
              alert('Payment Successful! ' + details.payer.name.given_name);
            });
          },
          onError: (err: any) => {
            console.error('Payment Error: ', err);
          },
        })
        .render('#paypal-button-container');
    });
  }

  loadPayPalScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://www.paypal.com/sdk/js?client-id=AQWPM7geoIDX9LGvutDBBdsF07Opg7XZSbAh5jHti0Nmbw5v5rb1n887DZMmMcdJ213PHvHq-c7vzUj8&components=buttons';
      script.onload = () => resolve(script);
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  }
}
