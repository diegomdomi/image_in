import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState={
  list:[]
  }
  const accesKey = process.env.REACT_APP_APIKEY;
  const endPoint = process.env.REACT_APP_APIENDPOINT;
  const randomEmpoint = process.env.REACT_APP_RANDOMENDPOINT;

  export const imageAsync = createAsyncThunk('imageStock/imageAsync', async (param) => {
    try{
      if(!param || param === '' ){
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${accesKey}&count=30`)
        const data = await response.json();
        return [...data];
      }else{
        const response = await fetch(`${endPoint}?query=${param}&per_page=50&client_id=${accesKey}`)
        const data = await response.json();
          return [...data.results];
        
      }
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