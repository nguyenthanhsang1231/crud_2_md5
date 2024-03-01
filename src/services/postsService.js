import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const getBlogs = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await customAxios.get('posts');
        return res.data
    }
)
export const addBlog = createAsyncThunk(
    'posts/add',
    async (data) => {
        const res = await customAxios.post('posts', data);
        return data
    }
)