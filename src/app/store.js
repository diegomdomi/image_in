import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/imageSlice';
import favoriteReducer from '../features/favoriteSlice'

export const store = configureStore({
  reducer: {
    imageStock: imageReducer,
    favoriteImage : favoriteReducer
  },
});