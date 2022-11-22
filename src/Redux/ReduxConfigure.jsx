import { configureStore } from "@reduxjs/toolkit";
import { FireStoreReducer } from "./Reducers/FireStoreReducer";
import  {UserStateReducer}  from "./Reducers/UserReducer";
import  thunkMiddleware from "redux-thunk";


export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        UserState: UserStateReducer.reducer,
        FireStoreState: FireStoreReducer.reducer,
    }
})