import { createSlice } from "@reduxjs/toolkit"

const defaultNavState ={
    toogleNav: false
}

export const NavReducer = createSlice({
    name: "navState",
    initialState: defaultNavState,
    reducers:{
        storeImageAndResume(state,action){
        
            return state = {
                ...state,
              toogleNav: action.payload.toogleNav
            };
        },
       
        //===== DECLARE ACTIONs HERE
    }
})

export const reducerActions = NavReducer.actions;