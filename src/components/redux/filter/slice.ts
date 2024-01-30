import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterSliceState, TSort } from './types';

const initialState: IFilterSliceState = {
  categoryId: 0,
  sortByType: {
    name: 'рейтингу',
    property: 'rating',
  },
  sortByOrder: 'asc',
  searchValue: '',
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
    setSortByOrder: (state, action: PayloadAction<string>) => {
      state.sortByOrder = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortByType, setSortByOrder, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
