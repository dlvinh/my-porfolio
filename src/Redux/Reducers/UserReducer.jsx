import { createSlice } from "@reduxjs/toolkit"

const defaultUserState ={
    image: "",
    resume: ""
}

export const UserStateReducer = createSlice({
    name: "userState",
    initialState: defaultUserState,
    reducers:{
        storeImageAndResume(state,action){
            console.log("Store Avatar");
            // console.log(action.payload);
            return state = {
                ...state,
                image: action.payload.image,
                resume: action.payload.resume
            };
        },
        //===== DECLARE ACTIONs HERE
    }
})

export const reducerActions = UserStateReducer.actions;