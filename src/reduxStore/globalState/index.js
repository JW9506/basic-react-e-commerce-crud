import { createSlice } from "@reduxjs/toolkit"
import { logOut } from "reduxStore/user"

const global = createSlice({
  name: "global",
  initialState: {
    isUserProfileOpened: false,
  },
  reducers: {
    toggleUserProfile: (state) => {
      state.isUserProfileOpened = !state.isUserProfileOpened
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOut, (state) => {
      state.isUserProfileOpened = !state.isUserProfileOpened
    })
  },
})

export const { toggleUserProfile } = global.actions
export const { reducer } = global
