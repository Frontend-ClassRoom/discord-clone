import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userSlice';
import appReducer from './reducer/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
