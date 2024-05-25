import { createSlice } from "@reduxjs/toolkit";

const theme = JSON.parse(localStorage.getItem("theme")!)

const initialState = {
  theme: theme ? theme : "light",
  moreMenu: false,
  loading: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
      localStorage.setItem("theme", JSON.stringify(payload))
    },
    setMoreMenu: (state, { payload }) => {
      state.moreMenu = typeof payload == "boolean" ? payload : !state.moreMenu
    }
  }
})
export const { setTheme, setMoreMenu } = appSlice.actions
export { appSlice }