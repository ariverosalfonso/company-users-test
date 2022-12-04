import { Product } from './producto.interface';
export interface Order {
  id: string;
  user: string;
  originAddress: string;
  destinyAddress: string;
  deliveryDate: string;
  state: string;
  products?: ProductOrder[];
  services?: ServiceOrder[];
  creationDate: any;
  totalPrice: number;
  coords: ProductCoords;
}

export interface ServiceOrder {
  service: string;
  quantity: number;
  initialDate?: any;
  endDate?: any;
}

export interface ProductOrder {
  product: string;
  quantity: number;
}

export interface OrderState {
  id: string;
  orderState: string;
}

export interface ProductCoords {
  lat: number;
  lng: number;
}