import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    setNotifications: (_, action) => {
      return action.payload
    }
  }
})

export const { setNotifications } = notificationSlice.actions

export default notificationSlice.reducer
