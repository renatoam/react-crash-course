import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import notificationsSlice from "./notificationsSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    notifications: notificationsSlice,
    menu: menuSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
