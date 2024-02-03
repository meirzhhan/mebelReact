import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartSliceState, TCartItems } from './types';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState: ICartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'mebel',
  initialState,
  reducers: {
    // action для добавления и увеличения количества товара в корзине
    addItem: (state, action: PayloadAction<TCartItems>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    // action для уменьшения кол-ва товара в корзине
    minusItem: (state, action: PayloadAction<TCartItems>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    // action для удаления товара из корзины
    removeItem: (state, action: PayloadAction<TCartItems>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice -= action.payload.price * action.payload.count;
    },
  },
});

export const { addItem, minusItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
