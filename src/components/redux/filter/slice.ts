import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFilterSliceState } from './types';

const initialState: TFilterSliceState = {
  categoryId: 0,
  sortByType: 'rating',
  sortByOrder: 'asc',
  searchValue: '',
  currentPage: '1',
  xTotalCount: 18,
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
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    setXTotalCount: (state, action: PayloadAction<number>) => {
      state.xTotalCount = action.payload;
    },
    setFilters: (state, action: PayloadAction<TFilterSliceState>) => {
      state.currentPage = action.payload.currentPage;
      state.categoryId = Number(action.payload.categoryId);
      state.sortByType = action.payload.sortByType;
      state.sortByOrder = action.payload.sortByOrder;

      // state.sortByType = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSortByType,
  setSortByOrder,
  setSearchValue,
  setFilters,
  setCurrentPage,
  setXTotalCount,
} = filterSlice.actions;
export default filterSlice.reducer;
