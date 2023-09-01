export enum productStatus {
  available = 'available',
  outOfStock = 'outOfStock',
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  status: productStatus;
}

export interface Cart {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;

}
