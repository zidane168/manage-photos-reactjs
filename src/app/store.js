import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice' 
import userReducer from 'features/Auth/userSlice' 

const rootReducer = {           // state
    photos: photoReducer,       // state.photos (useSelector)
    user: userReducer,
}
const store = configureStore({
    reducer: rootReducer
})

export default store;