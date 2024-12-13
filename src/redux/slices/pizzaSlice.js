import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  try {
    const { data } = await axios.get(
      `https://67360abe5995834c8a952b8f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    throw error;
  }
});

const initialState = {
  items: [],
  status: 'loading' | 'pending' | 'succeeded' | 'failed',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const selectPizzaData = (state) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
