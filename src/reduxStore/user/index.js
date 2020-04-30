import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: "",
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export const { reducer } = user
export const { setCurrentUser } = user.actions
