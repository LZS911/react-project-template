import {
  BellOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  TranslationOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import CONSTANT from '../../common/constant';
import ThemeBase from '../../components/ThemeBase';
import useUserConfig from '../../hooks/useUserConfig';
import useLayoutRedux from './useLayoutRedux';
import useResizeObserver from 'use-resize-observer';
import { useBoolean } from 'ahooks';
import useDebounce from '../../hooks/useDebounce';

const Header: React.FC = () => {
  const { expandNavMenu, toggleNavMenuState, changeSiderWidth } = useLayoutRedux();
  const { username } = useUserConfig();
  const headerWidthObserver = useDebounce(
    ({ width }: { width?: number }) => {
      if ((width ?? 0) < 460) {
        hideUserInfo();
      } else {
        showUserInfo();
      }
    },
    [],
    100,
  );
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: headerWidthObserver,
  });
  const [userInfoVisibility, { setFalse: hideUserInfo, setTrue: showUserInfo }] = useBoolean(true);

  const handleClickMenuIcon = (isExpand: boolean) => {
    toggleNavMenuState();

    if (isExpand) {
      changeSiderWidth(CONSTANT.SIDER_WIDTH);
    } else {
      changeSiderWidth(CONSTANT.SIDER_WIDTH_WHEN_EXPAND);
    }
  };

  return (
    <header ref={ref} className="sticky left-auto top-0 right-0 z-[9999]">
      <ThemeBase.Paper className={`px-2 py-3 w-full  flex justify-between items-center`}>
        <ThemeBase.Icon
          icon={expandNavMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          onClick={() => handleClickMenuIcon(expandNavMenu)}
          className="text-base bg-slate-100 hover:bg-slate-300"
        />

        <div className="flex items-center">
          <ThemeBase.Icon
            icon={<WindowsOutlined />}
            className="text-base bg-slate-100 hover:bg-slate-300 mr-2"
          />
          <ThemeBase.Icon
            icon={<TranslationOutlined />}
            className="text-base bg-slate-100 hover:bg-slate-300 mr-2"
          />
          <ThemeBase.Icon
            icon={<BellOutlined />}
            className="text-base bg-slate-100 hover:bg-slate-300 mr-2"
          />
          <ThemeBase.Icon
            icon={<MailOutlined />}
            className="text-base bg-slate-100 hover:bg-slate-300 mr-2"
          />
          <ThemeBase.Icon
            icon={<SettingOutlined />}
            className="text-base bg-slate-100 hover:bg-slate-300 mr-7"
          />
          <ThemeBase.Icon
            hidden={!userInfoVisibility}
            icon={
              <>
                <img className="w-6 h-6 rounded-[50%]" src="https://joeschmoe.io/api/v1/random" />
                <span className="ml-3 font-bold">{username}</span>
              </>
            }
            className="text-base bg-slate-100 hover:bg-slate-300 px-2 py-1"
          />
        </div>
      </ThemeBase.Paper>
    </header>
  );
};

export default Header;
