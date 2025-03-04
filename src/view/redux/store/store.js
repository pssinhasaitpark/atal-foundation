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
  ourNewsSlice,
  homeSlideSlice,
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
    ourNews: ourNewsSlice,
    homeSlide: homeSlideSlice,
  },
});

export default store;
