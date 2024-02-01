import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartSliceState, TCartItems } from './types';
import { count } from 'console';

const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'mebel',
  initialState,
  reducers: {
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
      state.totalPrice += action.payload.price;
    },
    minusItem: (state, action: PayloadAction<TCartItems>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },
    removeItem: (state, action: PayloadAction<TCartItems>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice -= action.payload.price * action.payload.count;
    },
  },
});

export const { addItem, minusItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
