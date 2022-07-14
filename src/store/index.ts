import { configureStore } from '@reduxjs/toolkit';
import userConfig from './userConfig';
const store = configureStore({
  reducer: {
    userConfig
  }
});
export type IReduxState = ReturnType<typeof store.getState>;
export default store;
