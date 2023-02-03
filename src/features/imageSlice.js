import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from './apiCall';

const initialState = {
  list:[],
  loading: false,
  error: false

  }

  export const imageAsync = createAsyncThunk(
    'imageStock/imageAsync',
      async (param,page) => {
        return await apiCall(param,page)
    })


  export const imageSlice = createSlice({
    name:'imageStock',
    initialState,
    extraReducers: {
      [imageAsync.pending]: (state,action) => {
        console.log("Loading...");
        state.loading = true;
        state.error = false;
      },
      [imageAsync.fulfilled]: (state, action) => {
        console.log("Load completed");
        state.list = action.payload;
        state.loading = false;
        state.error = false;
      },
      [imageAsync.rejected]: (state, action) => {
        console.log("Failure while fetching data!");
        state.loading = false;
        state.error = true;
      },
    },
  })

export const selectImg = (state) => state.imageStock.list;

export default imageSlice.reducer