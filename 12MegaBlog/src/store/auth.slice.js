import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    status: false,
    userData: null
};

const authSlice =createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action)=>{
           state.status = true; // Set status to true when user logs in
           state.userData=action.payload.userData;
        },

        logout: (state)=>{
          state.status=false;
          state.userData=null; // Reset user data when user logs out
        }
    }
})

export const {login, logout} = authSlice.actions; // Export the action creators for login and logout
export default authSlice.reducer; // Export the reducer to be used in the store