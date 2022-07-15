import { ILayoutProps } from '.';
import Header from './Header';
import Sider from './Sider';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      <Sider />
      {children}
    </div>
  );
};

export default Layout;
