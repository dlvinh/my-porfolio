import { configureStore } from "@reduxjs/toolkit";
import { FireStoreReducer } from "./Reducers/FireStoreReducer";
import  {UserStateReducer}  from "./Reducers/UserReducer";
import { NavReducer } from "./Reducers/NavReducer";


export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        UserState: UserStateReducer.reducer,
        FireStoreState: FireStoreReducer.reducer,
        NavState:NavReducer.reducer
    }
})