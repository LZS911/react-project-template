import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../store';
import { toggleNavMenuState as _toggleNavMenuState } from '../../store/layout';

const useLayoutRedux = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: IReduxState) => {
    return {
      expandNavMenu: state.layout.expandNavMenu
    };
  });

  const toggleNavMenuState = () => {
    dispatch(_toggleNavMenuState());
  };

  return { ...reduxState, toggleNavMenuState };
};

export default useLayoutRedux;
