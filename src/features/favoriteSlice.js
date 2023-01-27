import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     storeImg : JSON.parse(localStorage.getItem('myFavorite')) || [],
}

const saveInLocalStorage = (store) => {
    localStorage.setItem('myFavorite', JSON.stringify(store))
}

export const storeImgSlice = createSlice({
    name: 'storeImages',
    initialState,
    reducers:{
        addToMyPhoto: (state, action) => {
            if ([...state.storeImg].some(item => item.id === action.payload.id)) {
                state.storeImg = [...state.storeImg ];
            }else{
                state.storeImg = [...state.storeImg, action.payload ];
            }
            saveInLocalStorage(state.storeImg)

        },

        disLikePhoto: (state, action) => {
            state.storeImg  = state.storeImg.filter((item) => item.id !== action.payload);
           saveInLocalStorage(state.storeImg)
            
        },

        editDescription : (state, action) =>{
            state.storeImg.forEach((item) => {
                if (item.id === action.payload.id){
                    item.description = action.payload.description
            }
            })
            saveInLocalStorage(state.storeImg)
        },

            filterByDescription : (state, action) => {
                
                let newFilter = state.storeImg.filter((item) => item.description && item.description.toLowerCase().includes(action.payload.toLowerCase()))
                state.storeImg = JSON.parse(localStorage.getItem('myFavorite'))
                
                if (action.payload !=='') {
                    state.storeImg = newFilter

                } 
                

                
        }
    },


       

})

// export const storeImg = (state) => state.favoriteImage.storeImg;
export default storeImgSlice.reducer

export const {
    addToMyPhoto,
    disLikePhoto,
    editDescription,
    filterByDescription,
} = storeImgSlice.actions

