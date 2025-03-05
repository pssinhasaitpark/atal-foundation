import { configureStore } from "@reduxjs/toolkit";
import {
  ContactSlice,
  SubscribersSlice,
  socialMediaReducer,
  ourProgramSlice,
  aboutUsReducer,
  eventsImgsSlice,
  messageUsSlice,
  registrationSlice,
  ourNewsSlice,
  homeSlideSlice,
  eventVidsSlice,
} from "../slice/index";

const store = configureStore({
  reducer: {
    contact: ContactSlice,
    subscribe: SubscribersSlice,
    socialMedia: socialMediaReducer,
    ourProgram: ourProgramSlice,
    aboutUs: aboutUsReducer,
    eventsImgs: eventsImgsSlice,
    eventsVids:eventVidsSlice,
    message: messageUsSlice,
    registration: registrationSlice,
    ourNews: ourNewsSlice,
    homeSlide: homeSlideSlice,
  },
  
});

export default store;
