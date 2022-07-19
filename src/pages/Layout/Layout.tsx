import { ILayoutProps } from '.';
import ThemeBase from '../../components/ThemeBase';
import Header from './Header/Header';
import Main from './Main/Main';
import Sider from './Sider/Sider';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <ThemeBase.Paper className="w-full h-full flex">
      <Sider />
      <div className="flex-auto transition-[width]">
        <Header />
        <Main>{children}</Main>
      </div>
    </ThemeBase.Paper>
  );
};

export default Layout;
