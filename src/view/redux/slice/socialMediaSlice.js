import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  socialMediaLinks: [],
  loading: false,
  error: null,
  status: 'idle',
};

const socialMediaSlice = createSlice({
  name: 'socialMedia',
  initialState,
  reducers: {
    setSocialMediaLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = 'loading';
    },
    setSocialMediaLinks: (state, action) => {
      state.socialMediaLinks = action.payload;
      state.loading = false;
      state.status = 'succeeded';
    },
    setSocialMediaError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setSocialMediaLoading,
  setSocialMediaLinks,
  setSocialMediaError,
} = socialMediaSlice.actions;

export const selectSocialMediaLinks = (state) => state.socialMedia.socialMediaLinks;
export const selectSocialMediaLoading = (state) => state.socialMedia.loading;
export const selectSocialMediaError = (state) => state.socialMedia.error;
export const selectSocialMediaStatus = (state) => state.socialMedia.status;

export default socialMediaSlice.reducer;
