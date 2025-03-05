import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventsData: null,
  loading: false,
  error: null,
  status: 'idle',
};

const eventsVidsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventsLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.status = 'loading';
    },
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
      state.loading = false;
      state.status = 'succeeded';
    },
    setEventsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setEventsLoading,
  setEventsData,
  setEventsError,
} = eventsVidsSlice.actions;

export const selectEventsData = (state) => state.events.eventsData;
export const selectEventsLoading = (state) => state.events.loading;
export const selectEventsError = (state) => state.events.error;
export const selectEventsStatus = (state) => state.events.status;

export default eventsVidsSlice.reducer;
