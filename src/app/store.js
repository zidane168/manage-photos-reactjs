import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice' 

const rootReducer = {           // state
    photos: photoReducer,       // state.photos (useSelector)
}
const store = configureStore({
    reducer: rootReducer
})

export default store;