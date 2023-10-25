import { configureStore } from "@reduxjs/toolkit";

import menuToggleSlice from "./menuToggleSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchResultsSlice from "./searchResultsSlice";
import homeResultsSlice from "./homeResultsSlice";

const store = configureStore({
  reducer: {
    isOpen: menuToggleSlice.reducer,
    search: searchSlice.reducer,
    searchResults: searchResultsSlice.reducer,
    homeResults: homeResultsSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export default store;
