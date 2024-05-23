import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./slices/app.slice";

export const reducers = combineReducers({
  app: appSlice.reducer
})