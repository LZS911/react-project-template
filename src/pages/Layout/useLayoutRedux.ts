import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../store';
import {
  toggleNavMenuState as _toggleNavMenuState,
  changeSiderWidth as _changeSiderWidth,
} from '../../store/layout';

const useLayoutRedux = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: IReduxState) => {
    return {
      expandNavMenu: state.layout.expandNavMenu,
      siderWidth: state.layout.siderWidth,
    };
  });

  const toggleNavMenuState = () => {
    dispatch(_toggleNavMenuState());
  };

  const changeSiderWidth = (width: number) => {
    dispatch(_changeSiderWidth(width));
  };

  return { ...reduxState, toggleNavMenuState, changeSiderWidth };
};

export default useLayoutRedux;
