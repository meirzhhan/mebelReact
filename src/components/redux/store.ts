import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import mebelData from './mebel/slice';
import filter from './filter/slice';
import cart from './cart/slice';
import mebelById from './mebelById/slice';

export const store = configureStore({
  reducer: {
    mebelData,
    filter,
    cart,
    mebelById,
  },
});

export type RootState = ReturnType<typeof store.getState>; // тип  для доступа к состоянию хранилища
export type AppDispatch = typeof store.dispatch; // тип  диспатча для использования в хуках Redux Toolkit
export const useAppDispatch: () => AppDispatch = useDispatch; //  создание глобального хука для получения диспатча
