import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popupEnabled: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupState: (state, action) => {
      state.popupEnabled = action.payload;
    },
  },
});

export const { setPopupState } = popupSlice.actions;
export default popupSlice.reducer;
