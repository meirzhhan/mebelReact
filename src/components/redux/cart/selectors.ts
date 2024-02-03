import { RootState } from '../store';

export const selectCartState = (state: RootState) => state.cart;

// функция -селектор, которая проверяет  наличие в корзине продукта  с данным id
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
