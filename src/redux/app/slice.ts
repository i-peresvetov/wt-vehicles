import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppSliceState } from "./types"
// import { UserResponse } from "../../api/types"

// import getStateFromLS from "../../utils/getStateFromLS"

// const initialState: AppSliceState = getStateFromLS()
const initialState: AppSliceState = {
  filter: undefined,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    placeholder: (state, action: PayloadAction<undefined>) => {
      state.filter = undefined
    },
    // setPage: (state, action: PayloadAction<number>) => {
    //   state.page = action.payload
    // },
    // logIn: (state, action: PayloadAction<UserResponse>) => {
    //   const { token } = action.payload
    //   state.authorized = true
    //   state.authToken = token
    // },
    // logOut: (state) => {
    //   state.authorized = false
    //   state.authToken = undefined
    //   state.currentUser = undefined
    // },
    // setCurrentUser: (state, action: PayloadAction<UserProfile>) => {
    //   const {username, email, image} = action.payload
    //   const user = {
    //     username, email, image
    //   }
    //   state.currentUser = user
    // },
  },
})

export const { placeholder } = appSlice.actions

export default appSlice.reducer
