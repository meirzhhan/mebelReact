import { createAsyncThunk } from '@reduxjs/toolkit';
import { TMebel, TSearchMebelParams } from './types';
import axios from 'axios';

export const fetchMebels = createAsyncThunk<TMebel[], TSearchMebelParams>(
  'mebel/fetchMebelStatus',
  async (params) => {
    const { category, property, order, search } = params;
    // const { property, category, search, currentPage, sortByOrder } = params;

    const { data } = await axios.get<TMebel[]>(
      `https://65b5597841db5efd2867a177.mockapi.io/items/mebel?${category}${property}${order}${search}`,
    );
    return data;
  },
);
