import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFilterSliceState } from './types';

const initialState: TFilterSliceState = {
  categoryId: 0,
  sortByType: 'rating',
  sortByOrder: 'asc',
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // action - изменение категории фильтра
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    }, // action - изменение типа сортировки
    setSortByType: (state, action: PayloadAction<string>) => {
      state.sortByType = action.payload;
    }, // action - переключение порядка сортировки
    setSortByOrder: (state, action: PayloadAction<string>) => {
      state.sortByOrder = action.payload;
    }, // action -  обновление значения для поиска
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<TFilterSliceState>) => {
      state.categoryId = Number(action.payload.categoryId);
      state.sortByType = action.payload.sortByType;
      state.sortByOrder = action.payload.sortByOrder;

      // state.sortByType = action.payload;
    },
  },
});

export const { setCategoryId, setSortByType, setSortByOrder, setSearchValue, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
