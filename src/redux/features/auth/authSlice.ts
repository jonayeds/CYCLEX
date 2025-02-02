import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JwtPayload } from "jwt-decode";
import { RootState } from "../../store";
export interface IUser extends JwtPayload{
    email:string;
    role:"admin"|"customer"
}

type TAuthState = {
    user: null | IUser,
    token:string | null
}

const initialState:TAuthState = {
    user:null,
    token:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<TAuthState>)=>{
            const {user, token} = action.payload
            state.user = user
            state.token = token
        },
        logOut :(state)=>{
            state.user = null;
            state.token = null;
        }
    }
})

export const {setUser, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: RootState )=>state.auth.token
export const selectCurrentUser = (state: RootState )=>state.auth.user