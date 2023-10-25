import { createSlice } from "@reduxjs/toolkit";

const homeResultsSlice = createSlice({
  name: "home results",
  initialState: {
    homeResults: [],
  },
  reducers: {
    storeResults(state, action) {
      state.homeResults = action.payload;
    },
  },
});

export default homeResultsSlice;
export const homeResultsAction = homeResultsSlice.actions;
