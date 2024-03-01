import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { request } from '../../utils/common';
import { trackCollectionQuery } from '../../utils/queries';

export const getTrackItems = createAsyncThunk(
  'trackItems/getTrackItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(trackCollectionQuery);
      const { items } = data.trackCollection;
      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

interface TrackItem {
  date: string;
  title: string;
  link: string;
  cover: {
    url: string;
  };
  sys: {
    id: string;
  };
  description?: string;
}

interface TrackState {
  items: TrackItem[];
  isLoading: boolean;
}

const initialState: TrackState = {
  items: [],
  isLoading: false,
};

const trackItemsSlice = createSlice({
  name: 'trackItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrackItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrackItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getTrackItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectTrackItems = (state: RootState) => state.trackItems.items;
export const selectIsLoading = (state: RootState) => state.trackItems.isLoading;

export default trackItemsSlice.reducer;
