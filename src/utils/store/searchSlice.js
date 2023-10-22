import { createSlice } from "@reduxjs/toolkit";


// this store is for store cacheing for searching
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    storeSuggestion(state, action) {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice;
export const searchAction = searchSlice.actions;
