import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../thunks/auth.thunk";
import { Status } from "../../models/index.model";

const initialState = {
  isLogin: false,
  user: null,
  status: Status.IDLE
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Pending");
        //TODO: set Status
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Fulfilled");
        //TODO: set user state, set Status
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Rejected");
        //TODO: set Status
      })
    builder
      .addCase(register.pending, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Pending");
        //TODO: set Status
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Fulfilled");
        //TODO: set user state, set Status
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload })
        console.log("Rejected");
        //TODO: set Status
      })
  },
})

export { authSlice }