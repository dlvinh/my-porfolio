import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const defaultFireStoreState = {
    storage: "",
    app: "",
}



export const FireStoreReducer = createSlice({
    name: "firestoreState",
    initialState: defaultFireStoreState,
    reducers:{
        //===== DECLARE ACTIONs HERe
        storeFile(state,action){
            console.log("Store App");
            console.log(action.payload);
            return state = {storage:(action.payload.storage),
                 app: ( action.payload.app)};
        }
    }
})
export const { storeFile } = FireStoreReducer.actions
export default FireStoreReducer.reducer