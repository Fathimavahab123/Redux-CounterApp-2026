import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice'

const counterStore=configureStore({
    reducer:{
      counterReducer:counterSlice
    }
    
})

export default counterStore