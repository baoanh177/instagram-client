import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./slices/app.slice";
import { authSlice } from "./slices/auth.slice";

export const reducers = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer
})