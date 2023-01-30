import {configureStore} from "@reduxjs/toolkit";
import vendorsReducer from 'redux/vendorsSlice'

const store = configureStore({
    reducer: {
        vendors: vendorsReducer
    }
})
export default store