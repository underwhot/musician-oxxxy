import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { request } from '../../utils/common';
import { newsCollectionQuery, newsItemQuery } from '../../utils/queries';

export const getNewsItems = createAsyncThunk(
  'newsItems/getNewsItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(newsCollectionQuery);
      const { items } = data.newsCollection;
      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getNewsItem = createAsyncThunk(
  'newsItem/getNewsItem',
  async (id: string, thunkAPI) => {
    try {
      const data = await request(newsItemQuery(id));
      return data.news;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

interface NewsItem {
  title: string;
  date: string;
  cover: {
    url: string;
  };
  sys: {
    id: string;
  };
  description?: {
    json: JSON;
  };
}

interface NewsState {
  items: NewsItem[];
  item: NewsItem | null;
  isLoading: boolean;
}

const initialState: NewsState = {
  items: [],
  item: null,
  isLoading: false,
};

const newsItemsSlice = createSlice({
  name: 'newsItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getNewsItems.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(getNewsItem.pending, (state) => {
        state.isLoading = true;
        state.item = initialState.item;
      })
      .addCase(getNewsItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(getNewsItem.rejected, (state) => {
        state.isLoading = false;
        state.item = initialState.item;
      });
  },
});

export const selectNewsItems = (state: RootState) => state.newsItems.items;
export const selectNewsItem = (state: RootState) => state.newsItems.item;
export const selectIsLoading = (state: RootState) => state.newsItems.isLoading;

export default newsItemsSlice.reducer;
