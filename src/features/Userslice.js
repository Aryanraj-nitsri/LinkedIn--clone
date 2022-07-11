import { createSlice } from "@reduxjs/toolkit";
export const Userslice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    usersignOut: (state) => {
      state.user = null;
    },
  },
});
export const { signIn, usersignOut } = Userslice.actions;
export default Userslice.reducer;
