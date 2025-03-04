import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ourNewsData: null,
  loading: false,
  error: null,
  status: "idle",
};

const ourNewsSlice = createSlice({
  name: "ourNews",
  initialState,
  reducers: {
    setOurNewsLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
    },
    setOurNewsData: (state, action) => {
      state.ourNewsData = action.payload;
      state.loading = false;
      state.status = "succeeded";
    },
    setOurNewsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const { setOurNewsLoading, setOurNewsData, setOurNewsError } =
  ourNewsSlice.actions;

export const selectOurNewsData = (state) => state.ourNews.ourNewsData;
export const selectOurNewsLoading = (state) => state.ourNews.loading;
export const selectOurNewsError = (state) => state.ourNews.error;
export const selectOurNewsStatus = (state) => state.ourNews.status;

export default ourNewsSlice.reducer;
