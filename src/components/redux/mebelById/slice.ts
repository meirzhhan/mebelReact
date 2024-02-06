import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status } from '../mebel/types';
import { TMebelById, TMebelByIdState } from './types';
import { fetchMebelById } from './asyncActions';

const initialState: TMebelByIdState = {
  items: {
    imageUrl: '',
    title: '',
    sizes: [],
    price: 1,
  },
  status: Status.LOADING,
};

const mebelByIdSlice = createSlice({
  name: 'mebelById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // кейс  успешного запроса данных
      .addCase(fetchMebelById.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchMebelById.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchMebelById.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default mebelByIdSlice.reducer;
