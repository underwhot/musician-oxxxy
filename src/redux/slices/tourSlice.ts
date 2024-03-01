import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { tourCollectionQuery } from '../../utils/queries';
import { request } from '../../utils/common';

export const getTourItems = createAsyncThunk(
  'tourItems/getTourItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(tourCollectionQuery);
      const { items } = data.tourCollection;
      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export interface TourItem {
  sys: {
    id: string;
  };
  date: string;
  place: string;
  city: string;
  soldOut: boolean;
  country: string;
  ticketLink: string;
  videoLink: string;
}

interface TourState {
  items: TourItem[];
  isLoading: boolean;
}

const initialState: TourState = {
  items: [],
  isLoading: false,
};

const tourItemsSlice = createSlice({
  name: 'tourItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTourItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTourItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getTourItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectTourItems = (state: RootState) => state.tourItems.items;
export const selectIsLoading = (state: RootState) => state.tourItems.isLoading;

export default tourItemsSlice.reducer;
