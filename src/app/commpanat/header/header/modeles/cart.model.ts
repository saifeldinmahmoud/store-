export interface cart {
  items: Array<cartitem>;
}

export interface cartitem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
