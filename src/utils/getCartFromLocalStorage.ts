import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items: items as CartItem[],
    totalPrice,
  };
};

export const clearCartFromLocalStorage = () => {
  localStorage.clear();
};

export const removeItemFromLocalStorage = (id: string) => {
  const data = localStorage.getItem('cart');
  const items: CartItem[] = data ? JSON.parse(data) : [];
  const updatedItems = items.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedItems));
};
