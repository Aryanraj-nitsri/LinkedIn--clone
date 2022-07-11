import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Userslice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
