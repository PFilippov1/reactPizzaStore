import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]) =>
  items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
