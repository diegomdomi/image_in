import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/counter/imageSlice';

export const store = configureStore({
  reducer: {
    imageStock: imageReducer,
  },
});