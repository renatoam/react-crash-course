import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import notificationsSlice from "./notificationsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    notifications: notificationsSlice
  }
})

export default store
