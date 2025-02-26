import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  GalleryData: null,
  loading: false,
  error: null,
  status: 'idle',
};

const GallerySlice = createSlice({
  name: 'Gallery',
  initialState,
  reducers: {
    setGalleryLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = 'loading';
    },
    setGalleryData: (state, action) => {
      state.GalleryData = action.payload;
      state.loading = false;
      state.status = 'succeeded';
    },
    setGalleryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setGalleryLoading,
  setGalleryData,
  setGalleryError,
} = GallerySlice.actions;

export const selectGalleryData = (state) => state.Gallery.GalleryData;
export const selectGalleryLoading = (state) => state.Gallery.loading;
export const selectGalleryError = (state) => state.Gallery.error;
export const selectGalleryStatus = (state) => state.Gallery.status;

export default GallerySlice.reducer;
