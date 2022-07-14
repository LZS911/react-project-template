import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CONSTANT from '../../common/constant';
export interface IUserConfigState {
  username: string;
  isLogin: boolean;
  token: string;
  getUserInfoLoading: boolean;
}
const localToken = window.localStorage.getItem(CONSTANT.TOKEN);
const initialState: IUserConfigState = {
  username: '',
  isLogin: !!localToken,
  token: localToken ?? '',
  getUserInfoLoading: false,
};
const userConfig = createSlice({
  name: 'userConfig',
  initialState,
  reducers: {
    setLoginUserInfo: (state, action: PayloadAction<IUserConfigState>) => {
      state.username = action.payload.username;
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
      state.getUserInfoLoading = action.payload.getUserInfoLoading;
      localStorage.setItem(CONSTANT.TOKEN, action.payload.token);
    },
  },
});
export const { setLoginUserInfo } = userConfig.actions;
export default userConfig.reducer;
