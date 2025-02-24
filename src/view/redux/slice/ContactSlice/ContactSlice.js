import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.data = action.payload;  
    },
    setContactError: (state, action) => {
      state.error = action.payload;  
    },
    setContactLoading: (state) => {
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

export const { setContact, setContactError, setContactLoading, setStatusSucceeded, setStatusFailed } = ContactSlice.actions;

export default ContactSlice.reducer;
