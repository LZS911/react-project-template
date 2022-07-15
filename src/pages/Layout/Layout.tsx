import { ILayoutProps } from '.';
import Header from './Header';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
