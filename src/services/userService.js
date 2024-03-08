import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const LoginUser = createAsyncThunk(
    "users/login",
    async (data) => {
        const res = await customAxios.post('users/login', data)
        console.log(res)
        return res.data
    }
)