import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import blogsSlice from "./Posts/blogsSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsSlice,
        user: userReducer
    }
})