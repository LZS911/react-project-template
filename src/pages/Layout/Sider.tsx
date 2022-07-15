import { useEffect } from 'react';
import useLayoutRedux from './useLayoutRedux';

const Sider: React.FC = () => {
  const { expandNavMenu } = useLayoutRedux();
  useEffect(() => {
    console.log(expandNavMenu);
  }, [expandNavMenu]);
  return <div></div>;
};

export default Sider;
