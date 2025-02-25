import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ourProgramData: null,
  loading: false,
  error: null,
  status: "idle",
};

const ourProgramSlice = createSlice({
  name: "ourProgram", // Prefix for slice
  initialState,
  reducers: {
    setOurProgramLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
    },
    setOurProgramData: (state, action) => {
      state.ourProgramData = action.payload;
      state.loading = false;
      state.status = "succeeded";
    },
    setOurProgramError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const { setOurProgramLoading, setOurProgramData, setOurProgramError } =
  ourProgramSlice.actions;

export const selectOurProgramData = (state) => state.ourProgram.ourProgramData;
export const selectOurProgramLoading = (state) => state.ourProgram.loading;
export const selectOurProgramError = (state) => state.ourProgram.error;
export const selectOurProgramStatus = (state) => state.ourProgram.status;

export default ourProgramSlice.reducer;
