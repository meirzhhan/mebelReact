import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { TMebel, TSearchMebelParams } from './types';

// AsyncThunk функция  для запроса мебели. Если параметры не заданы  - возвращает массив всех мебелей
export const fetchMebels = createAsyncThunk<TMebel[], TSearchMebelParams>(
  'mebel/fetchMebelStatus',
  async (params) => {
    const { category, property, order, search } = params;

    const { data } = await axios.get<TMebel[]>(
      `https://65b5597841db5efd2867a177.mockapi.io/items/mebel?${category}${property}${order}${search}`,
    );
    return data;
  },
);
