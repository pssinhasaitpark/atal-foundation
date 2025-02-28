import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setRegistration: (state, action) => {
      state.data = action.payload;
    },
    setRegistrationError: (state, action) => {
      state.error = action.payload;
    },
    setRegistrationLoading: (state) => {
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
  setRegistration,
  setRegistrationError,
  setRegistrationLoading,
  setStatusSucceeded,
  setStatusFailed,
} = RegistrationSlice.actions;

export default RegistrationSlice.reducer;
