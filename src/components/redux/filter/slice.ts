import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterSliceState, TSort } from './types';

const initialState: IFilterSliceState = {
  categoryId: 0,
  sortByType: {
    name: 'рейтингу',
    property: 'price',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortByType: (state, action: PayloadAction<TSort>) => {
      state.sortByType = action.payload;
    },
  },
});

export const { setCategoryId, setSortByType } = filterSlice.actions;
export default filterSlice.reducer;
