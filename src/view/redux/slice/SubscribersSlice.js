import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  status: 'idle',
  error: null,
};

const SubscribersSlice = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {
    setSubscribeEmail: (state, action) => {
      state.email = action.payload;  
    },
    setSubscribeError: (state, action) => {
      state.error = action.payload;  
    },
    setSubscribeLoading: (state) => {
      state.status = 'loading';  
    },
    setStatusSucceeded: (state) => {
      state.status = 'succeeded'; 
    },
    setStatusFailed: (state) => {
      state.status = 'failed';  
    },
  },
});

export const { setSubscribeEmail, setSubscribeError, setSubscribeLoading, setStatusSucceeded, setStatusFailed } = SubscribersSlice.actions;

export default SubscribersSlice.reducer;
