import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState={
  list:[]
  }
  const accesKey = process.env.REACT_APP_APIKEY;
  const endPoint = process.env.REACT_APP_APIENDPOINT;
  const query = 'cats'

  export const imageAsync = createAsyncThunk('imageStock/imageAsync', async () => {
    try{
        const response = await fetch(`${endPoint}?query=${query}&client_id=${accesKey}`)
        const data = await response.json();
        return [...data.results];
    }catch(err){
        console.log(err)
    }
  })


  export const imageSlice = createSlice({
    name:'imageStock',
    initialState,
    extraReducers: {
      [imageAsync.pending]: () => {
        console.log("Loading...");
      },
      [imageAsync.fulfilled]: (state, action) => {
        console.log("Load completed");
        state.list = action.payload;
      },
      [imageAsync.rejected]: () => {
        console.log("Failure while fetching data!");
      },
    },
  })

export const selectImg = (state) => state.imageStock.list;

  export const { addImages } = imageSlice.actions
  export default imageSlice.reducer
  