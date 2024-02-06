import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TMebelById } from './types';

export const fetchMebelById = createAsyncThunk<TMebelById, string>(
  'mebel/fetchMebelById',
  async (id) => {
    const { data } = await axios.get<TMebelById>(
      `https://65b5597841db5efd2867a177.mockapi.io/items/mebel/${id}`,
    );

    return data;
  },
);
