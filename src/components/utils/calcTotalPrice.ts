import { TCartItems } from '../redux/cart/types';

export const calcTotalPrice = (items: TCartItems[]) => {
  return items.reduce((sum, obj) => sum + obj.count * obj.price, 0);
};
