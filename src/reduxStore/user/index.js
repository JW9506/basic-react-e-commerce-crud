import { createSlice } from "@reduxjs/toolkit"

/*
  type User = {
    currentUser: string
  }
*/

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: "",
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    logOut: (state) => {
      state.currentUser = ""
    },
  },
})

export const { setCurrentUser, logOut } = user.actions
export const { reducer } = user
