import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza, SearchPizzaParams } from './types';
import axios from 'axios';

// First, create the thunk
export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    try {
      const { data } = await axios.get<Pizza[]>(
        `https://67360abe5995834c8a952b8f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    } catch (error) {
      console.error('Error fetching pizzas:', error);
      // throw error;
      return [];
    }
  }
);
