import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { TMebel, TSearchMebelParams } from './types';
import { setXTotalCount } from '../filter/slice';

// AsyncThunk функция  для запроса мебели. Если параметры не заданы  - возвращает массив всех мебелей
export const fetchMebels = createAsyncThunk<TMebel[], TSearchMebelParams>(
  'mebel/fetchMebelStatus',
  async (params, thunkAPI) => {
    const { page, category, property, order, search } = params;

    // для получения x-total-count вручную. Мокапи не поддерживает x-total-count, поэтому число айтемов из выставленного фильтра, из которой будет делатся пагинцаия
    const response = await axios.get<TMebel[]>(
      `https://65b5597841db5efd2867a177.mockapi.io/items/mebel?${category}${property}${order}${search}`,
    );
    const { data } = await axios.get<TMebel[]>(
      `https://65b5597841db5efd2867a177.mockapi.io/items/mebel?${page}&limit=8&${category}${property}${order}${search}`,
    );

    const xTotalCount = response.data.length;
    thunkAPI.dispatch(setXTotalCount(xTotalCount));

    return data;
  },
);
