import { configureStore } from "@reduxjs/toolkit";
import {
  ContactSlice,
  SubscribersSlice,
  socialMediaReducer,
  ourProgramSlice,
  aboutUsSlice,
  eventsSlice,
  messageUsSlice,
  registrationSlice,
} from "../slice/index";

const store = configureStore({
  reducer: {
    contact: ContactSlice,
    subscribe: SubscribersSlice,
    socialMedia: socialMediaReducer,
    ourProgram: ourProgramSlice,
    aboutUs: aboutUsSlice,
    events: eventsSlice,
    message: messageUsSlice,
    registration: registrationSlice,
  },
});

export default store;
