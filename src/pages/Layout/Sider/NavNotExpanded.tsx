import { Popover } from 'antd';
import { isArray } from 'lodash-es';
import { useLocation, useNavigate } from 'react-router-dom';
import CONSTANT from '../../../common/constant';
import ThemeBase from '../../../components/ThemeBase';
import { navIconList } from './index.data';

const NavNotExpanded: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('dashboard');
  };

  const location = useLocation();

  const isActiveIconCls = (path: string | string[]) => {
    const activeCls = '!bg-secondary text-primary dark:text-primary';

    if (typeof path === 'string' && location.pathname === path) {
      return activeCls;
    }

    if (isArray(path) && path.includes(location.pathname)) {
      return activeCls;
    }

    return '';
  };

  const genNavIcon = () => {
    return navIconList(navigate).map((nav) => {
      return (
        <div key={nav.name} className={`p-3`}>
          {nav.children ? (
            <Popover
              placement="rightTop"
              overlayClassName={`dark:bg-darkPrimary`}
              content={
                <ThemeBase.Paper>
                  {nav.children.map((v) => (
                    <ThemeBase.Icon
                      className="mb-1 py-1"
                      icon={<span>{v.name}</span>}
                      key={v.name}
                      onClick={v.onClick}
                    />
                  ))}
                </ThemeBase.Paper>
              }
              trigger="click"
            >
              <ThemeBase.Icon
                className={`dark:bg-darkPrimary text-xl ${isActiveIconCls(
                  nav.children.map((v) => v.path),
                )}`}
                icon={nav.icon}
                onClick={nav.onClick}
              />
            </Popover>
          ) : (
            <ThemeBase.Icon
              className={`dark:bg-darkPrimary text-xl ${isActiveIconCls(nav.path)}`}
              icon={nav.icon}
              onClick={nav.onClick}
            />
          )}
        </div>
      );
    });
  };

  return (
    <>
      <img
        src="/static/images/logo.svg"
        className="my-2 mx-auto w-10 h-10 cursor-pointer"
        onClick={handleLogoClick}
      />
      {genNavIcon()}
    </>
  );
};

export default NavNotExpanded;
