import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aboutUsData: null,
  loading: false,
  error: null,
  status: 'idle',
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    setAboutUsLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = 'loading';
    },
    setAboutUsData: (state, action) => {
      state.aboutUsData = action.payload;
      state.loading = false;
      state.status = 'succeeded';
    },
    setAboutUsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setAboutUsLoading,
  setAboutUsData,
  setAboutUsError,
} = aboutUsSlice.actions;

export const selectAboutUsData = (state) => state.aboutUs.aboutUsData;
export const selectAboutUsLoading = (state) => state.aboutUs.loading;
export const selectAboutUsError = (state) => state.aboutUs.error;
export const selectAboutUsStatus = (state) => state.aboutUs.status;

export default aboutUsSlice.reducer;
