declare global {
  interface Window {
    paypal: any;
  }
}
export {};


// يمكن أن تستدعي createOrder في الخادم وتستخدمه لإتمام العملية.
