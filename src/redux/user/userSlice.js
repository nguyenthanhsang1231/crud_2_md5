import {createSlice, current} from "@reduxjs/toolkit";
import {LoginUser} from "../../services/userService";

const initialState = {
    user:  JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
    }
})

export default userSlice.reducer