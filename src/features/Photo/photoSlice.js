import { createSlice } from '@reduxjs/toolkit'

const photo = createSlice({
    name: 'photos',
    initialState: [],    // danh sach cac hinh anh (sau nay se push vao)    // state.photos
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload
            state.push(newPhoto)    // ko co return, ko can clone moi 
        }
    }
})

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;