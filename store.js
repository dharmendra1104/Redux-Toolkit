import { configureStore, createReducer } from "@reduxjs/toolkit";
import  cartReducer from "./src/Redux/Cartslice"
const store = configureStore({
    reducer:{
     cart:cartReducer     
    }
})


export default store;