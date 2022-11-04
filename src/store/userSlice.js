import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (_state, action) => {
      return action.payload
    },
    setToken: (state, action) => {
      return {
        ...state,
        accessToken: action.payload
      }
    }
  }
})

export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer
