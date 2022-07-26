import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, _action) {
      state.user = {
        id: null,
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
