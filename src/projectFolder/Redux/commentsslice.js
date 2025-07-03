import { createSlice } from "@reduxjs/toolkit";

export const comment=createSlice({
    name:'adddcomments',
    initialState:{
        comments:[]
    },
    reducers:{
         addcomments:(state,action)=>{
            state.comments.push(action.payload)
        }
    }
    
});

export const {addcomments}= comment.actions
export default comment.reducer