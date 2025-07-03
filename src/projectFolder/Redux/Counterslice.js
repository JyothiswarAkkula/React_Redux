import { createSlice } from "@reduxjs/toolkit";
export const counterslice= createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers :{
        increment:(state)=>{
            state.value =state.value+ 1;
        }
    }
})

export const{increment} = counterslice.actions
export default counterslice.reducer