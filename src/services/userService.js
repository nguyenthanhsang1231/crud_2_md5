import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const loginUser = createAsyncThunk(
    "users/login",
    async (data) => {
        const [res] = await Promise.all([customAxios.post('login', data)])
        return res
    }
)