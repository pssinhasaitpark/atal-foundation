import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeSlideData: null,
  loading: false,
  error: null,
  status: "idle",
};

const homeSlideSlice = createSlice({
  name: "homeSlide",
  initialState,
  reducers: {
    setHomeSlideLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
    },
    setHomeSlideData: (state, action) => {
      state.homeSlideData = action.payload;
      state.loading = false;
      state.status = "succeeded";
    },
    setHomeSlideError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const { setHomeSlideLoading, setHomeSlideData, setHomeSlideError } =
  homeSlideSlice.actions;

export const selectHomeSlideData = (state) => state.homeSlide.homeSlideData;
export const selectHomeSlideLoading = (state) => state.homeSlide.loading;
export const selectHomeSlideError = (state) => state.homeSlide.error;
export const selectHomeSlideStatus = (state) => state.homeSlide.status;

export default homeSlideSlice.reducer;
