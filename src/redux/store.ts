import { configureStore } from '@reduxjs/toolkit';
import tourReducer from './slices/tourSlice';
import trackReducer from './slices/trackSlice';
import newsReducer from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    tourItems: tourReducer,
    trackItems: trackReducer,
    newsItems: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
