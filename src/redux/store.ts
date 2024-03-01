import { configureStore } from '@reduxjs/toolkit';
import tourReducer from './slices/tourSlice';
import trackReducer from './slices/trackSlice';

export const store = configureStore({
  reducer: {
    tourItems: tourReducer,
    trackItems: trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
