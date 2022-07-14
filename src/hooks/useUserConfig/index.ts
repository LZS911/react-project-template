import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../store';
import { IUserConfigState, setLoginUserInfo as _setLoginUserInfo } from '../../store/userConfig';

const useUserConfig = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: IReduxState) => {
    return {
      isLogin: state.userConfig.isLogin,
      token: state.userConfig.token,
      username: state.userConfig.username,
      getUserInfoLoading: state.userConfig.getUserInfoLoading,
    };
  });

  const setLoginUserInfo = ({ username, token, isLogin, getUserInfoLoading }: IUserConfigState) => {
    dispatch(
      _setLoginUserInfo({
        username,
        token,
        isLogin,
        getUserInfoLoading,
      }),
    );
  };

  const signOut = () => {
    dispatch(
      _setLoginUserInfo({
        username: '',
        isLogin: false,
        token: '',
        getUserInfoLoading: false,
      }),
    );
  };

  return {
    setLoginUserInfo,
    signOut,
    ...reduxState,
  };
};

export default useUserConfig;
