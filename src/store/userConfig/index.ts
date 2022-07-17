import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CONSTANT from '../../common/constant';
import LocalStorageWrapper from '../../utils/LocalStorageWrapper';
export interface IUserConfigState {
  username: string;
  emailAddress: string;
  isLogin: boolean;
  token: string;
}
export type IUserLoginInfo = Omit<IUserConfigState, 'token' | 'isLogin'>;
export type IUserLoginState = Pick<IUserConfigState, 'token' | 'isLogin'>;
const localToken = LocalStorageWrapper.get(CONSTANT.TOKEN);
const initialState: IUserConfigState = {
  username: '',
  emailAddress: '',
  isLogin: !!localToken,
  token: localToken ?? '',
};
const userConfig = createSlice({
  name: 'userConfig',
  initialState,
  reducers: {
    setLoginUserInfo: (
      state,
      action: PayloadAction<Omit<IUserConfigState, 'token' | 'isLogin'>>,
    ) => {
      state.username = action.payload.username;
      state.emailAddress = action.payload.emailAddress;
    },
    setLoginState: (state, action: PayloadAction<Pick<IUserConfigState, 'token' | 'isLogin'>>) => {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
      localStorage.setItem(CONSTANT.TOKEN, action.payload.token);
    },
  },
});
export const { setLoginUserInfo, setLoginState } = userConfig.actions;
export default userConfig.reducer;
