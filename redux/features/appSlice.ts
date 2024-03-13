"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
export type AppState = {
  isOpen: boolean;
  currentTab: string;
  currentPage: string;
};
// Define the initial state using that type
const intialState: AppState = {
  isOpen: false,
  currentTab: "about",
  currentPage: "/",
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: intialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { toggle, setCurrentTab, setCurrentPage } = appSlice.actions;
export default appSlice.reducer;
