import { useEffect } from 'react';
import ThemeBase from '../../../components/ThemeBase';
import useLayoutRedux from '../useLayoutRedux';
import NavNotExpanded from './NavNotExpanded';

const Sider: React.FC = () => {
  const { expandNavMenu, siderWidth } = useLayoutRedux();
  useEffect(() => {
    // console.log(expandNavMenu);
  }, [expandNavMenu]);
  return (
    <nav
      className="z-[1300] h-full overflow-y-scroll transition-[width]"
      style={{
        width: siderWidth,
      }}
    >
      <ThemeBase.Paper className="w-full h-full flex flex-col">
        {expandNavMenu ? null : <NavNotExpanded />}
      </ThemeBase.Paper>
    </nav>
  );
};

export default Sider;
