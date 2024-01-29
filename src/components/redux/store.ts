import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mebelData from './mebel/slice';
import filter from './filter/slice';

export const store = configureStore({
  reducer: {
    mebelData,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
