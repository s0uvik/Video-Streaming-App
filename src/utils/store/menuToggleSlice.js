import { createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
  name: "menuToggleSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    hideMenu(state) {
      state.isOpen = false;
    },
  },
});

export default menuToggleSlice;
export const toggleAction = menuToggleSlice.actions;
