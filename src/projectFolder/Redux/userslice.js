import { createSlice } from "@reduxjs/toolkit";
export const userslice = createSlice({
    name: 'newsubsciber',

    initialState: {
        users: []
    }
    ,
    reducers: {
        adduser: (state, action) => {
            state.users.push(action.payload)
        }
    }
});

export const { adduser } = userslice.actions
export default userslice.reducer;