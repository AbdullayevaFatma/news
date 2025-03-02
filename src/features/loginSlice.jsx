import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", password: "" },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: function (state, action) {
      state.user = action.payload;
    },
    logoutUser: function (state) {
      state.user = { email: "", password: "" };
    },
  },
});

export const {loginUser, logoutUser}  = loginSlice.actions

export default loginSlice.reducer