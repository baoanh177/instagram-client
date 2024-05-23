import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";

const prefix = "/api/v1/auth"

export const login = createAsyncThunk('login', async (payload: IThunkPayload, thunkAPI) => {
  try {
    const res = await client.post(`${prefix}/login`, payload)
    return res
  }catch(error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const register = createAsyncThunk('register', async (payload: IThunkPayload, thunkAPI) => {
  try {
    const res = await client.post(`${prefix}/register`, payload)
    return res
  }catch(error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})