import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
  },
  reducers: {
    addChats(state, action) {
      state.chat.splice(20, 1)
      state.chat.unshift(action.payload);
    },
  },
});

export default chatSlice;
export const chatAction = chatSlice.actions;
