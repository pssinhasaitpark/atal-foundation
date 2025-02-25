import { configureStore } from "@reduxjs/toolkit";
import { ContactSlice, SubscribersSlice,socialMediaReducer,ourProgramSlice,aboutUsSlice,eventsSlice } from "../slice/index";

const store = configureStore({
  reducer: {
    contact: ContactSlice,
    subscribe: SubscribersSlice,
    socialMedia: socialMediaReducer,
    ourProgram: ourProgramSlice,
    aboutUs: aboutUsSlice,
    events: eventsSlice,
  },
});

export default store;
