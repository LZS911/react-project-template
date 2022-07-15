import {
  BellOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  TranslationOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import ThemeBase from '../../components/ThemeBase';
import useUserConfig from '../../hooks/useUserConfig';
import useLayoutRedux from './useLayoutRedux';

const Header: React.FC = () => {
  const { expandNavMenu, toggleNavMenuState } = useLayoutRedux();
  const { username } = useUserConfig();
  return (
    <ThemeBase.Paper
      className={`px-6 py-3 w-full !border-b-slate-100 border-b flex justify-between items-center`}
    >
      <ThemeBase.Icon
        icon={expandNavMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        onClick={toggleNavMenuState}
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
  );
};

export default Header;
