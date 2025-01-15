export type CartItem = {
  id: string;
  title: string;
  price: number;
  type: string; 
  imageUrl: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}