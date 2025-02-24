import { configureStore } from "@reduxjs/toolkit";
import { ContactSlice } from "../slice/index";

const store = configureStore({
  reducer: {
    contact: ContactSlice,
  },
});

export default store;
