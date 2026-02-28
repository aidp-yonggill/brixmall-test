export interface Product {
  id: string;
  name: string;
  brix: number;
  price: number;
  originalPrice?: number;
  image: string;
  alt: string;
  description?: string;
}
