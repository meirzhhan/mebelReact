import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartSliceState, TCartItems } from './types';

const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'mebel',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItems>) => {
      // const findItem = state.items.find((obj) => obj.id === action.payload.id);

      state.items.push({
        ...action.payload,
        count: 1,
      });

      // if (findItem) {
      //   findItem.count++;
      // } else {
      //   state.items.push({
      //     ...action.payload,
      //     count: 1,
      //   });
      // }
      // state.totalPrice += action.payload.price;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
