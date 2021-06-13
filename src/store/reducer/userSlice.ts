import { createSlice } from '@reduxjs/toolkit';

const name = 'USER';

export const userSlice = createSlice({
  name,
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
