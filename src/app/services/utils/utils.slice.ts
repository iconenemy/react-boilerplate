import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UtilsStore } from "./utils.type";

const initialState: UtilsStore = {
  isDarkMode:
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setDarkMode } = utilsSlice.actions;

export default utilsSlice.reducer;
