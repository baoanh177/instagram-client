import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../thunks/auth.thunk";
import { AuthActions, Status } from "../../models/index.model";

const accessToken = localStorage.getItem("accessToken");
const initialState = {
  isLogin: !!accessToken,
  user: null,
  status: Status.IDLE,
  message: "",
  action: AuthActions.UNSET,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Pending");
        //TODO: set Status
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.action = AuthActions.LOGIN;
        state.user = payload.metaData.userData;
        state.isLogin = true;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(payload.metaData.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(payload.metaData.refreshToken)
        );
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Rejected");
        //TODO: set Status
      });
    builder
      .addCase(register.pending, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Pending");
        //TODO: set Status
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Fulfilled");
        state.action = AuthActions.REGISTER;
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Rejected");
        //TODO: set Status
      });
    builder
      .addCase(logout.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ state, { payload }:", state, { payload });
        console.log("Fulfilled");
        state.action = AuthActions.LOGOUT;
        state.isLogin = false;
        state.user = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      })
      .addCase(logout.rejected, (state) => {
        state.status = Status.REJECTED;
        state.message = "An error occurred, please try again later";
      });
  },
});

export { authSlice };
