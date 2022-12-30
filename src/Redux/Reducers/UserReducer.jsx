import { createSlice } from "@reduxjs/toolkit"

const defaultUserState ={
    image: "",
    resume: "",
    userInfo:{
        currentJob: "",
        userAddress: "",
        userAge: "",
        userEmail:"",
        userLanguages: [],
        userName: ""
    },
    endorsementList:[
    ],
    projectList:[

    ]
}

export const UserStateReducer = createSlice({
    name: "userState",
    initialState: defaultUserState,
    reducers:{
        storeImageAndResume(state,action){
            // console.log("Store Avatar");
            // console.log(action.payload);
            return state = {
                ...state,
                image: action.payload.image,
                resume: action.payload.resume
            };
        },
        storeUserInfo(state, action){
            // console.log("Store User Info", action);
            
            return state = {
                ...state,
                userInfo: action.payload
            }
        },
        storeUserEndorsementList(state, action){
            // console.log("Store endorsement list", action.payload);
            return state = {
                ...state,
                endorsementList: action.payload
            }
        },
        storeUserProjectList(state, action){
            console.log("StoreProjectList", action.payload);
            return state={
                ...state,
                projectList: action.payload
            }
        }
        //===== DECLARE ACTIONs HERE
    }
})

export const reducerActions = UserStateReducer.actions;