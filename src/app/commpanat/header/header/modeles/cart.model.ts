export interface cart {
  items: Array<cartitem>;
}

export interface cartitem{
  proudct: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
