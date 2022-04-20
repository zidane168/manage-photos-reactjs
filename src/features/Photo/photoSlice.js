import { createSlice } from '@reduxjs/toolkit'

const initialPhotos = [
    {
        id: 37828,
        categoryId: 1,
        photo: 'https://picsum.photos/id/1/300/300',
        title: 'Photo id=37828'
    },
    {
        id: 59303,
        categoryId: 2,
        photo: 'https://picsum.photos/id/870/300/300',
        title: 'Photo id=59303'
    },
    {
        id: 13053,
        categoryId: 3,
        photo: 'https://picsum.photos/id/1060/300/300',
        title: 'Photo id=13053'
    },
    {
        id: 26939,
        categoryId: 4,
        photo: 'https://picsum.photos/id/1084/300/300',
        title: 'Photo id=26939'
    },
    {
        id: 94729,
        categoryId: 5,
        photo: 'https://picsum.photos/id/866/300/300',
        title: 'Photo id=94729'
    },
    {
        id: 29490,
        categoryId: 1,
        photo: 'https://picsum.photos/id/1055/300/300',
        title: 'Photo id=29490'
    },
]

const photo = createSlice({
    name: 'photos',
    initialState: initialPhotos,    // danh sach cac hinh anh (sau nay se push vao)    // state.photos
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload
            state.push(newPhoto)    // ko co return, ko can clone moi 
        },
        removePhoto: (state, action) => {
            const newPhotos = state.filter(photo => photo.id != action.payload)
            return newPhotos
        },
        editPhoto: (state, action) => {
            const editPhoto = action.payload;
            const index = state.findIndex(photo => photo.id == editPhoto.id)
            
            state[index] = editPhoto
        }
    }
})

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;