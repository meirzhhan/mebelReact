import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMebelSliceState, Status, TMebel } from './types';
import { fetchMebel } from './asyncActions';

const initialState: IMebelSliceState = {
  items: [],
  status: Status.LOADING,
};

const mebelSlice = createSlice({
  name: 'mebel',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<TMebel[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMebel.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchMebel.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchMebel.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = mebelSlice.actions;
export default mebelSlice.reducer;
