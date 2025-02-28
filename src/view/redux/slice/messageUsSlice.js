import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.data = action.payload;
    },
    setMessageError: (state, action) => {
      state.error = action.payload;
    },
    setMessageLoading: (state) => {
      state.status = "loading";
    },
    setStatusSucceeded: (state) => {
      state.status = "succeeded";
    },
    setStatusFailed: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  setMessage,
  setMessageError,
  setMessageLoading,
  setStatusSucceeded,
  setStatusFailed,
} = MessageSlice.actions;

export default MessageSlice.reducer;
