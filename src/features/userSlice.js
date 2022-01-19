import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action) => {

            axios.post("http://3.140.210.76:8000/api/token/",action.payload).then(res=>{
                console.log(res);
                
            })

            state.user = action.payload ; 

            
        },
        register:(state,action)=>{

            // console.log(action.payload)

            axios.post("http://3.140.210.76:8000/api/user/",action.payload).then(res=>{
                console.log(res);
            })

        }
    }
}) ; 

export const {login,register} = userSlice.actions ;

export const selectUser = (state) => state.user.user ;

export default userSlice.reducer; 