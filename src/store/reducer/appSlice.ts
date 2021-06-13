import { createSlice } from '@reduxjs/toolkit';

const name = 'APP';

export const appSlice = createSlice({
  name,
  initialState: {
    channelId: null,
    channelName: null,
  },

  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state: any) => state.app.channelId;
export const selectChannelName = (state: any) => state.app.channelName;

export default appSlice.reducer;
