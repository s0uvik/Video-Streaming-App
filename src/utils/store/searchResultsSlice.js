import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResultsSlice",
  initialState: {
    searchResults: null,
  },
  reducers: {
    storeSearchResults(state, action) {
      // this filter for only video results
      const filterResults = action.payload?.filter((item) => {
        return item.id.videoId;
      });
      state.searchResults = filterResults;
    },
  },
});

export default searchResultsSlice;
export const searchResultsAction = searchResultsSlice.actions;
