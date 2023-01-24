import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     storeImg : JSON.parse(localStorage.getItem('myFavorite'))|| [],
}

const saveInLocalStorage = (store) => {
    localStorage.setItem('myFavorite', JSON.stringify(store))
}

export const storeImgSlice = createSlice({
    name: 'storeImages',
    initialState,
    reducers:{
        addToMyPhoto: (state, action) => {
            alert('soy reducer')
            if ([...state.storeImg].every(item => item.id !== action.payload.id)) {
                state.storeImg = [...state.storeImg, action.payload];
                saveInLocalStorage(state.storeImg)
            }
        }
    }

})

export default storeImgSlice.reducer

export const {
    addToMyPhoto,
} = storeImgSlice.actions