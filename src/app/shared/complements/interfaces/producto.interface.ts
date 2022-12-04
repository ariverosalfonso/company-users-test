export interface Product {
  id: string;
  reference: string;
  price: number;
  categories: string[];
  petTypes: string[];
  quantity: number;
  photo: string;
}

export interface ProductType {
  type: string;
}
