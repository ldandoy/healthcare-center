import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  jwt: null,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        const {jwt, user} = action.payload
        state.isAuth = true
        state.user = user
        state.jwt = jwt
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer